import React, { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "ℹ️" });
        return;
      }

      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا در ثبت نام");
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-screen-sm ">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 md:border md:border-secondary-300 rounded-xl p-10"
        >
          <h2 className="text-secondary-500 flex justify-center">
            اطلاعات خود را کامل کنید
          </h2>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="ایمیل"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center items-center gap-x-8">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              id="OWNER"
              name={role}
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              id="FREELANCER"
              name={role}
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
