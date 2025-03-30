
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselProps {
  images: string[];
  autoplayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  autoplayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplayInterval]);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg">
      {/* Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform",
            index === currentIndex ? "opacity-100 translate-x-0" : 
            index < currentIndex ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
          )}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>
      ))}

      {/* Navigation Arrows */}
      
       
     

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex 
                ? "bg-primary w-8" 
                : "bg-background/50 hover:bg-background/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
