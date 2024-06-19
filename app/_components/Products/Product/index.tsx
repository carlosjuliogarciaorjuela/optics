import { Card, CardContent } from "@/components/ui/card";
import image1 from "../../../../public/images/product1.png";
import Image from "next/image";

const Product = () => {
  return (
    <div className="flex w-full">
      <Card className="xl:w-[40%] w-[70%] py-5 shadow-2xl">
        <CardContent className="flex flex-col w-full">
          <Image className="w-full" src={image1} alt="product-img" />
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
