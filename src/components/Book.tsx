import React, { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import PageCover from "./PageCover";
import Page from "./Page";
import Cover from "../pages/Cover";
import TableOfContents from "../pages/TableOfContents";
import Preface from "./Preface";
import AboutMe from "../pages/AboutMe";
import PersonalBackground from "../pages/PersonalBackground";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import ProjectOne from "../pages/ProjectOne";
import ProjectTwo from "../pages/ProjectTwo";
import ProjectThree from "../pages/ProjectThree";
import CareerHiglights from "../pages/CareerHighlights";
import Experience from "../pages/Experience";
import End from "../pages/End";
import { FlipBookContext } from "../contexts/FlipBookContext";
import BackCover from "./BackCover";
import { useIsMobile } from "../hooks/useIsMobile";
import useMode from "../hooks/useMode";

interface FlipBookAPI {
  pageFlip: () => {
    flip: (pageNumber: number, corner?: "top" | "bottom") => void;
    getPageCount: () => number;
    getCurrentPageIndex: () => number;
    destroy: () => void;
  };
}

export default function Book() {
  const isMobile = useIsMobile(700);
  const { mode } = useMode();

  const bookRef = useRef<FlipBookAPI | null>(null);

  useEffect(() => {
    const currentBook = bookRef.current;

    return () => {
      if (!currentBook) return;

      const pf = currentBook.pageFlip?.();

      // Only call destroy if it exists
      if (pf?.destroy) {
        pf.destroy();
      }
    };
  }, []);

  const goToPage = (index: number) => {
    if (!bookRef.current) return;
    const pf = bookRef.current.pageFlip();

    console.log("index:", index);
    pf.flip(index);
  };

  return (
    <>
      <FlipBookContext.Provider
        value={{
          goToPage,
        }}
      >
        <HTMLFlipBook
          ref={bookRef as unknown as React.Ref<HTMLDivElement>}
          width={370}
          minWidth={370}
          maxWidth={470}
          height={550}
          minHeight={550}
          maxHeight={550}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={!mode && isMobile}
          clickEventForward={true}
          useMouseEvents={true}
          className="mx-5 flex items-center justify-center"
        >
          <PageCover data-density="hard" className="!p-0">
            <Cover />
          </PageCover>

          <Page number="1" data-density={isMobile ? "hard" : "soft"}>
            <TableOfContents isMobile={isMobile} />
          </Page>

          <Page number="2" data-density={isMobile ? "hard" : "soft"}>
            <Preface />
          </Page>

          <Page number="3" data-density={isMobile ? "hard" : "soft"}>
            <AboutMe />
          </Page>

          <Page number="4" data-density={isMobile ? "hard" : "soft"}>
            <PersonalBackground />
          </Page>

          <Page number="5" data-density={isMobile ? "hard" : "soft"}>
            <Skills />
          </Page>

          <Page number="6" data-density={isMobile ? "hard" : "soft"}>
            <Projects />
          </Page>

          <Page number="7" data-density={isMobile ? "hard" : "soft"}>
            <ProjectOne />
          </Page>

          <Page number="8" data-density={isMobile ? "hard" : "soft"}>
            <ProjectTwo />
          </Page>

          <Page number="9" data-density={isMobile ? "hard" : "soft"}>
            <ProjectThree />
          </Page>

          <Page number="10" data-density={isMobile ? "hard" : "soft"}>
            <CareerHiglights />
          </Page>

          <Page number="11" data-density={isMobile ? "hard" : "soft"}>
            <Experience />
          </Page>

          <Page number="12" data-density={isMobile ? "hard" : "soft"}>
            <End />
          </Page>

          <PageCover data-density="hard" className="!p-0">
            <BackCover />
          </PageCover>
        </HTMLFlipBook>
      </FlipBookContext.Provider>
    </>
  );
}
