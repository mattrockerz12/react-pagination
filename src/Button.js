import React from "react";

const Button = ({ increment }) => {
  console.log("Button rendered!");

  return <button onClick={increment}>Increment</button>;
};

export default Button;
