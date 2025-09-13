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

import ProjectTooltip from "./ProjectTooltip";

import thumb1 from "../assets/project-one-thumbnail.jpg";
import thumb2 from "../assets/project-two-thumbnail.png";
import thumb3 from "../assets/project-three-thumbnail.jpg";

const FeaturedProjects: React.FC = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = 3;

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

  return (
    <section className="mt-10 flex flex-col gap-8">
      <h2 className="text-2xl font-semibold sm:text-3xl">Featured Projects</h2>

      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide 1 */}
        {index === 0 && (
          <article className="w-full min-w-0">
            <div className="flex h-full flex-col rounded-xl border border-gray-600 p-0 shadow">
              <div className="p-6">
                <a
                  href={thumb1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg bg-gray-50"
                >
                  <img
                    src={thumb1}
                    alt="Triple Z Event Reservation System"
                    className="rounded-md object-contain object-center"
                  />
                </a>
              </div>

              <div className="flex-1 p-6 pt-0">
                <h3 className="mb-1 text-lg font-semibold">
                  Triple Z Event Reservation System
                </h3>
                <p className="mb-4 text-sm text-gray-300">
                  Led a team of five — Triple Z Coffee Shop capstone. Booking
                  calendar, PayMongo payments, Google Cloud image hosting, admin
                  dashboard, Firebase notifications and WebSockets.
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiReact className="h-4 w-4" />
                    <span>React</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiNodedotjs className="h-4 w-4" />
                    <span>Node.js</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiExpress className="h-4 w-4" />
                    <span>Express.js</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiMongodb className="h-4 w-4" />
                    <span>MongoDB</span>
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  <a
                    href="https://github.com/Jeonjown/Triple-Z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100"
                  >
                    <FiGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>

                  <ProjectTooltip
                    text="⚠️ Please note: This app runs on a free-tier server, so the initial load may take a few seconds."
                    position="top"
                  >
                    <a
                      href="https://triple-z.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100"
                    >
                      <CiGlobe className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </ProjectTooltip>

                  <a
                    href="https://drive.google.com/file/d/1P9doIXfq44kP12LcA0WVH8W3ERP5De5S/view?usp=sharing&usp=embed_facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100"
                  >
                    <PiCertificateLight className="h-4 w-4" />
                    <span>Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Slide 2 */}
        {index === 1 && (
          <article className="w-full min-w-0">
            <div className="flex h-full flex-col rounded-xl border border-gray-600 p-0 shadow">
              <div className="p-6">
                <a
                  href={thumb2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg bg-gray-50"
                >
                  <img
                    src={thumb2}
                    alt="Epub File Reader Online Tool"
                    className="rounded-md object-contain object-center"
                  />
                </a>
              </div>

              <div className="flex-1 p-6 pt-0">
                <h3 className="mb-1 text-lg font-semibold">
                  Epub File Reader Online Tool
                </h3>
                <p className="mb-4 text-sm text-gray-300">
                  Custom Epub reader — chapter nav, adjustable text,
                  bookmarking, and Dictionary API lookups.
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiReact className="h-4 w-4" />
                    <span>React</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiTailwindcss className="h-4 w-4" />
                    <span>Tailwind CSS</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <FaBookOpen className="h-4 w-4" />
                    <span>Dictionary API</span>
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  <a
                    href="https://github.com/Jeonjown/Epub-Reader"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100"
                  >
                    <FiGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://jeonjown.github.io/Epub-Reader/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100"
                  >
                    <CiGlobe className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Slide 3 */}
        {index === 2 && (
          <article className="w-full min-w-0">
            <div className="flex h-full flex-col rounded-xl border border-gray-600 p-0 shadow">
              <div className="p-6">
                <a
                  href={thumb3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg bg-gray-50"
                >
                  <img
                    src={thumb3}
                    alt="TechHaven Ecommerce Platform"
                    className="rounded-md object-contain object-center"
                  />
                </a>
              </div>

              <div className="flex-1 p-6 pt-0">
                <h3 className="mb-1 text-lg font-semibold">
                  TechHaven Ecommerce Platform
                </h3>
                <p className="mb-4 text-sm text-gray-300">
                  Full-stack e-commerce: product browsing, cart, admin
                  dashboard, Stripe checkout, Cloudinary images, JWT auth, and
                  CI/CD.
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiReact className="h-4 w-4" />
                    <span>React</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiNodedotjs className="h-4 w-4" />
                    <span>Node.js</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiExpress className="h-4 w-4" />
                    <span>Express.js</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-100 backdrop-blur-sm">
                    <SiMysql className="h-4 w-4" />
                    <span>MySQL</span>
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  <a
                    href="https://github.com/Jeonjown/ecommerce-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100"
                  >
                    <FiGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>

                  <ProjectTooltip
                    text="⚠️ Please note: This app runs on a free-tier server, so the initial load may take a few seconds."
                    position="top"
                  >
                    <a
                      href="https://techhaven-project.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100"
                    >
                      <CiGlobe className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </ProjectTooltip>
                </div>
              </div>
            </div>
          </article>
        )}

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

        {/* dots (explicit) */}
        <div className="absolute right-0 bottom-2 left-0 flex justify-center gap-2">
          <button
            onClick={() => setIndex(0)}
            className={`h-2 w-2 rounded-full transition-colors ${index === 0 ? "bg-gray-300" : "bg-gray-400"}`}
            aria-label="Go to slide 1"
          />
          <button
            onClick={() => setIndex(1)}
            className={`h-2 w-2 rounded-full transition-colors ${index === 1 ? "bg-gray-300" : "bg-gray-400"}`}
            aria-label="Go to slide 2"
          />
          <button
            onClick={() => setIndex(2)}
            className={`h-2 w-2 rounded-full transition-colors ${index === 2 ? "bg-gray-300" : "bg-gray-400"}`}
            aria-label="Go to slide 3"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
