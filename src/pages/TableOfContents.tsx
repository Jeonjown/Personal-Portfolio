const TableOfContents = () => {
  const contents = [
    { title: "Preface", page: 1 },

    { title: "Chapter I: About Me", page: 2 },
    { title: "Personal Background", page: 3 },
    { title: "Skills & Tech Stack", page: 4 },

    { title: "Chapter II: Projects & Case Studies", page: 6 },
    { title: "Project 1 – E-Commerce Platform", page: 7 },
    { title: "Project 2 – Task Manager App", page: 9 },
    { title: "Project 3 – [Your Project Here]", page: 11 },

    { title: "Chapter III: Career Highlights", page: 13 },
    { title: "Experience", page: 14 },
    { title: "Achievements & Certifications", page: 16 },

    { title: "Chapter V: Future & Closing", page: 21 },
    { title: "Future Goals", page: 22 },
    { title: "Closing Notes", page: 23 },

    { title: "Contact Information", page: 25 },
  ];

  return (
    <div className="prose max-w-none">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {contents.map((item, index) => {
          const isChapter =
            item.title.startsWith("Chapter") ||
            item.title === "Preface" ||
            item.title === "Contact Information";

          return (
            <li
              key={index}
              className={`flex items-center ${isChapter ? "" : "pl-6"}`}
            >
              {/* Title */}
              <span className="whitespace-nowrap">{item.title}</span>

              {/* Dotted line that stretches */}
              <span className="flex-1 border-b border-dotted border-gray-400 mx-2"></span>

              {/* Page number */}
              <span className="text-gray-600">{item.page}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
