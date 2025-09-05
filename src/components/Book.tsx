import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import PageCover from "./PageCover";
import Page from "./Page";
import Cover from "../pages/Cover";
import TableOfContents from "../pages/TableOfContents";
import Preface from "./Preface";
import AboutMe from "../pages/AboutMe";
import PersonalBackground from "../pages/PersonalBackground";

// Type-safe interface for the FlipBook instance
interface FlipBookInstance {
  flipNext(): void;
  flipPrev(): void;
  flip(page: number): void;
  getCurrentPageIndex(): number;
  getPageCount(): number;
  onFlip(callback: () => void): void;
  offFlip(callback: () => void): void;
}

// Pages structure
interface BookPage {
  id: number;
  content: React.ReactNode;
}

export default function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const flipBookRef = useRef<FlipBookInstance | null>(null);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages: BookPage[] = [
    { id: 0, content: <Cover /> },
    { id: 1, content: <TableOfContents /> },
    { id: 2, content: <Preface /> },
    { id: 3, content: <AboutMe /> },
    { id: 4, content: <PersonalBackground /> },
  ];

  // Subscribe to flip events
  useEffect(() => {
    const book = flipBookRef.current;
    if (!book) return;

    const onFlip = () => setCurrentPage(book.getCurrentPageIndex());
    book.onFlip(onFlip);

    return () => book.offFlip(onFlip);
  }, []);

  return (
    <HTMLFlipBook
      ref={flipBookRef as React.Ref<HTMLDivElement>} // cast for TS
      width={350}
      minWidth={350}
      maxWidth={450}
      height={580}
      minHeight={580}
      maxHeight={600}
      size="stretch"
      maxShadowOpacity={isMobile ? 0 : 0.5} // remove shadows on mobile
      showCover={true}
      mobileScrollSupport={true}
      flippingTime={isMobile ? 400 : 800} // faster on mobile
      className="flex justify-center items-center mx-5"
    >
      {pages.map((page) => {
        const isNearCurrent = Math.abs(currentPage - page.id) <= 1;

        // Cover page is always hard
        if (page.id === 0) {
          return (
            <PageCover key={page.id} data-density="hard" className="!p-0">
              {page.content}
            </PageCover>
          );
        }

        return (
          <Page
            key={page.id}
            number={page.id.toString()}
            data-density={isMobile ? "hard" : "soft"} // soft on desktop
          >
            {/* Lazy render pages for performance */}
            {isMobile ? (isNearCurrent ? page.content : null) : page.content}
          </Page>
        );
      })}
    </HTMLFlipBook>
  );
}
