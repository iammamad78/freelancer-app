import React from "react";
import { HiOutlineSun } from "react-icons/hi";

function DarkModeToggle() {
  return (
    <button>
      <HiOutlineSun className="w-6 h-6 text-primary-900" />
    </button>
  );
}

export default DarkModeToggle;
