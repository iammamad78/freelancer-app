import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message || "وضعیت درخواست با موفقیت تغییر کرد");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "خطا در تغییر وضعیت درخواست"
      );
    },
  });
  return { isUpdating, changeProposalStatus };
}
