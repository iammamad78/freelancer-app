import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CheckOTPForm({ phoneNumber }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const handleCheckOtp = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message || "کد تایید با موفقیت تایید شد");
      if (user.isActive) {
        if (user.role === "OWNER") navigate("/owner");
        if (user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا در تایید کد تاییدیه");
    }
  };

  return (
    <div className="md:max-w-screen-md">
      <form
        className="p-8 space-y-8 md:border md:border-secondary-300 rounded-xl"
        onSubmit={handleCheckOtp}
      >
        <img src="/public/cdnlogo.com_freelancer.svg" alt="logo" />
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="text-secondary-400">-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse justify-center gap-x-1"
          inputStyle={{
            width: "2.2rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid bga(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
