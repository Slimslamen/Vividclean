import React, { useState } from 'react';

interface CarouselProps {
  images: { url: string; title: string }[];
}

const Carousel = ({ images }: CarouselProps): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };


  // Logiken för att hämta synliga bilder

  // slice används för att visa upp de 3 första bilderna i arrayen, 
  // börjar från index currentimageindex och inkluderar de 3 nästa bilderna
  const visibleImages = images.slice(currentImageIndex, currentImageIndex + 3);
  if (visibleImages.length < 3) {
    // Om det inte finns tillräckligt med bilder kvar, lägg till bilder från början av arrayen
    // beräknar antalet återstående bilder som behövs för att fylla upp karusellen med 3 bilder
    const remainingImages = 3 - visibleImages.length;
    const startImages = images.slice(0, remainingImages);
    visibleImages.push(...startImages);
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-center space-x-8 space-y-8 overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button className="text-customDark rounded text-4xl md:text-6xl" onClick={prevSlide}>
            &lt; {/* Pil för att gå till föregående bild */}
          </button>
        </div>
        {visibleImages.map((image, index) => (
          <div key={index} className="w-1/3 overflow-hidden">
            <img src={image.url} alt={`Slide ${currentImageIndex + index}`} className="w-full border border-customBeige rounded-lg opacity-70 h-48 md:h-96" />
            <h2 className="text-center font-bold text-customDark font-DM text-lg md:text-xl mt-3 md:mt-4">{image.title}</h2>
          </div>
        ))}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button className="text-customDark rounded text-4xl md:text-6xl" onClick={nextSlide}>
            &gt; {/* Pil för att gå till nästa bild */}
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${currentImageIndex === index ? 'bg-customDark' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;


