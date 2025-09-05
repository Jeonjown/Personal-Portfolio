import StickyNotes from "./StickyNotes";

interface StickyNotesListProps {
  currentPage: number;
}

const StickyNotesList = ({ currentPage }: StickyNotesListProps) => {
  return (
    <div className="font-caveat absolute -top-10 -right-0 -z-10 mr-5 flex space-x-5 md:-top-15">
      {currentPage >= 3 && (
        <>
          <StickyNotes className="translate-y-2 rotate-6 transition-transform hover:translate-y-0 hover:rotate-0 hover:cursor-pointer md:translate-y-3">
            About Me
          </StickyNotes>
          <StickyNotes className="translate-y-2 -rotate-6 transition-transform hover:translate-y-0 hover:rotate-0 hover:cursor-pointer md:translate-y-3">
            Skills
          </StickyNotes>
          <StickyNotes className="translate-y-2 rotate-6 transition-transform hover:translate-y-0 hover:rotate-0 hover:cursor-pointer md:translate-y-3">
            Projects
          </StickyNotes>
          <StickyNotes className="translate-y-2 -rotate-6 transition-transform hover:translate-y-0 hover:rotate-0 hover:cursor-pointer md:translate-y-3">
            Experience
          </StickyNotes>
        </>
      )}
    </div>
  );
};

export default StickyNotesList;
