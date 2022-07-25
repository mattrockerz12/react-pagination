import React, { useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Home from "./Home";
import ImageView from "./ImageView";
import Modal from "./Modal";
import Users from "./Users";

const ModalSwitch = () => {
  let location = useLocation();

  let background = location.state && location.state.background;

  //let state = location.state;

  const [images] = useState([
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" },
  ]);

  return (
    <div className="container">
      <Routes location={background || location}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="gallery" element={<Gallery images={images} />} />
        <Route path="/img/:id" element={<ImageView images={images} />} />
      </Routes>

      {/* Show the modal when a background page is set */}
      {background && (
        <Routes>
          <Route path="/img/:id" element={<Modal images={images} />} />
        </Routes>
      )}
    </div>
  );
};

export default ModalSwitch;
