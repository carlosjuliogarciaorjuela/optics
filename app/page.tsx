// "use client";
//
// import { useEffect, useState } from "react";
// import { getAllProducts, Product } from "@/lib/shopify"; // Asegúrate de importar el tipo Product
//
// import CarouselComponent from "./_components/Carousel/Carousel";
// import CardContainer from "@/app/_components/StoreCard/CardContainer";
// import ProductComponent from "./_components/Products/Product";
// import AllProducts from "./_components/Products/AllProducts";
// import VideoPlayer from "@/app/_components/VideoPlayer/VideoPlayer";
// import TabComponent from "@/app/_components/AboutUs/TabComponent";
// import OrderForm from "@/app/_components/OrderForm/OrderForm";
// import "dotenv/config";
//
// // Importa ProductPage
// import ProductPage from "@/app/_components/ProductPage";
//
// export default function Home() {
//   const [products, setProducts] = useState<Product[]>([]); // Especifica el tipo Product[]
//
//   useEffect(() => {
//     async function fetchData() {
//       const response = await getAllProducts();
//       setProducts(response.body.data.products.edges);
//     }
//     fetchData();
//   }, []);
//
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <div className="w-full p-0">
//         <CarouselComponent />
//       </div>
//       <div className="w-full">
//         <TabComponent />
//       </div>
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <CardContainer />
//       </div>
//       <div className="w-full my-10 flex justify-center">
//         <VideoPlayer videoSrc="https://www.youtube.com/embed/R6wcLvotbEI?si=8uC5R5cV2KLqyQM9" />
//       </div>
//       <div className="flex flex-col items-center">
//         <p className="text-3xl text-center mb-10 font-bold">
//           Nuestros productos
//         </p>
//         <div>
//           {products.map((product) => (
//             <div key={product.node.id}>
//               <h2>{product.node.title}</h2>
//               <p>{product.node.description}</p>
//               <img src={product.node.image.src} alt={product.node.title} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="w-full flex justify-center p-8">
//         <OrderForm />
//       </div>
//       {/* Agrega ProductPage dentro de Home */}
//       <ProductPage />
//     </div>
//   );
// }
import CarouselComponent from "./_components/Carousel/Carousel";
import CardContainer from "@/app/_components/StoreCard/CardContainer";

import AllProducts from "./_components/Products/AllProducts";
import VideoPlayer from "@/app/_components/VideoPlayer/VideoPlayer";
import TabComponent from "@/app/_components/AboutUs/TabComponent";
import OrderForm from "@/app/_components/OrderForm/OrderForm";
import Gallery from "@/app/_components/Galley/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full">
        <TabComponent />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <CardContainer />
      </div>
      <div className="w-full my-10 flex justify-center">
        <VideoPlayer videoSrc="https://www.youtube.com/embed/R6wcLvotbEI?si=8uC5R5cV2KLqyQM9" />
      </div>
      <div className="w-full">
        <Gallery />
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="text-3xl text-center mb-10 font-bold">
          Nuestros productos
        </p>
        <AllProducts />
      </div>
      <div className="w-full flex justify-center p-8 bg-navyblue">
        <OrderForm />
      </div>
    </div>
  );
}
