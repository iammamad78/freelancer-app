import React, { useState } from "react";
import TextField from "../../ui/textField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="sm:max-w-screen-sm">
      <form className="space-y-8">
        <TextField
          label="شماره موبایل"
          name={phoneNumber}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
