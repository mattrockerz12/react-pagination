import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Image from "./Image";

const Modal = ({ images }) => {
  let { id } = useParams();
  const getImageById = (id) => {
    return images.find((image) => image.id === id);
  };
  let image = getImageById(id);

  let navigate = useNavigate();

  let back = (e) => {
    e.stopPropagation();
    navigate("/gallery");
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)",
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444",
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
