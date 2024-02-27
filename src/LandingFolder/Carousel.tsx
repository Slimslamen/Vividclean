import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-48 overflow-hidden">
      <div className="relative">
        <div className="flex">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`w-full ${
                index === currentImageIndex ? "block" : "hidden"
              }`}
            />
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black px-3 py-1 rounded-l"
          onClick={goToPreviousImage}
        >
          &lt; {/* Pilar för att gå till föregående bild */}
        </button>
        <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2  text-black px-3 py-1 rounded-r"
        onClick={goToNextImage}
      >
        &gt; {/* Pilar för att gå till nästa bild */}
      </button>
      </div>
    </div>
  );
};

export default Carousel;

