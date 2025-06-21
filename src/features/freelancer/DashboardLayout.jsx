import React from "react";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
