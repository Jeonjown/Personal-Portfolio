import React, { useRef, useState } from "react";
import { FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import { FaBookOpen } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { PiCertificateLight } from "react-icons/pi";

// thumbnails - update paths if your assets live elsewhere
import thumb1 from "../assets/project-one-thumbnail.jpg";
import thumb2 from "../assets/project-two-thumbnail.png";
import thumb3 from "../assets/project-three-thumbnail.jpg";

// ✅ Type-safe Icon type for react-icons
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Tech = { name: string; Icon: IconType };
type LinkItem = { label: string; href: string; Icon?: IconType };

const projects: {
  title: string;
  description: string;
  image: string;
  tech: Tech[];
  links: LinkItem[];
}[] = [
  {
    title: "Triple Z Event Reservation System",
    description:
      "Led a team of five — Triple Z Coffee Shop capstone. Features booking calendar, package selection, PayMongo payments, Google Cloud image hosting, admin dashboard (metrics), real-time notifications (Firebase) and WebSocket support.",
    image: thumb1,
    tech: [
      { name: "React", Icon: SiReact },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "MongoDB", Icon: SiMongodb },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jeonjown/Triple-Z",
        Icon: FiGithub,
      },
      {
        label: "Live Demo",
        href: "https://triple-z.vercel.app/",
        Icon: CiGlobe,
      },
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1P9doIXfq44kP12LcA0WVH8W3ERP5De5S/view?usp=sharing&usp=embed_facebook",
        Icon: PiCertificateLight,
      },
    ],
  },
  {
    title: "Epub File Reader Online Tool",
    description:
      "Custom Epub reader for personal use — chapter nav, adjustable text, bookmarking, and Dictionary API integration for instant word lookups.",
    image: thumb2,
    tech: [
      { name: "React", Icon: SiReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Dictionary API", Icon: FaBookOpen },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://jeonjown.github.io/Epub-Reader/",
        Icon: FiGithub,
      },
      {
        label: "Live Demo",
        href: "https://jeonjown.github.io/Epub-Reader/",
        Icon: CiGlobe,
      },
    ],
  },
  {
    title: "TechHaven Ecommerce Platform",
    description:
      "Full-stack e-commerce: product browsing, cart, admin dashboard, Stripe checkout. Cloudinary images, JWT auth, role admin, Jest/Supertest tests and GitHub Actions CI/CD.",
    image: thumb3,
    tech: [
      { name: "React", Icon: SiReact },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "MySQL", Icon: SiMysql },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jeonjown/ecommerce-app",
        Icon: FiGithub,
      },
      {
        label: "Live Demo",
        href: "https://techhaven-project.vercel.app/",
        Icon: CiGlobe,
      },
    ],
  },
];

const FeaturedProjects: React.FC = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = projects.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  const project = projects[index];

  return (
    <section className="mt-10 flex flex-col gap-8">
      <h2 className="text-2xl font-semibold sm:text-3xl">Featured Projects</h2>

      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex w-full transition-transform duration-400 ease-in-out">
          <article className="w-full min-w-0">
            <div className="flex h-full flex-col rounded-xl border border-gray-600 p-0 shadow">
              <div className="p-6">
                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg bg-gray-50"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md object-contain object-center"
                  />
                </a>
              </div>

              <div className="flex-1 p-6 pt-0">
                <h3 className="mb-1 text-lg font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-300">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => {
                    const Icon = t.Icon;
                    return (
                      <span
                        key={`${project.title}-${t.name}`}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{t.name}</span>
                      </span>
                    );
                  })}
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.links.map((ln) => {
                    const LIcon = ln.Icon;
                    return (
                      <a
                        key={`${project.title}-${ln.label}`}
                        href={ln.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100"
                      >
                        {LIcon ? <LIcon className="h-4 w-4" /> : null}
                        <span>{ln.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white md:left-4"
        >
          <FiChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white md:right-4"
        >
          <FiChevronRight className="h-5 w-5 text-gray-700" />
        </button>

        {/* dots */}
        <div className="absolute right-0 bottom-2 left-0 flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === i ? "bg-gray-300" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
