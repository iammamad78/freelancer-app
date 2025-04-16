import React, { useState } from "react";
import TextField from "../../ui/textField";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import Loading from "../../ui/Loading";

function SendOTPForm({ setStep, phoneNumber, onChange }) {
  const { isPending, error, data, mutateAsync } = useMutation({
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

  return (
    <div className="sm:max-w-screen-sm h-">
      <form
        onSubmit={handleSendOtp}
        className="p-10 space-y-8 md:border md:border-secondary-300 rounded-xl"
      >
        <img src="/public/cdnlogo.com_freelancer.svg" alt="logo" />
        <h2 className="text-secondary-900 font-bold">ورود | ثبت نام</h2>
        <TextField
          label="لطفا شماره موبایل خود را وارد کنید"
          name={phoneNumber}
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
