// FlipBookContext.tsx
import { createContext, useContext } from "react";

export interface FlipBookAPI {
  flip: (pageNumber: number) => void;
  getPageCount: () => number;
  getCurrentPageIndex: () => number;
}

interface FlipBookContextProps {
  goToPage: (pageNum: number) => void;
  pageFlip?: () => FlipBookAPI; // expose pageFlip API
}

export const FlipBookContext = createContext<FlipBookContextProps | null>(null);

export const useFlipBook = () => {
  const context = useContext(FlipBookContext);
  if (!context)
    throw new Error("useFlipBook must be used within FlipBookContext");
  return context;
};
