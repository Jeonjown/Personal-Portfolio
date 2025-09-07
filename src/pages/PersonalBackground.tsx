import { CiLinkedin, CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import ryzamae from "../assets/ryzamae.png";
import profilePic from "../assets/sketch.png";

const PersonalBackground = () => {
  return (
    <section className="flex h-full flex-col items-center">
      <div className="w-full space-y-6">
        {/* Title */}
        <h3 className="text-center text-base font-semibold tracking-wide underline underline-offset-4 sm:text-lg lg:text-xl">
          Personal Background
        </h3>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="h-40 w-40 overflow-hidden rounded-full border shadow-md">
            <img
              src={profilePic}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}

        <div className="text-center">
          {/* Identity */}
          <div className="group relative h-8 sm:h-10">
            <p className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0 sm:text-3xl">
              ALAN B. MANABAT JR.
            </p>
            <p className="font-gloria absolute inset-0 flex items-center justify-center text-2xl font-extrabold italic opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:text-3xl">
              “BATS”
            </p>
          </div>

          {/* Meta: location + tagline */}
          <div className="mt-1 flex items-center justify-center gap-2 text-xs text-gray-600 sm:text-sm">
            <p className="font-medium text-gray-700 sm:text-base">
              Software Developer
            </p>
            <span>|</span>
            <div className="flex items-center gap-1">
              <MdLocationOn className="h-4 w-4 text-gray-500" />
              <span>Pasig, Philippines</span>
            </div>
          </div>

          {/* Actions: Resume + Socials */}
          <div className="mt-5 flex items-center justify-center space-x-3">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center space-x-1 rounded border px-3 py-1 text-xs font-medium transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow">
                <img src={ryzamae} alt="" className="h-3" />
                <span>Resume</span>
              </button>
            </a>
            <a
              href="https://github.com/Jeonjown"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <FiGithub className="h-5 w-5 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/alan-manabat-jr/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <CiLinkedin className="h-6 w-6 text-gray-700" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yourname@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <CiMail className="h-6 w-6 text-gray-700" />
            </a>
          </div>

          {/* Quote */}
          <p className="mt-5 text-sm leading-relaxed text-gray-700 italic sm:text-base lg:text-lg">
            “I enjoy solving problems, tackling complex challenges, and turning
            ideas into <span className="font-bold">code”</span>
          </p>

          {/* Education */}
          <div className="mt-8 space-y-3 text-left">
            <h4 className="text-base font-semibold underline underline-offset-2 sm:text-lg lg:text-xl">
              Education
            </h4>

            <div>
              <div className="flex items-center justify-between">
                <h5 className="text-sm font-bold sm:text-base lg:text-lg">
                  B.S. in Information Technology
                </h5>
                <p className="text-[11px] text-gray-600 sm:text-xs lg:text-sm">
                  2021 – 2025
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[11px] text-gray-600 italic sm:text-xs lg:text-sm">
                  Rizal Technological University - Boni
                </p>
                <p className="text-[11px] text-gray-600 italic sm:text-xs lg:text-sm">
                  Cum Laude — GWA: 1.44
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBackground;
