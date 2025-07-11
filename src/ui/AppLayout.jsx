import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="sm:grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr] h-screen">
      <Header />
      {children}

      <div className="bg-secondary-100 p-8 overflow-y-auto min-h-screen">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
