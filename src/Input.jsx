import React from "react";

const Input = ({ label, onChange, todo }) => {
  console.log("Input rendered!");

  return (
    <>
      <label htmlFor="title">{label}</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={onChange}
        defaultValue={todo.title}
      />
    </>
  );
};

export default Input;
