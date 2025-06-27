import React from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";

function CreateProposal({ projectId, onClose }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "این فیلد الزامی است",
            minLength: {
              value: 10,
              message: "توضیحات پروژه باید حداقل 10 کاراکتر باشد",
            },
          }}
          errors={errors}
        />
        <TextField
          label="هزینه پیشنهادی"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "این فیلد الزامی است",
          }}
          errors={errors}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "این فیلد الزامی است",
          }}
          errors={errors}
        />
        <div className="!mt-8">
          {0 ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
