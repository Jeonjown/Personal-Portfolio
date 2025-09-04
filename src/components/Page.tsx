import React, { useEffect, useState } from "react";
import StickyNotes from "./StickyNotes";

interface PageProps {
  number: string;
  children: React.ReactNode;
  className?: string;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ number, children, className }, ref) => {
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
        className={`
          ${className}
          relative
          bg-[#fdfcf7]
          border
          border-gray-200
          shadow-[inset_0_4px_8px_rgba(0,0,0,0.1),inset_0_-4px_8px_rgba(0,0,0,0.05)]
          rounded-sm
          overflow-visible
        `}
      >
        {/* Sticky notes behind the page */}
        {showStickyNotes && (
          <div className="absolute -top-15 -right-0 flex space-x-2 -z-10">
            <StickyNotes />
            <StickyNotes />
            <StickyNotes />
          </div>
        )}

        {/* Page content above sticky notes */}
        <div className="prose flex flex-col h-full relative z-10 p-8 bg-[#fdfcf7]">
          <div>{children}</div>
          <p className="text-xs text-gray-500 text-right mt-auto mx-auto">
            {number}
          </p>
        </div>
      </div>
    );
  }
);

export default Page;
