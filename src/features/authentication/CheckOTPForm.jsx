import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const RESEND_OTP_TIME = 90; // seconds

function CheckOTPForm({ phoneNumber, onBack, onResendOTP, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_OTP_TIME);
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

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="md:max-w-screen-md">
      <form
        className="p-8 space-y-8 md:border md:border-secondary-300 rounded-xl"
        onSubmit={handleCheckOtp}
      >
        <img src="/public/cdnlogo.com_freelancer.svg" alt="logo" />
        <button onClick={onBack}>
          <HiArrowRight className="w-6 h-6 text-secondary-500" />
        </button>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        {otpResponse && <p className="text-sm">{otpResponse?.message}</p>}
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
        <div className="flex justify-center">
          {time > 0 ? (
            <p className="text-sm">{time} ثانیه مانده تا دریافت مجدد کد</p>
          ) : (
            <button onClick={onResendOTP}>ارسال مجدد کد</button>
          )}
        </div>
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
