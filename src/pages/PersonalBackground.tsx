const PersonalBackground = () => {
  return (
    <section className="flex flex-col items-center px-3 py-4  h-full">
      <div className="w-full space-y-3">
        {/* Subsection Title */}
        <h3 className="text-base font-semibold tracking-wide underline underline-offset-4 decoration-gray-400 text-center">
          Personal Background
        </h3>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-4">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 overflow-hidden rounded-xl shadow-md">
              <img
                src="src/assets/1756895771971.JPG"
                alt="Picture of myself"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <p className="text-sm text-gray-700 leading-relaxed">
              I graduated <span className="font-semibold">Cum Laude</span> from{" "}
              <span className="font-semibold">
                Rizal Technological University
              </span>{" "}
              with a Bachelor of Science in Information Technology.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-2 pt-3 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            I specialize in building modern JavaScript applications with a
            strong focus on performance, SEO optimization, and delivering
            seamless user experiences.
          </p>
          <p className="text-sm italic text-gray-700 leading-relaxed">
            “I love solving problems and turning ideas into real-world
            applications. I enjoy tackling complex challenges while honing my
            craft and creating user-friendly websites.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalBackground;
