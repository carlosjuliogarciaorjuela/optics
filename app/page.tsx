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
      <div className="w-full">
        <CarouselComponent />
      </div>

      <div>
        <TabComponent />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <CardContainer />
      </div>

      <div className="w-full my-10 flex justify-center">
        <VideoPlayer
          videoSrc="images/Video/VideoHorizontal.mp4" // Asegúrate de que esta ruta sea correcta
          captionsSrc="/videos/" // Asegúrate de que esta ruta sea correcta
          controls
          autoplay={true}
          preload="none"
        />
      </div>

      <div className="flex flex-col pl-40">
        <p className="text-3xl text-center self-center mb-10 font-bold">
          Nuestros productos
        </p>
        <div className="flex flex-col lg:flex-row md:mb-20 mb-10 gap-10 justify-center items-center">
          <Product />
          <AllProducts />
        </div>
      </div>
      <div className="w-full flex justify-center p-8">
        <OrderForm />
      </div>
    </div>
  );
}
