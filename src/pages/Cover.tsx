import bookCover from "../assets/book-cover.png";
const Cover = () => {
  return (
    <img
      src={bookCover}
      alt="Book Cover"
      className="h-full w-full object-cover"
    />
  );
};

export default Cover;
