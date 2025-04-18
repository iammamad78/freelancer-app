import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
  const [phoneNumber, setPhoneNumber] = useState("09181111111");
  const [step, setStep] = useState(2);

  const { isPending: isSendingOTP, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message || "کد تایید با موفقیت ارسال شد");
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا در ارسال کد تایید");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOTP={isSendingOTP}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onSubmit={handleSendOtp}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            onBack={() => setStep((prevStep) => prevStep - 1)}
            onResendOTP={handleSendOtp}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
