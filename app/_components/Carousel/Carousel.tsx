"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/images/Carousel/Clientes.png",
  "/images/Carousel/Innovación.png",
  "/images/Carousel/Lente.png",
];

const CarouselComponent = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="w-full flex justify-center ">
      <Carousel
        opts={{ loop: true, align: "center" }}
        className="h-[250px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[750px] 2xl:h-[850px] w-full"
      >
        <CarouselContent className="flex transition-transform duration-100 ease-in-out">
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 h-[250px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[750px] 2xl:h-[850px] w-full"
            >
              <div className="p-2 h-full">
                <Card className="h-full">
                  <CardContent className="relative h-full w-full flex items-center justify-center">
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg object-center"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
