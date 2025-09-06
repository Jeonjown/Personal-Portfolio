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

export default function Book() {
  const isMobile = window.innerWidth < 700;

  return (
    <HTMLFlipBook
      width={350}
      minWidth={350}
      maxWidth={450}
      height={600}
      minHeight={550}
      maxHeight={600}
      size="stretch"
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="mx-5 flex items-center justify-center"
    >
      {/* Cover page - make hard on mobile */}
      <PageCover data-density={"hard"} className="!p-0">
        <Cover />
      </PageCover>

      {/* Inner pages - set density based on mobile */}
      <Page number="1" data-density={isMobile ? "hard" : "soft"}>
        <TableOfContents />
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
    </HTMLFlipBook>
  );
}
