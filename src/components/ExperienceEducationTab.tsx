import { useState } from "react";
import staffdomain_logo from "../assets/staffdomain_logo.png";
import rtu_logo from "../assets/RTU_Logo.jpg";
const ExperienceEducationTab = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );

  return (
    <div className="mx-auto mt-10">
      {/* Tab List */}
      <div className="mb-2 grid h-9 w-full grid-cols-2 items-center justify-center rounded-lg bg-gray-700 p-1 text-gray-500">
        <button
          onClick={() => setActiveTab("experience")}
          className={`inline-flex h-full cursor-pointer items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all ${
            activeTab === "experience"
              ? "bg-gray-900 text-white shadow"
              : "hover:text-gray-800"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all ${
            activeTab === "education"
              ? "bg-gray-900 text-white shadow"
              : "hover:text-gray-800"
          }`}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-2">
        {activeTab === "experience" && (
          <div className="rounded-xl border border-gray-700 p-4 shadow">
            <div className="p-0">
              <ul className="ml-10 border-l">
                {/* Staff Domain */}
                <li className="relative ml-10 py-4">
                  {/* Logo (or placeholder circle) */}
                  <span className="absolute top-4 -left-16 flex size-12 items-center justify-center rounded-full border bg-white">
                    <img
                      src={staffdomain_logo}
                      alt="Staff Domain"
                      className="h-full w-full rounded-full object-contain"
                    />
                  </span>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <time className="text-xs text-gray-400">
                      Aug 2024 – Dec 2024
                    </time>
                    <h2 className="leading-none font-semibold">Staff Domain</h2>
                    <p className="text-sm text-gray-400 italic">
                      SEO Web Developer Intern - Ortigas, Pasig
                    </p>

                    <ul className="ml-4 list-outside list-disc space-y-1 text-sm text-gray-200">
                      <li>
                        Built custom frontend UI components using JavaScript to
                        extend or replace existing WordPress widgets, enhancing
                        site functionality and user experience.
                      </li>
                      <li>
                        Conducted comprehensive site health audits with SEMrush,
                        consistently maintaining a 90%+ SEO score.
                      </li>
                      <li>
                        Performed in-depth keyword research to drive organic
                        traffic and improve search engine rankings.
                      </li>
                    </ul>
                  </div>
                </li>

                {/* IT Support Specialist Intern */}
                <li className="relative ml-10 py-4">
                  <span className="absolute top-4 -left-16 flex size-12 items-center justify-center rounded-full border bg-white">
                    <img
                      src={rtu_logo}
                      alt="RTU"
                      className="h-full w-full rounded-full object-contain"
                    />
                  </span>

                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <time className="text-xs text-gray-400">
                      Jan 2024 – Mar 2024
                    </time>
                    <h2 className="leading-none font-semibold">
                      Rizal Technological University – MIS Office
                    </h2>
                    <p className="text-sm text-gray-400 italic">
                      IT Support Specialist Intern - Boni, Mandaluyong
                    </p>
                    <ul className="ml-4 list-outside list-disc space-y-1 text-sm text-gray-200">
                      <li>
                        Assessed and troubleshot computer problems reported by
                        students, faculty, and staff.
                      </li>
                      <li>
                        Managed network tasks, including configuring and
                        maintaining routers and switches to ensure reliable
                        connectivity during events.
                      </li>
                      <li>
                        Assisted in deploying new computers in the engineering
                        building, installing software, and optimizing system
                        performance.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="rounded-xl border border-gray-700 p-4 shadow">
            <div className="p-0">
              <ul className="ml-10 border-l">
                {/* College */}
                <li className="relative ml-10 py-4">
                  {/* Logo / circle */}
                  <span className="absolute top-4 -left-16 flex size-12 items-center justify-center rounded-full border bg-white">
                    <img
                      src={rtu_logo}
                      alt="Rizal Technological University"
                      className="h-full w-full rounded-full object-contain"
                    />
                  </span>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <time className="text-xs text-gray-400">2021 – 2025</time>
                    <h2 className="leading-none font-semibold">
                      B.S. in Information Technology
                    </h2>
                    <p className="text-sm text-gray-400 italic">
                      Rizal Technological University – Boni
                    </p>

                    {/* Bulleted Achievements */}
                    <ul className="ml-4 list-outside list-disc space-y-1 text-sm text-gray-200">
                      <li>
                        Cum Laude — GWA:{" "}
                        <span className="font-medium">1.44</span>
                      </li>
                      <li>Dean&apos;s Lister Recipient</li>
                      <li>Member of Association of Computer Students</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceEducationTab;
