import StickyNotes from "./StickyNotes";
import { useFlipBook } from "../contexts/FlipBookContext";

interface StickyNotesListProps {
  currentPage: number;
  isMobile: boolean;
}

const StickyNotesList = ({ currentPage, isMobile }: StickyNotesListProps) => {
  const { goToPage } = useFlipBook();

  const stickyNotes = [
    { label: "TOC", indexMobile: 2, indexDesktop: 0 },
    { label: "About Me", indexMobile: 2, indexDesktop: 1 },
    { label: "Projects", indexMobile: 5, indexDesktop: 4 },
    { label: "Experience", indexMobile: 10, indexDesktop: 9 },
  ];

  return (
    <div className="font-caveat absolute -top-10 -right-0 -z-10 mr-5 flex space-x-5 md:-top-15">
      {currentPage >= 3 &&
        stickyNotes.map((note, idx) => {
          const flipIndex = isMobile ? note.indexMobile : note.indexDesktop;

          return (
            <StickyNotes
              key={idx}
              className={`translate-y-2 ${
                idx % 2 === 0 ? "rotate-6" : "-rotate-6"
              } transition-transform hover:translate-y-0 hover:rotate-0 hover:cursor-pointer md:translate-y-3`}
              onClick={() => goToPage(flipIndex)}
            >
              {note.label}
            </StickyNotes>
          );
        })}
    </div>
  );
};

export default StickyNotesList;
