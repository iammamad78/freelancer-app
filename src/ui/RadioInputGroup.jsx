import React from "react";
import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            name={name}
            id={value}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error text-sm block mt-2 flex-1">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
