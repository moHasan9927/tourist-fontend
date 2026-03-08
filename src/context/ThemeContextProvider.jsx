import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
