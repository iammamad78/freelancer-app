import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { HiCollection } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="hidden sm:block bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <CustomNavLink to="/owner/dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavLink({ children, to }) {
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/80 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-primary-100/80 text-primary-900`
            : `${navlinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
