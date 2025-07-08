import React from "react";
import DashboardHeader from "../../ui/DashboardHeader";
import useProposals from "../proposals/useProposals";
import useProjects from "../../hooks/useProjects";
import useUsers from "./useUsers";
import Loading from "../../ui/Loading";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading: isLoadingProposals, proposals } = useProposals();
  const { isLoading: isLoadingProjects, projects } = useProjects();
  const { isLoading: isLoadingUsers, users } = useUsers();

  if (isLoadingProjects || isLoadingProposals || isLoadingUsers)
    return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
