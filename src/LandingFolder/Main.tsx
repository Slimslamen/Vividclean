import React from "react";
import Carousel from "./Carousel";
import Info from "./Info";
import Review from "./Review";
import Tips from "./Tips";

const images = [
  {url:"src/assets/bildkarusell6.jpg.png", title:"Hemstäd"},
  {url:"src/assets/bildkarusell8.jpg.png", title:"Storstäd"},
  {url:"src/assets/bildkarusell9.jpg.png", title:"Fönsterputs"},
  {url:"src/assets/bildkarusell3.jpg.png", title:"Flyttstäd"},
  {url:"src/assets/bildkarusell4.jpg.png", title:"Veckostäd"},
  {url:"src/assets/bildkarusell5.jpg.png", title:"Företagsstäd"},
]

export default function Main(): JSX.Element {


  return (
    <>
      <div className="container md:mx-100  flex items-center justify-center">
        <Carousel images={images} />
      </div>
      <Info />
      <Review />
      <Tips />
    </>
  );
}
