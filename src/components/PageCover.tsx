import React from "react";

interface PageCoverProps {
  children: React.ReactNode;
  className?: string;
}

const PageCover = React.forwardRef<HTMLDivElement, PageCoverProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        data-density="hard"
        className={`relative w-full h-full overflow-hidden ${className}`}
      >
        {children}
      </div>
    );
  }
);

export default PageCover;
