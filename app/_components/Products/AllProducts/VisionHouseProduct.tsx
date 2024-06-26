import Image from "next/image";
import Link from "next/link";
import image1 from "../../../../public/images/product01.png";
import image2 from "../../../../public/images/product02.png";
import image3 from "../../../../public/images/product03.png";
import image4 from "../../../../public/images/product04.png";
import image5 from "../../../../public/images/product01.png";
import image6 from "../../../../public/images/product02.png";
import image7 from "../../../../public/images/product03.png";
import image8 from "../../../../public/images/product04.png";
import image9 from "../../../../public/images/product01.png";
import image10 from "../../../../public/images/product02.png";

const otherProducts = [
  {
    title: "Lentes Tipo 1",
    image: image1,
    description: "Lente 1",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-1",
  },
  {
    title: "Lentes Tipo 2",
    image: image2,
    description: "Lente 2",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-2",
  },
  {
    title: "Lentes Tipo 2",
    image: image3,
    description: "lente 3",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-3",
  },
  {
    title: "Lentes Tipo 2",
    image: image4,
    description: "lente 4",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lente-tipo-4",
  },
  {
    title: "Lentes Tipo 1",
    image: image5,
    description: "Lente 1",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-1",
  },
  {
    title: "Lentes Tipo 2",
    image: image6,
    description: "Lente 2",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-2",
  },
  {
    title: "Lentes Tipo 2",
    image: image7,
    description: "lente 3",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-3",
  },
  {
    title: "Lentes Tipo 2",
    image: image8,
    description: "lente 4",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lente-tipo-4",
  },
  {
    title: "Lentes Tipo 2",
    image: image9,
    description: "lente 3",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lentes-tipo-3",
  },
  {
    title: "Lentes Tipo 2",
    image: image10,
    description: "lente 4",
    price: "$200.000,00 COP",
    link: "https://36775f-f6.myshopify.com/products/lente-tipo-4",
  },
];

const VisionHouseProduct = () => {
  return (
    <div className="w-full flex justify-center px-4 py-2">
      <div className="grid w-full max-w-6xl gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
        {otherProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-2"
          >
            <div className="relative w-full h-48 lg:h-44 mb-4">
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
              <div className="w-full bg-DarkRoyalBlue text-white  py-2 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 text-center cursor-pointer">
                Comprar
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionHouseProduct;
