interface TOCProps {
  goToPage: (pageNum: number) => void;
  isMobile: boolean;
}

const TableOfContents = ({ goToPage, isMobile }: TOCProps) => {
  const contents = [
    { title: "Preface", page: 2, indexMobile: 3, indexDesktop: 3 },
    { title: "Chapter I: About Me", page: 3, indexMobile: 4, indexDesktop: 5 },
    { title: "Personal Background", page: 4, indexMobile: 5, indexDesktop: 5 },
    { title: "Skills & Tech Stack", page: 5, indexMobile: 6, indexDesktop: 7 },
    {
      title: "Chapter II: Projects & Case Studies",
      page: 6,
      indexMobile: 7,
      indexDesktop: 7,
    },
    {
      title: "Triple Z -  Reservation System",
      page: 7,
      indexMobile: 8,
      indexDesktop: 9,
    },
    {
      title: "Epub File - Reader Online Tool",
      page: 8,
      indexMobile: 9,
      indexDesktop: 9,
    },
    {
      title: "TechHaven - Online Retail Platform",
      page: 9,
      indexMobile: 10,
      indexDesktop: 11,
    },
    {
      title: "Chapter III: Career Highlights",
      page: 10,
      indexMobile: 11,
      indexDesktop: 11,
    },
    { title: "Experience", page: 11, indexMobile: 12, indexDesktop: 13 },
    { title: "Closing Note", page: 12, indexMobile: 13, indexDesktop: 13 },
  ];

  return (
    <div className="prose max-w-none">
      <h2 className="mb-4 text-xl font-bold">Table of Contents</h2>
      <ul className="space-y-2">
        {contents.map((item, idx) => {
          const isChapter =
            item.title.startsWith("Chapter") ||
            item.title === "Preface" ||
            item.title === "Contact Information" ||
            item.title === "Closing Note";

          const flipIndex = isMobile ? item.indexMobile : item.indexDesktop;

          return (
            <li
              key={idx}
              className={`relative z-50 flex items-center hover:font-semibold ${
                isChapter ? "" : "pl-6"
              }`}
            >
              <span
                className={`sm:text-md relative cursor-pointer bg-yellow-200 px-2 text-sm whitespace-nowrap`}
                onClick={() => goToPage(flipIndex)}
              >
                {item.title}
              </span>
              <span className="mx-2 flex-1 border-b border-dotted border-gray-400"></span>
              <span className="relative text-gray-600">{item.page}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
