interface StickyNotesProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const StickyNotes = ({ children, className, onClick }: StickyNotesProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex h-10 w-15 items-center justify-center bg-yellow-100 px-2 text-center shadow-inner md:h-15 md:w-20 ${
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
