import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

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
      <TextField
        label="توضیحات پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است",
          minLength: {
            value: 15,
            message: "نام پروژه باید حداقل 15 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه پروژه"
        name="price"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        options={[]}
        required
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
