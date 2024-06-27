import React from "react";
import OrderForm from "@/app/_components/OrderForm/OrderForm";
import CityVisionProduct from "@/app/_components/Products/AllProducts/CityVisionProduct";

const CityVision: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <p className="text-3xl text-center mb-10 font-bold">
          Nuestros productos
        </p>
        <CityVisionProduct />
      </div>
      <div className="w-full flex justify-center p-8 bg-navyblue">
        <OrderForm />
      </div>
    </div>
  );
};

export default CityVision;
