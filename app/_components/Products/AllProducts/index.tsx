import Image from "next/image";
import Link from "next/link";
import image1 from "../../../../public/images/product01.png";
import image2 from "../../../../public/images/product02.png";
import image3 from "../../../../public/images/product03.png";
import image4 from "../../../../public/images/product04.png";

const otherProducts = [
  {
    title: "Lentes Tipo 1",
    image: image1,
    description: "Breve descripción del Producto 1",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-1",
  },
  {
    title: "Lentes Tipo 2",
    image: image2,
    description: "Breve descripción del Producto 2",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-2",
  },
  {
    title: "Lentes Tipo 2",
    image: image3,
    description: "Breve descripción del Producto 3",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-3",
  },
  {
    title: "Lentes Tipo 2",
    image: image4,
    description: "Breve descripción del Producto 4",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lente-tipo-4",
  },
];

const AllProducts = () => {
  return (
    <div className="w-full flex justify-center px-4 py-8">
      <div className="grid w-full max-w-6xl gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {otherProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-2"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                className="object-cover"
                src={product.image}
                alt={product.title}
                layout="fill"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{product.description}</p>
            <p className="text-xl font-bold text-gray-900 mb-4">
              {product.price}
            </p>
            <Link href={product.link} passHref>
              <div className="w-full bg-blue-600 text-white  py-2 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 text-center cursor-pointer">
                Add to Cart
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

// // components/AllProducts.tsx
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { getAllProducts, Product as ProductType } from "@/lib/shopify";
//
// const AllProducts = () => {
//   const [products, setProducts] = useState<ProductType[]>([]);
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
//     <div className="grid h-72 lg:h-[400px] xl:h-[500px] w-[70%] gap-10 grid-cols-2 mt-10">
//       {products.map((product) => (
//         <div
//           key={product.node.id}
//           className="bg-white border rounded-lg border-gray-300 flex items-center justify-center flex-col"
//         >
//           <p className="lg:text-2xl text-lg text-center font-bold">
//             {product.node.title}
//           </p>
//           <Image
//             className="self-center w-[40%]"
//             src={product.node.image.src}
//             alt={product.node.title}
//             width={500}
//             height={500}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export default AllProducts;
