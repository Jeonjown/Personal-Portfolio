import React from "react";

interface StickyNotesProps {
  children: React.ReactNode;
  className?: string;
}

const StickyNotes = ({ children, className }: StickyNotesProps) => {
  return (
    <div
      className={`-z-10 flex h-10 w-15 items-center justify-center bg-yellow-100 shadow-inner md:h-15 md:w-20 ${
        className ?? ""
      }`}
    >
      <p className="font-gloria origin-center transform text-xs font-semibold">
        {children}
      </p>
    </div>
  );
};

export default StickyNotes;
