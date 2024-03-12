import React from "react";

const ButtonComponent = ({ type, name, style }) => {
  return (
    <button
      className={` px-6 py-2 bg-black text-white rounded active:scale-105 active:ring-2  duration-200 ${style}`}
      type={type}
    >
      {name}
    </button>
  );
};

export default ButtonComponent;
