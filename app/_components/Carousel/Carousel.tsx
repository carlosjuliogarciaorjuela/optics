// "use client";
//
// import React, { useRef } from "react";
// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
// import Autoplay from "embla-carousel-autoplay";
//
// const images = [
//   "/images/Carousel/Clientes.png",
//   "/images/Carousel/Innovación.png",
//   "/images/Carousel/Lente.png",
// ];
//
// const CarouselComponent = () => {
//   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
//   return (
//     <div className="w-full flex justify-center ">
//       <Carousel
//         opts={{ loop: true, align: "center" }}
//         className="h-[250px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[750px] 2xl:h-[850px] w-full"
//       >
//         <CarouselContent className="flex transition-transform duration-100 ease-in-out">
//           {images.map((src, index) => (
//             <CarouselItem
//               key={index}
//               className="flex-shrink-0 h-[250px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[750px] 2xl:h-[850px] w-full"
//             >
//               <div className=" h-full">
//                 <Card className="h-full">
//                   <CardContent className="relative h-full w-full flex items-center justify-center">
//                     <Image
//                       src={src}
//                       alt={`Image ${index + 1}`}
//                       layout="fill"
//                       objectFit="cover"
//                       className="object-center"
//                     />
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2" />
//         <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2" />
//       </Carousel>
//     </div>
//   );
// };
//
// export default CarouselComponent;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/Carousel/Clientes.png",
    "/images/Carousel/Innovación.png",
    "/images/Carousel/Lente.png",
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

export default CarouselComponent;
