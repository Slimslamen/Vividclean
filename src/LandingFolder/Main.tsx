import React from "react";
import Carousel from "./Carousel";

export default function Main() {
  const images: string[] = ["src/assets/dammsugare.jpg.png",
    "src/assets/heroimage2.jpg",
    "src/assets/heroimage3.jpg",]
  return <div>
<Carousel images={images} />
    
    Main</div>;
}
