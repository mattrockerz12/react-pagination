import React from "react";
import { useParams } from "react-router-dom";
import Image from "./Image";

const ImageView = ({ images }) => {
  let { id } = useParams();

  let image = images[parseInt(id, 10)];

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
};

export default ImageView;
