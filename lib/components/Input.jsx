import React from "react";

const Input = ({ data: { label, name, type, ...props }, handleChange }) => {
  return (
    <label htmlFor={name} className="block mb-3">
      {label}
      <input
        type={type}
        name={name}
        id={name}
        className="block w-full px-3 py-2 mt-1 bg-blue-100 rounded-sm outline-none"
        {...props}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
