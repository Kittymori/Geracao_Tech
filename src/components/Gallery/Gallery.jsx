import React, { useState, useEffect } from 'react';
import ArrowLeft from 'src/assets/arrow-left.svg';
import ArrowRight from 'src/assets/arrow-right.svg';

function Gallery({ className, width, height, radius, showThumbs, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryContainerStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    borderRadius: radius || '0px',
    overflow: 'hidden',
    position: 'relative',
  };

  const mainImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: radius || '0px',
    transition: 'transform 0.3s ease-in-out',
  };

  const thumbImageStyle = {
    width: '117px',
    height: '95px',
    objectFit: 'cover',
    borderRadius: radius || '0px',
    cursor: 'pointer',
    border: '2px solid transparent',
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div className="gallery-empty">Nenhuma imagem para exibir.</div>;
  }

  return (
    <div className={`gallery-container ${className || ''}`} style={galleryContainerStyle}>
      <div className="gallery-main-image-wrapper">
        <img
          src={images[currentIndex].src}
          alt={`Imagem ${currentIndex + 1}`}
          style={mainImageStyle}
          className="gallery-main-image"
        />

        <button
          onClick={goToPrevious}
          className="gallery-arrow gallery-arrow-left"
          disabled={currentIndex === 0}
        >
          <img src={ArrowLeft} alt="Anterior" />
        </button>
        <button
          onClick={goToNext}
          className="gallery-arrow gallery-arrow-right"
          disabled={currentIndex === images.length - 1}
        >
          <img src={ArrowRight} alt="Próximo" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Miniatura ${index + 1}`}
              className={`gallery-thumb ${index === currentIndex ? 'active' : ''}`}
              style={{
                ...thumbImageStyle,
                borderColor: index === currentIndex ? '#007bff' : 'transparent',
              }}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;