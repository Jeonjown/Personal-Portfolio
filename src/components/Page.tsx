import React, { useEffect, useState } from "react";
import StickyNotesList from "./StickyNotesList";

interface PageProps {
  number: string;
  children: React.ReactNode;
  className?: string;
  "data-density"?: "soft" | "hard";
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ number, children, className, "data-density": density }, ref) => {
    const pageNumber = parseInt(number, 10);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 700);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const showStickyNotes = isMobile || pageNumber % 2 === 0;

    return (
      <div
        ref={ref}
        data-density={density}
        className={`${
          className ?? ""
        } relative bg-[#fdfcf7] border border-gray-200 rounded-sm overflow-visible shadow-none`}
      >
        {/* Sticky notes behind the page */}
        {showStickyNotes && <StickyNotesList />}

        {/* Page content */}
        <div className="prose flex flex-col h-full relative z-10 p-8 bg-[#fdfcf7]">
          {children}
          <p className="text-xs text-gray-500 text-right mt-auto mx-auto">
            {number}
          </p>
        </div>
      </div>
    );
  }
);

export default Page;
