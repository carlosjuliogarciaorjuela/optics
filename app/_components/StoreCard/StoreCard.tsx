// src/components/StoreCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface StoreCardProps {
  imageSrc: string;
  title: string;
  description: string;
  cardLink: string;
  buttonText?: string; // Nuevo prop opcional para el texto del botón
}

const StoreCard: React.FC<StoreCardProps> = ({
  imageSrc,
  title,
  description,
  cardLink,
  buttonText = "Ver en Instagram", // Texto por defecto
}) => {
  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <Link className=" flex  " href="#">
        <Image
          className="rounded-t-lg"
          src={imageSrc}
          alt={title}
          width={800}
          height={800}
        />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={cardLink}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {buttonText}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default StoreCard;
