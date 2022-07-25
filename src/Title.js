import React from "react";

const Title = () => {
  console.log("Title rendered!");

  return <h1>Hi BossROD!</h1>;
};

export default React.memo(Title);
