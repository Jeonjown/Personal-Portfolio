import { CiLinkedin, CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import ryzamae from "../assets/ryzamae.png";
import profilePic from "../assets/sketch.png";

const WebsiteHeader = () => {
  return (
    <section className="mt-5 flex max-w-2xl flex-col items-center font-sans text-white">
      <div className="flex w-full flex-col-reverse items-center gap-6 md:flex-row md:items-start">
        {/* Text content */}
        <div className="group relative md:text-left">
          {/* Identity */}
          <div className="group relative h-8 sm:h-10 md:text-left">
            <p className="flex items-center justify-center font-mono text-2xl font-extrabold transition-opacity duration-500 group-hover:opacity-0 md:justify-start md:text-3xl">
              ALAN B. MANABAT JR.
            </p>
            <p className="font-gloria absolute inset-0 flex items-center justify-center text-2xl font-extrabold italic opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:text-3xl md:justify-start">
              “BATS”
            </p>
          </div>

          {/* Meta */}
          <div className="mt-1 flex items-center justify-center gap-2 text-xs text-gray-300 sm:text-sm md:justify-start">
            <p className="font-medium text-white sm:text-base">
              Software Developer
            </p>
            <span>|</span>
            <div className="flex items-center gap-1">
              <MdLocationOn className="h-4 w-4 text-gray-300" />
              <span>Pasig, Philippines</span>
            </div>
          </div>

          {/* Quote */}
          <p className="mt-5 text-center leading-relaxed text-gray-200 italic md:text-left lg:text-lg">
            “I enjoy solving problems, tackling complex challenges, and turning
            ideas into <span className="font-bold">code”</span>
          </p>

          {/* Actions */}
          <div className="mt-5 flex items-center justify-center space-x-3 md:justify-start">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center space-x-1 rounded border border-white px-3 py-1 text-xs font-medium text-white transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-white hover:text-blue-950">
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
              <FiGithub className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/alan-manabat-jr/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <CiLinkedin className="h-6 w-6 text-white" />
            </a>
            <a
              href="mailto:alanmanabat@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <CiMail className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="h-40 w-40 overflow-hidden rounded-full border shadow-md md:h-48 md:w-48">
            <img
              src={profilePic}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteHeader;
