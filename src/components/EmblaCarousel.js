'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const EmblaCarousel = ({ slides }) => {
  const autoplay = Autoplay({ delay: 10000 });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container" style={{ borderRadius: "10px"}}>
        {slides.map((SlideComponent, index) => (
          <div className="embla__slide" key={index} style={{ borderRadius: "10px"}}>
            {SlideComponent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
