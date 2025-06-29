import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";

export default function useProjects() {
  const { isLoading, data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
