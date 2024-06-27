import React from "react";
import OrderForm from "@/app/_components/OrderForm/OrderForm";
import TecnoVisionProduct from "@/app/_components/Products/AllProducts/TecnoVisionProduct";

const TecnoVision: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <p className="text-3xl text-center mb-10 font-bold">
          Nuestros productos
        </p>
        <TecnoVisionProduct />
      </div>
      <div className="w-full flex justify-center p-8 bg-navyblue">
        <OrderForm />
      </div>
    </div>
  );
};

export default TecnoVision;
