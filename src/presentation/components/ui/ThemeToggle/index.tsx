"use client";

import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./style.css";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", !isDark);
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle-btn hard-border"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun size={18} color="#FBBF24" />
      ) : (
        <Moon size={18} color="#8B5CF6" />
      )}
    </button>
  );
};

export default ThemeToggle;
