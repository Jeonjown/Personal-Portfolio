import type { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: "top" | "bottom";
  className?: string;
}

const ProjectTooltip = ({
  children,
  text,
  position = "top",
  className = "",
}: TooltipProps) => {
  return (
    <div className={`group relative inline-flex cursor-pointer ${className}`}>
      {children}
      <span
        className={`absolute z-10 w-56 rounded-lg bg-yellow-100 px-3 py-2 text-xs font-medium text-yellow-800 shadow-lg transition-all duration-300 ${
          position === "top" ? "bottom-full mb-2" : "top-full mt-2"
        } left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100`}
      >
        {text}
      </span>
    </div>
  );
};

export default ProjectTooltip;
