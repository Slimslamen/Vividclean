import React from "react";
import Carousel from "./Carousel";
import Tips from "./Tips";
import Info from "./Info";
import Review from "./Review";

export default function Main() {
  const images = [
    ["src/assets/bildkarusell6.jpg.png", "Hemstäd"],
    ["src/assets/bildkarusell8.jpg.png", "Storstäd"],
    ["src/assets/bildkarusell9.jpg.png", "Fönsterputs"],
    ["src/assets/bildkarusell3.jpg.png", "Flyttstäd"],
    ["src/assets/bildkarusell4.jpg.png", "Veckostäd"],
    ["src/assets/bildkarusell5.jpg.png", "Företagsstäd"],
  ].map(([url, title]) => ({ url, title }));
  return (
    <>
      <Carousel images={images} />
      <Info />
      <Review />
      <Tips />
    </>
  );
}

