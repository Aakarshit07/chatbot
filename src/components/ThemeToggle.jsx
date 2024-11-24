import  { useState } from "react";
import { Switch } from "@mui/material";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div>
      <Switch checked={darkMode} onChange={toggleTheme} />
    </div>
  );
};

export default ThemeToggle;
