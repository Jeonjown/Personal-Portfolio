import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiShadcnui,
  SiReactquery,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiJest,
  SiJsonwebtokens,
  SiSocketdotio,
  SiGooglecloud,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaSuperpowers } from "react-icons/fa"; // placeholder for Supertest
import { TbBrandGithubCopilot } from "react-icons/tb"; // placeholder for GitHub Actions

const categories = {
  Languages: [
    { name: "JavaScript", icon: <SiJavascript className="text-black" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-black" /> },
    { name: "Python", icon: <SiPython className="text-black" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-black" /> },
    { name: "CSS3", icon: <SiCss3 className="text-black" /> },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", icon: <SiReact className="text-black" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-black" /> },
    { name: "Express.js", icon: <SiExpress className="text-black" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-black" /> },
    { name: "ShadCN/UI", icon: <SiShadcnui className="text-black" /> },
    { name: "TanStack Query", icon: <SiReactquery className="text-black" /> },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql className="text-black" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-black" /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <SiGit className="text-black" /> },
    { name: "GitHub", icon: <SiGithub className="text-black" /> },
    {
      name: "GitHub Actions",
      icon: <TbBrandGithubCopilot className="text-black" />,
    },
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-black" /> },
    { name: "Postman", icon: <SiPostman className="text-black" /> },
    { name: "Jest", icon: <SiJest className="text-black" /> },
    { name: "Supertest", icon: <FaSuperpowers className="text-black" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-black" /> },
    { name: "WebSockets", icon: <SiSocketdotio className="text-black" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-black" /> },
  ],
};

const WebsiteSkills = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold sm:text-3xl">Skills</h2>
      <section className="mt-10 flex flex-col gap-8 rounded-xl border border-gray-700 p-5">
        {/* Skills / Specialty */}
        <p className="leading-relaxed">
          Specialized in building modern JavaScript applications with a strong
          focus on performance, SEO, and user experiences.
        </p>

        <div className="space-y-6">
          {Object.entries(categories).map(([category, skills]) => (
            <div key={category} className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-200 sm:text-base lg:text-lg">
                {category}
              </h4>
              <div className="flex -space-x-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="group relative hover:z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-gray-100 text-xl transition-all duration-300 group-hover:z-10 group-hover:scale-110 sm:h-12 sm:w-12">
                      {skill.icon}
                    </div>
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white group-hover:block">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebsiteSkills;
