import { createContext } from "react";

export type ModeContextType = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModeContext = createContext<ModeContextType | undefined>(
  undefined,
);
