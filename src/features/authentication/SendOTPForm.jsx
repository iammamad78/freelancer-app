import React, { useState } from "react";
import TextField from "../../ui/textField";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";

function SendOTPForm({ setStep }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message || "کد تایید با موفقیت ارسال شد");
      setPhoneNumber("");
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا در ارسال کد تایید");
    }
  };

  return (
    <div className="sm:max-w-screen-sm">
      <form onSubmit={handleSendOtp} className="space-y-8">
        <TextField
          label="شماره موبایل"
          name={phoneNumber}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
