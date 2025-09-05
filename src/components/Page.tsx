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
        className={`/* outer soft */ relative overflow-visible rounded-md border border-gray-200 bg-[#fdfcf7] shadow-[0_4px_10px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:rounded-md before:shadow-inner before:content-[''] ${className ?? ""}`}
      >
        {/* Sticky notes behind the page */}
        {showStickyNotes && <StickyNotesList currentPage={pageNumber} />}

        {/* Page content */}
        <div className="prose relative z-10 flex h-full flex-col bg-[#fdfcf7] p-8 text-gray-800">
          {children}
          <p className="mx-auto mt-auto text-right text-xs text-gray-500">
            {number}
          </p>
        </div>
      </div>
    );
  },
);

export default Page;
