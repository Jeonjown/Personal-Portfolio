import Switch from "./Switch";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between bg-gray-900 px-6 text-white">
      <h1 className="text-lg font-bold">My Website</h1>

      <Switch />
    </header>
  );
};

export default Header;
