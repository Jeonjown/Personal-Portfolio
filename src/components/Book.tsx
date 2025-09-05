// Book.tsx
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import PageCover from "./PageCover";
import TableOfContents from "../pages/TableOfContents";
import Preface from "./Preface";
import Cover from "../pages/Cover";
import AboutMe from "../pages/AboutMe";
import PersonalBackground from "../pages/PersonalBackground";

export default function Book() {
  const isMobile = window.innerWidth < 700;

  return (
    <>
      <HTMLFlipBook
        width={350}
        minWidth={350}
        maxWidth={500}
        height={550}
        minHeight={550}
        maxHeight={550}
        size="stretch"
        maxShadowOpacity={isMobile ? 0 : 0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="flex justify-center items-center mx-5"
      >
        {/* Cover page */}
        <PageCover data-density="hard" className="!p-0">
          <Cover />
        </PageCover>
        {/* Normal inner pages */}
        <Page number="1">
          <TableOfContents />
        </Page>
        <Page number="2">
          <Preface />
        </Page>
        <Page number="3">
          <AboutMe />
        </Page>
        <Page number="4">
          <PersonalBackground />
        </Page>

        {/* <Page number="4" data-density="hard">
        Back Cover
      </Page> */}
      </HTMLFlipBook>
    </>
  );
}
