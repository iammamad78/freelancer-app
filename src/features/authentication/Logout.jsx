import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiOutlineLogout className="w-6 h-6 text-secondary-500 hover:text-error" />
    </button>
  );
}

export default Logout;
