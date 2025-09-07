import junimo from "../assets/junimo.png";
import heart from "../assets/heart-doodle.gif";

const End = () => {
  return (
    <section className="flex h-[50vh] items-center justify-center">
      <div className="relative max-w-2xl space-y-4 text-center">
        <h2 className="text-5xl font-semibold underline underline-offset-8">
          THE END.
        </h2>
      </div>

      {/* Bottom-left fixed Junimo + Heart */}
      <div className="absolute bottom-0 left-0 p-4">
        <div className="group relative inline-block transition-transform hover:scale-105">
          <img className="w-60" src={junimo} alt="junimo" />
          <img
            className="absolute top-0 -right-2 w-25 opacity-0 transition-opacity duration-500 group-hover:opacity-25"
            src={heart}
            alt="heart"
          />
        </div>
      </div>
    </section>
  );
};

export default End;
