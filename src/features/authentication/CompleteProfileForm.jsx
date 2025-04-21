import React, { useState } from "react";
import TextField from "../../ui/TextField";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
            <div className="flex items-center gap-x-2 text-secondary-500">
              <input
                type="radio"
                name="role"
                id="OWNER"
                value="OWNER"
                className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
              />
              <label htmlFor="OWNER">کارفرما</label>
            </div>

            <div className="flex items-center gap-x-2 text-secondary-500">
              <input
                type="radio"
                name="role"
                id="FREELANCER"
                value="FREELANCER"
                className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
              />
              <label htmlFor="FREELANCER">فریلنسر</label>
            </div>
          </div>
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
