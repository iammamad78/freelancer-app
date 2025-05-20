import React, { useState } from "react";
import TextField from "../../ui/TextField";

import Loading from "../../ui/Loading";

function SendOTPForm({ phoneNumber, onChange, onSubmit, isSendingOTP }) {
  return (
    <div className="sm:max-w-screen-sm">
      <form
        onSubmit={onSubmit}
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
          {isSendingOTP ? (
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
