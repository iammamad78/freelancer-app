import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/authService";

export default function useChangeUserStatus() {
  const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message || "وضعیت درخواست با موفقیت تغییر کرد");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "خطا در تغییر وضعیت درخواست"
      );
    },
  });
  return { isUpdating, changeUserStatus };
}
