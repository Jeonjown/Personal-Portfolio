const Experience = () => {
  return (
    <section className="flex h-full flex-col items-center">
      <div className="w-full space-y-6">
        {/* Title */}
        <h3 className="text-center text-sm font-semibold tracking-wide underline underline-offset-4 sm:text-base lg:text-xl">
          Experience
        </h3>

        <div className="space-y-6 text-left">
          {/* SEO Web Developer Intern */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold sm:text-lg lg:text-xl">
                SEO Web Developer Intern
              </h4>
              <p className="text-[10px] text-gray-600 sm:text-xs">
                Aug 2024 – Dec 2024
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[10px] text-gray-600 italic sm:text-xs">
                Staff Domain
              </p>
              <p className="text-[10px] text-gray-600 italic sm:text-xs">
                Ortigas, Pasig
              </p>
            </div>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed sm:text-sm lg:text-base">
              <li>
                Built custom frontend UI components using JavaScript to extend
                or replace existing WordPress widgets, enhancing site
                functionality and user experience.
              </li>
              <li>
                Conducted comprehensive site health audits with SEMrush,
                consistently maintaining a 90%+ SEO score.
              </li>
              <li>
                Performed in-depth keyword research to drive organic traffic and
                improve search engine rankings.
              </li>
            </ul>
          </div>

          {/* IT Support Specialist Intern */}
          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold sm:text-lg lg:text-xl">
                IT Support Specialist Intern
              </h4>
              <p className="text-[10px] text-gray-600 sm:text-xs">
                Jan 2024 – Mar 2024
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[10px] text-gray-600 italic sm:text-xs">
                Rizal Technological University – MIS Office
              </p>
              <p className="text-[10px] text-gray-600 italic sm:text-xs">
                Boni, Mandaluyong
              </p>
            </div>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed sm:text-sm lg:text-base">
              <li>
                Assessed and troubleshot computer problems reported by students,
                faculty, and staff.
              </li>
              <li>
                Managed network tasks, including configuring and maintaining
                routers and switches to ensure reliable connectivity during
                events.
              </li>
              <li>
                Assisted in deploying new computers in the engineering building,
                installing software, and optimizing system performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
