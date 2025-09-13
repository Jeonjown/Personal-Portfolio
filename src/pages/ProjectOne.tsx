import { motion } from "motion/react";
import thumbnail from "../assets/project-one-thumbnail.jpg";
import thumbtacks from "../assets/thumbtacks.png";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import ProjectTooltip from "../components/ProjectTooltip";

const ProjectOne = () => {
  const techStack = [
    { name: "React", icon: <SiReact className="h-4 w-4" /> },
    { name: "Node.js", icon: <SiNodedotjs className="h-4 w-4" /> },
    { name: "Express.js", icon: <SiExpress className="h-4 w-4" /> },
    { name: "MongoDB", icon: <SiMongodb className="h-4 w-4" /> },
  ];

  return (
    <section className="flex h-full flex-col items-center">
      <div className="w-full space-y-6">
        {/* Title */}
        <h3 className="text-center text-base font-semibold tracking-wide underline underline-offset-4 sm:text-lg">
          Triple Z Event Reservation System
        </h3>

        {/* Polaroid Photo Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="inset-shadow relative mx-auto w-fit bg-gray-50 p-3 shadow-md"
        >
          {/* Thumbtack */}
          <motion.img
            src={thumbtacks}
            alt="Thumbtack"
            className="absolute right-1/3 h-6 w-6 object-contain"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          />

          {/* Photo */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="overflow-hidden shadow-[inset_0px_5px_15px_-3px_rgba(0,_0,_0,_0.2)]"
          >
            <img
              src={thumbnail}
              alt="Project Preview"
              className="object-contain"
            />
          </motion.div>

          {/* Bottom Caption Area */}
          <div className="mt-2 flex justify-center space-x-4 text-sm font-semibold">
            <motion.a
              href="https://github.com/Jeonjown/Triple-Z"
              target="_blank"
              rel="noopener noreferrer"
              className="-rotate-1 underline underline-offset-2 hover:text-blue-800"
              whileHover={{ scale: 1.1, rotate: -2 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://triple-z.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-blue-800"
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              <ProjectTooltip
                text="⚠️ Please note: The app runs on a free-tier server, so initial load may take a few seconds."
                className="underline"
                position="top"
              >
                Live Demo
              </ProjectTooltip>
            </motion.a>
          </div>
        </motion.div>

        <div className="mt-8 mb-5 flex flex-wrap justify-center gap-1 md:justify-start">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition hover:scale-105 hover:bg-indigo-50 md:text-sm"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="relative w-full overflow-visible">
          {/* Description as paragraph */}
          <div className="relative rounded-lg text-xs sm:text-base md:mt-2 md:px-2 lg:mt-10">
            <p className="mt-5 leading-relaxed">
              Led a team of five, authored the Triple Z Coffee Shop capstone
              project, and published it under IPOPHL copyright{" "}
              <a
                className="font-semibold underline hover:text-blue-600"
                href="https://drive.google.com/file/d/1P9doIXfq44kP12LcA0WVH8W3ERP5De5S/view?usp=sharing&usp=embed_facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Certificate)
              </a>
              . The system included a booking calendar, package selection,
              secure PayMongo payments, menu image hosting through Google Cloud
              Storage, an admin dashboard with metrics, real-time notifications
              powered by Firebase, and customer support via WebSockets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;
