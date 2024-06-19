import { Card, CardContent } from "@/components/ui/card";
import image1 from "../../../../public/images/product1.png";
import Image from "next/image";

const Product = () => {
  return (
    <div className="flex w-full justify-center">
      <Card className="w-full lg:w-[70%] py-5 shadow-2xl flex flex-row">
        <Image
          className="w-1/2 h-full object-cover"
          src={image1}
          alt="product-img"
        />
        <CardContent className="flex flex-col w-1/2 p-5">
          <p className="lg:text-xl text-base text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
