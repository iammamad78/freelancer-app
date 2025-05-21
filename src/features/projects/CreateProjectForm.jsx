import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است",
          minLength: {
            value: 10,
            message: "نام پروژه باید حداقل 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
