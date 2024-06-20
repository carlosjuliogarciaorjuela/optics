import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link"; // Importa Link de Next.js

// Omitir la parte del fetch de datos del producto para simplificar el ejemplo
const Product = () => {
  // Estado y efecto para obtener datos del producto (omitiendo para simplificar)

  return (
    <div className="flex justify-center w-full px-2 py-8">
      <Card className="w-full max-w-4xl shadow-2xl flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="relative w-full lg:w-1/2 h-40 sm:h-80 lg:h-auto">
          <Image
            className="object-cover"
            src="/images/ProductG.png" // Ejemplo de ruta de imagen local
            alt="product-img"
            layout="fill"
          />
        </div>
        <CardContent className="flex flex-col justify-center lg:justify-start w-full lg:w-1/2 p-5">
          <h2 className="text-2xl font-semibold mb-2 text-center lg:text-left">
            Productos Destacados
          </h2>
          <p className="text-gray-500 mb-4 text-center lg:text-left">
            Description
          </p>
          <p className="text-xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            $0000
          </p>
          {/* Utiliza Link para el botón Add to Cart */}
          <Link href="https://36775f-f6.myshopify.com" passHref>
            <div className="w-full bg-blue-600 text-white py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700">
              Ver productos
            </div>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
// // components/Product.tsx
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { getAllProducts, Product as ProductType } from "@/lib/shopify";
//
// const Product = () => {
//   const [products, setProducts] = useState<ProductType[]>([]);
//
//   useEffect(() => {
// 	async function fetchData() {
// 	  const response = await getAllProducts();
// 	  setProducts(response.body.data.products.edges);
// 	}
// 	fetchData();
//   }, []);
//
//   return (
// 	  <div className="flex w-full justify-center px-2">
// 		{products.map((product) => (
// 			<Card
// 				key={product.node.id}
// 				className="w-full py-5 shadow-2xl flex flex-col lg:flex-row"
// 			>
// 			  <Image
// 				  className="lg:ml-5 w-full lg:w-1/2 h-full object-cover"
// 				  src={product.node.image.src}
// 				  alt={product.node.title}
// 				  width={500}
// 				  height={500}
// 			  />
// 			  <CardContent className="flex flex-col w-full lg:w-1/2 p-5">
// 				<p className="lg:text-xl text-base text-start leading-relaxed">
// 				  {product.node.description}
// 				</p>
// 			  </CardContent>
// 			</Card>
// 		))}
// 	  </div>
//   );
// };
//
// export default Product;
