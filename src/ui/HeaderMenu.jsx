import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";
function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-4">
      <li className="flex">
        <Link to="dashboard">
          <HiOutlineUser className="w-6 h-6 text-primary-900" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
