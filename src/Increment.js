import React from "react";

const Increment = ({ count, increment }) => {
  console.log("Increment rendered!");
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Increment;
