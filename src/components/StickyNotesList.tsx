import StickyNotes from "./StickyNotes";

const StickyNotesList = () => {
  return (
    <div className="absolute -top-15 -right-0 flex space-x-2 -z-10 pointer-events-none">
      <StickyNotes />
      <StickyNotes />
      <StickyNotes />
    </div>
  );
};

export default StickyNotesList;
