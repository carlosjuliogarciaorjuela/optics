// import { useEffect, useState } from "react";
// import { getAllProducts, Product as ProductType } from "@/lib/shopify";
//
// const ProductPage = () => {
//   const [products, setProducts] = useState<ProductType[]>([]);
//
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await getAllProducts();
//         setProducts(response.body.data.products.edges);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }
//     fetchData();
//   }, []);
//
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Nuestros Productos</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div
//             key={product.node.id}
//             className="bg-white p-4 rounded-lg shadow-md"
//           >
//             <img
//               src={product.node.image.src}
//               alt={product.node.title}
//               className="w-full h-48 object-contain mb-4"
//             />
//             <h2 className="text-lg font-semibold">{product.node.title}</h2>
//             <p className="text-gray-600">{product.node.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default ProductPage;
