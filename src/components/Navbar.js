import { BsMoon, BsMoonFill } from "react-icons/bs";
import useThemeContext from "../useThemeContext";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  const { theme, handleThemeSwitch } = useThemeContext();

  return (
    <nav className="flex justify-between items-center py-8 px-4 bg-white dark:bg-[#2B3844] md:py-7 md:px-20 drop-shadow-[0_4px_2px_rgba(0,0,0,0.562)]">
      <p className="text-sm font-extrabold text-[#111517] dark:text-white md:text-lg">
        Where in the world?
      </p>
      {theme === "light" ? (
        <ToggleTheme icon={<BsMoon />} onClick={handleThemeSwitch} />
      ) : (
        <ToggleTheme icon={<BsMoonFill />} onClick={handleThemeSwitch} />
      )}
    </nav>
  );
}

export default Navbar;
