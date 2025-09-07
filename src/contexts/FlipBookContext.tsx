import { createContext, useContext } from "react";

interface FlipBookContextProps {
  goToPage: (pageNum: number) => void;
}

export const FlipBookContext = createContext<FlipBookContextProps | null>(null);

export const useFlipBook = () => {
  const context = useContext(FlipBookContext);
  if (!context)
    throw new Error("useFlipBook must be used within a FlipBookProvider");
  return context;
};
