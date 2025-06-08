import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return isDarkMode ? (
    <button onClick={toggleDarkMode}>
      <HiOutlineSun className="w-6 h-6 text-primary-900" />
    </button>
  ) : (
    <button onClick={toggleDarkMode}>
      <HiOutlineMoon className="w-6 h-6 text-primary-900" />
    </button>
  );
}

export default DarkModeToggle;
