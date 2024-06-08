// app/components/SimpleInput.jsx
import React from "react";

const SimpleInput = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-[286px] h-[52px] border-l border-r border-gray-700 focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default SimpleInput;
