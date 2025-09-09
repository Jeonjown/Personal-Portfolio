import { PiBookOpenTextFill } from "react-icons/pi";
import Switch from "./Switch";

interface HeaderProps {
  journalMode?: boolean;
}

const Header: React.FC<HeaderProps> = ({ journalMode }) => {
  return (
    <header
      className={`sticky top-0 z-20 mx-auto flex h-16 w-full items-center justify-between px-6 text-white transition-all duration-500 ${journalMode ? "max-w-full" : "max-w-[42rem]"} `}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-30" />
      <div className="relative flex w-full items-center justify-between">
        <h1 className="font-gloria text-xl font-bold">
          {journalMode ? <PiBookOpenTextFill size={30} /> : "</>"}
        </h1>
        <Switch />
      </div>
    </header>
  );
};

export default Header;
