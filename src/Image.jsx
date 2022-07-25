import React from "react";

const Image = ({ color }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: color,
      }}
    />
  );
};

export default Image;
