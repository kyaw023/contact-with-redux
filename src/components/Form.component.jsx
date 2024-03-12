import React from "react";

const FormComponent = ({ type, name, labelName, placeholder ,...para}) => {
  return (
    <div>
      <label className=" block text-sm mb-2" htmlFor={name}>
        {labelName}
      </label>
      <input
        {...para}
        className=" focus:ring-2 focus:ring-blue-400 w-full outline-none px-3 py-2 rounded border border-slate-700"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormComponent;
