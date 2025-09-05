import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import PageCover from "./PageCover";
import Page from "./Page";
import Cover from "../pages/Cover";
import TableOfContents from "../pages/TableOfContents";
import Preface from "./Preface";
import AboutMe from "../pages/AboutMe";
import PersonalBackground from "../pages/PersonalBackground";

interface BookPage {
  id: number;
  content: React.ReactNode;
}

export default function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
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

  const handleFlip = (e: number) => setCurrentPage(e);

  return (
    <HTMLFlipBook
      width={350}
      minWidth={350}
      maxWidth={450}
      height={580}
      minHeight={580}
      maxHeight={600}
      size="stretch"
      maxShadowOpacity={isMobile ? 0 : 0.5}
      showCover={true}
      mobileScrollSupport={true}
      flippingTime={isMobile ? 400 : 800}
      className="flex justify-center items-center mx-5"
      // @ts-expect-error TypeScript does not recognize onFlip prop
      onFlip={handleFlip}
    >
      {pages.map((page) => {
        const isNearCurrent = Math.abs(currentPage - page.id) <= 1;

        if (page.id === 0) {
          // Cover page is always hard
          return (
            <PageCover key={page.id} data-density="hard" className="!p-0">
              {page.content}
            </PageCover>
          );
        }

        return (
          <Page key={page.id} number={page.id.toString()}>
            {/* Lazy render only on mobile */}
            {isMobile ? (isNearCurrent ? page.content : null) : page.content}
          </Page>
        );
      })}
    </HTMLFlipBook>
  );
}
