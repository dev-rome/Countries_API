import { useState, useEffect } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

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
