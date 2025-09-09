import useMode from "../hooks/useMode";

const Switch = () => {
  const { mode, setMode } = useMode();

  return (
    <div className="font-gloria flex items-center space-x-3">
      {/* Mode Text */}
      {mode ? (
        <p className="font-sans text-sm">website mode </p>
      ) : (
        <p className="font-gloria text-sm">journal mode</p>
      )}

      {/* Toggle Switch */}
      <div
        onClick={() => setMode(!mode)}
        className={`relative flex h-6 w-12 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 ${
          mode ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
            mode ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
