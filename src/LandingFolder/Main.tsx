import React from "react";
import Carousel from "./Carousel";

export default function Main() {
  const images: string[] = ["src/assets/bildkarusell6.jpg.png",
    "src/assets/bildkarusell7.jpg.png",
    "src/assets/bildkarusell2.jpg.png",
    "src/assets/bildkarusell3.jpg.png",
    "src/assets/bildkarusell4.jpg.png",
    "src/assets/bildkarusell5.jpg.png",
  ]
  return <div className="container mx-auto px-4">

  <Carousel images={images} />
</div>
}

