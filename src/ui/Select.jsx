import React from "react";

function Select({ onChange, value, options }) {
  return (
    <select
      onChange={onChange}
      value={value}
      className="textfield__filter p-2 text-xs bg-secondary-0"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
