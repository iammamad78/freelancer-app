import React from "react";

function textField({ name, value, onChange, label }) {
  return (
    <div className="space-y-3">
      <label className="mb-2 block " htmlFor="name">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textfield__input"
        autoComplete="off"
      />
    </div>
  );
}

export default textField;
