import React, { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  console.log(role);

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-screen-sm ">
        <form className="space-y-8 md:border md:border-secondary-300 rounded-xl p-10">
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
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
