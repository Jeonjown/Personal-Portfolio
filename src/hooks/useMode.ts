import { useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";

const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) throw new Error("useMode must be used within ModeProvider");
  return context;
};

export default useMode;
