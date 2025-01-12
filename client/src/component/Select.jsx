import React from "react";
import { nanoid } from "nanoid";
function Select({ options = [], classname = "", label, ...props }, ref) {
  const id = nanoid();

  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        name=""
        id={id}
        {...props}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 border border-gray-200 w0fill ${classname}`}
      >
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
