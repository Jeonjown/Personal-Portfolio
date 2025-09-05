import profilePic from "../assets/1756895771971.png";

const PersonalBackground = () => {
  return (
    <section className="flex h-full flex-col items-center">
      <div className="w-full space-y-4">
        {/* Title */}
        <h3 className="text-center text-base font-semibold tracking-wide underline underline-offset-4 sm:text-lg lg:text-xl">
          Personal Background
        </h3>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="h-28 w-28 overflow-hidden sm:h-32 sm:w-32 lg:h-36 lg:w-36">
            <img
              src={profilePic}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 text-center">
          {/* Name + Nickname */}
          <div>
            <p className="text-lg font-bold sm:text-xl lg:text-2xl">
              ALAN B. MANABAT JR.
            </p>
            <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
              <span className="italic">“BATS”</span>
            </p>
          </div>

          {/* Education */}
          <p className="text-md leading-relaxed sm:text-base lg:text-lg">
            Graduated <span className="font-semibold">Cum Laude</span> from{" "}
            <span className="font-semibold">
              Rizal Technological University
            </span>{" "}
            with a B.S. in Information Technology (GWA:{" "}
            <span className="font-semibold">1.44</span>).
          </p>

          {/* Skills / Specialty */}
          <p className="text-md leading-relaxed sm:text-base lg:text-lg">
            Specialized in building modern JavaScript applications with a strong
            focus on performance, SEO, and seamless user experiences.
          </p>

          {/* Quote */}
          <p className="text-md leading-relaxed text-gray-700 italic sm:text-base lg:text-lg">
            “I enjoy solving problems, tackling complex challenges, and turning
            ideas into user-friendly applications.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalBackground;
