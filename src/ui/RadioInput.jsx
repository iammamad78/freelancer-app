import React from "react";

function RadioInput({ label, name, id, value, checked, onChange }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-500">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
