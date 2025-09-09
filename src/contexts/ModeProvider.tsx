import { useState } from "react";
import { ModeContext } from "./ModeContext";

const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState(false);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
