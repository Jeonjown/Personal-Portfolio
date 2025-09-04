import bookCover from "../assets/BAT (4).png";
const Cover = () => {
  return (
    <img
      src={bookCover}
      alt="Book Cover"
      className="object-cover w-full h-full"
    />
  );
};

export default Cover;
