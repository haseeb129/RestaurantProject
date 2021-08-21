import ImageGallery from "react-image-gallery";
import React from "react";
import { getImages } from "./helper";

const ImageSlider = () => {
  return <ImageGallery items={getImages()} />;
};

export default ImageSlider;
