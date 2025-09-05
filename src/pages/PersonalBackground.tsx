import profilePic from "../assets/sketch.png";

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
          <div className="h-50 w-50 overflow-hidden">
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
            <p className="text-md text-gray-600">
              <span className="italic">“BATS”</span>
            </p>
          </div>

          {/* Education */}
          <p className="text-lg leading-relaxed">
            Graduated <span className="font-semibold">Cum Laude</span> from{" "}
            <span className="font-semibold">
              Rizal Technological University
            </span>{" "}
            with a B.S. in Information Technology (GWA:{" "}
            <span className="font-semibold">1.44</span>).
          </p>

          {/* Quote */}
          <p className="text-lg leading-relaxed text-gray-700 italic">
            “I enjoy solving problems, tackling complex challenges, and turning
            ideas into user-friendly applications.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalBackground;
