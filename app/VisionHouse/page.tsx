// src/app/VisionHouse/page.tsx

import React from "react";
import OrderForm from "@/app/_components/OrderForm/OrderForm";
import VisionHouseProduct from "@/app/_components/Products/AllProducts/VisionHouseProduct";

const VisionHouse: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <p className="text-3xl text-center mb-10 font-bold">
          Nuestros productos
        </p>
        <VisionHouseProduct />
      </div>
      <div className="w-full flex justify-center p-8 bg-PastelGreen">
        <OrderForm />
      </div>
    </div>
  );
};

export default VisionHouse;
