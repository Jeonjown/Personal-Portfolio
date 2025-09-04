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
  //resize for mobile
  // jumping animartion
  return (
    <>
      <HTMLFlipBook
        width={300}
        height={500}
        size="stretch"
        minWidth={300}
        maxWidth={500}
        minHeight={400}
        maxHeight={500}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="flex justify-center items-center  mx-10 relative"
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
