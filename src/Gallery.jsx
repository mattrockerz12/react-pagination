import React from "react";
import { Link, useLocation } from "react-router-dom";
import Thumbnail from "./Thumbnail";

const Gallery = ({ images }) => {
  let location = useLocation();

  return (
    <>
      {images.map((i) => (
        <Link key={i.id} to={`/img/${i.id}`} state={{ background: location }}>
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </>
  );
};

export default Gallery;
