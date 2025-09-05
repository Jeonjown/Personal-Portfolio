import HTMLFlipBook from "react-pageflip";
import PageCover from "./PageCover";
import Page from "./Page";
import Cover from "../pages/Cover";
import TableOfContents from "../pages/TableOfContents";
import Preface from "./Preface";
import AboutMe from "../pages/AboutMe";
import PersonalBackground from "../pages/PersonalBackground";

export default function Book() {
  const isMobile = window.innerWidth < 700;

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
      className="flex justify-center items-center mx-5 "
    >
      {/* Cover page - make hard on mobile */}
      <PageCover data-density={"hard"} className="!p-0">
        <Cover />
      </PageCover>

      {/* Inner pages - set density based on mobile */}
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
    </HTMLFlipBook>
  );
}
