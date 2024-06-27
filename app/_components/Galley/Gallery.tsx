"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/Gallery/ProductG.png",
    "/images/Gallery/BannerLenteAR.png",
    "/images/Gallery/BannerLenteJA10.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="custom-controls-gallery"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative object-cover h-52 sm:h-[22rem] md:h-[26rem] lg:h-[35rem] xl:h-[46rem] desktop:h-[50rem] 2xl:h-[55rem] overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-center"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
