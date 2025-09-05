import bookCover from "../assets/BAT (4).png";
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
