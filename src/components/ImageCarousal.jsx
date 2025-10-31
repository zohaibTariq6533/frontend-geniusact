import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return null; // Don't render if no images are provided
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const hasMultipleImages = images.length > 1;

  return (
    <div className="relative mt-6 group">
      {/* Current Image */}
      <img
        src={images[currentImageIndex]}
        alt={`Step image ${currentImageIndex + 1}`}
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />

      {/* Navigation Buttons (only show if multiple images) */}
      {hasMultipleImages && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-4 p-2 bg-black bg-opacity-50 text-white rounded-full focus:outline-none hover:bg-opacity-75 transition-opacity opacity-50 group-hover:opacity-100 duration-300"
            aria-label="Previous image"
          >
            &#10094; {/* Left arrow */}
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-4 p-2 bg-black bg-opacity-50 text-white rounded-full focus:outline-none hover:bg-opacity-75 transition-opacity opacity-50 group-hover:opacity-100 duration-300"
            aria-label="Next image"
          >
            &#10095; {/* Right arrow */}
          </button>
        </>
      )}

      {/* Pagination Dots (only show if multiple images) */}
      {hasMultipleImages && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-2 w-2 rounded-full ${
                idx === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              } focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;