import React, { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div className="sm:max-w-screen-sm">
      <form className="space-y-10">
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse justify-center gap-x-1 sm:gap-x-4"
          inputStyle={{
            width: "2.5rem",
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
