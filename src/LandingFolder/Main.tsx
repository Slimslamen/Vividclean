import React from "react";
import Carousel from "./Carousel";
import Info from "./Info";
import Review from "./Review";
import Tips from "./Tips";

const images = [
  { url: "src/assets/Carousel1.jpg", title: "Hemstäd" },
  { url: "src/assets/Carousel2.jpg", title: "Storstäd" },
  { url: "src/assets/CarouselWeek.jpg", title: "Veckostäd" },
  { url: "src/assets/CarouselMove.jpg", title: "Flyttstäd" },
  { url: "src/assets/CarouselCompany.jpg", title: "Företagsstäd" },
  { url: "src/assets/CarouselWindow.jpg", title: "Fönsterputs" },
];

export default function Main(): JSX.Element {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="container flex items-center justify-center">
        <Carousel images={images} />
      </div>
      <Info />
      <Review />
      <Tips />
    </div>
  );
}
