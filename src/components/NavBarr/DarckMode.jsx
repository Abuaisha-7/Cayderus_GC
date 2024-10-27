import React, { useEffect, useState } from "react";
import LigthButton from "../../assets/website/light-mode-button.png";
import DarckButton from "../../assets/website/dark-mode-button.png";

const DarckMode = () => {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element
  console.log(element)

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={LigthButton}
        alt=""
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
        className={`w-10 cursor-pointer drop-shadow-[1px_1px_1px-rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />

      <img
        src={DarckButton}
        alt=""
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
        className="w-10 cursor-pointer drop-shadow-[1px_1px_1px-rgba(0,0,0,0.1)] transition-all duration-300 "
      />
    </div>
  );
};

export default DarckMode;
