// Book.tsx
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import PageCover from "./PageCover";
import TableOfContents from "../pages/TableOfContents";
import Preface from "./Preface";

export default function Book() {
  return (
    <HTMLFlipBook
      width={300}
      height={400}
      size="stretch"
      minWidth={300}
      maxWidth={500}
      minHeight={500}
      maxHeight={500}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="md:mx-0 mx-5 flex justify-center items-center"
    >
      {/* Cover page */}
      <PageCover data-density="hard" className="!p-0">
        <img
          src="src/assets/BAT (4).png"
          alt=""
          className="object-fit w-full h-full"
        />
      </PageCover>

      {/* Normal inner pages */}
      <Page number="1">
        <TableOfContents />
      </Page>
      <Page number="2">
        <Preface />
      </Page>
      <Page number="3">Chapter 2</Page>

      <Page number="4" data-density="hard">
        Back Cover
      </Page>
    </HTMLFlipBook>
  );
}
