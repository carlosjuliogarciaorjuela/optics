// src/components/CardContainer.tsx
import React from "react";
import StoreCard from "./StoreCard";

const CardContainer: React.FC = () => {
  const cardsData = [
    {
      imageSrc: "/images/Cards/VisionHouseTienda.png",
      title: "Óptica Visión House",
      description:
        "Bienvenidos a Óptica Vision House, donde nuestra misión es ofrecer la mejor atención y calidad en productos ópticos.",
      cardLink: "https://www.instagram.com/opticavisionhouseco/",
    },
    {
      imageSrc: "/images/Cards/TecnoVisionTienda.png",
      title: "Óptica TecnoVisión",
      description:
        "Bienvenidos a Óptica TecnoVision, donde nuestra misión es ofrecer la mejor atención y calidad en productos ópticos.",
      cardLink: "https://www.instagram.com/technovisionco/",
    },
    {
      imageSrc: "/images/Cards/CityVisionTienda.png",
      title: "Óptica CityVisión",
      description:
        "Bienvenidos a Óptica CityVisión, donde nuestra misión es ofrecer la mejor atención y calidad en productos ópticos.",
      cardLink: "https://www.instagram.com/cityvisionco/",
    },
    {
      imageSrc: "/images/Cards/VisionHouseTienda.png",
      title: "Óptica 4",
      description:
        "Bienvenidos a XXXX, donde nuestra misión es ofrecer la mejor atención y calidad en productos ópticos.",
      cardLink: "https://www.instagram.com/opticavisionhouseco/",
    },
    {
      imageSrc: "/images/Cards/VisionHouseTienda.png",
      title: "Óptica 5",
      description:
        "Bienvenidos a XXXX, donde nuestra misión es ofrecer la mejor atención y calidad en productos ópticos.",
      cardLink: "https://www.instagram.com/opticavisionhouseco/",
    },
    {
      imageSrc: "/images/Cards/VisionHouseTienda.png",
      title: "Facebook",
      description:
        "Lorem.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam consetetur sadipscing elitr, sed diam",
      cardLink: "https://www.instagram.com/opticavisionhouseco/",
    },
  ];

  return (
    <div className="flex xl:grid md:grid sm:grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-20 flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <StoreCard
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          cardLink={card.cardLink}
          buttonText={
            card.title === "Facebook" ? "Ver en Facebook" : "Ver en Instagram"
          } // Condición para cambiar el texto del botón
        />
      ))}
    </div>
  );
};

export default CardContainer;
