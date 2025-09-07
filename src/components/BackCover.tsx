import bookCover from "../assets/book-back-cover.png";
const BackCover = () => {
  return (
    <img
      src={bookCover}
      alt="Book Cover"
      className="h-full w-full object-cover"
    />
  );
};

export default BackCover;
