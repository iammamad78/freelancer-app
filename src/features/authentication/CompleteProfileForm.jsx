import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "ℹ️" });
        return;
      }

      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا در ثبت نام");
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-screen-sm ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 md:border md:border-secondary-300 rounded-xl p-10"
        >
          <h2 className="text-secondary-500 flex justify-center">
            اطلاعات خود را کامل کنید
          </h2>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی الزامی است",
            }}
            errors={errors}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل الزامی است",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: {
                required: "لطفا نوع کاربر را انتخاب کنید",
              },
              options: [
                { label: "فریلنسر", value: "FREELANCER" },
                { label: "کارفرما", value: "OWNER" },
              ],
            }}
          />
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
