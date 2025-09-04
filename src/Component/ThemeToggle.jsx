import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-3">
      {/* Label */}
      <span className="text-sm font-medium">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors
          ${theme === "dark" ? "bg-gray-600" : "bg-gray-300"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform
            ${theme === "dark" ? "translate-x-6" : "translate-x-1"}`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
