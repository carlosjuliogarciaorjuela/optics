import CarouselComponent from "./_components/Carousel/Carousel";
import CardContainer from "@/app/_components/StoreCard/CardContainer";
import Product from "./_components/Products/Product";
import AllProducts from "./_components/Products/AllProducts";
import VideoPlayer from "@/app/_components/VideoPlayer/VideoPlayer";
import TabComponent from "@/app/_components/AboutUs/TabComponent";
import OrderForm from "@/app/_components/OrderForm/OrderForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full p-0">
        <CarouselComponent />
      </div>
      <div className="w-full">
        <TabComponent />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <CardContainer />
      </div>
      <div className="w-full my-10 flex justify-center">
        <VideoPlayer videoSrc="https://www.youtube.com/embed/R6wcLvotbEI?si=8uC5R5cV2KLqyQM9" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-3xl text-center mb-10 font-bold">
          Nuestros productos
        </p>
        <Product />
        <AllProducts />
      </div>
      <div className="w-full flex justify-center p-8">
        <OrderForm />
      </div>
    </div>
  );
}
