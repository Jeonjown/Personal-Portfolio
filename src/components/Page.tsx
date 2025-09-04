import React from "react";

interface PageProps {
  number: string;
  children: React.ReactNode;
  className?: string;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ number, children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          ${className}
          bg-[#fdfcf7]  
          p-8
          border
          border-gray-200
          shadow-[inset_0_4px_8px_rgba(0,0,0,0.1),inset_0_-4px_8px_rgba(0,0,0,0.05)]
          rounded-sm
        `}
      >
        <div className="prose flex flex-col h-full">
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
