import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ModalSwitch from "./ModalSwitch";

const App = () => {
  console.log("Parent rendered");

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
};

export default App;
