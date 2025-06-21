import { useQuery } from "@tanstack/react-query";
import { getProposalApi } from "../../services/proposalService";

export default function useProposals() {
  
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalApi,
  });

  const { proposals } = data || {};

  return { proposals, isLoading };
}
