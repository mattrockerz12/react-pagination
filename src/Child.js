import React from "react";

const Child = ({ increment }) => {
  console.log("Child rendered!");

  return (
    <>
      <h1>Child Component</h1>
      <button onClick={increment}>Increment Child</button>
    </>
  );
};

export default React.memo(Child);
