import React from "react";
import Carousel from "./Carousel";
import Tips from "./Tips";
import Info from "./Info";
import Review from "./Review";

export default function Main() {
  const images: string[] = [
    "src/assets/dammsugare.jpg.png",
    "src/assets/heroimage2.jpg",
    "src/assets/heroimage3.jpg",
  ];
  return (
    <>
      <Carousel images={images} />
      <Info />
      <Review />
      <Tips />
    </>
  );
}
