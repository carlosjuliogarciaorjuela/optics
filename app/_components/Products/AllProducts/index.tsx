import Image from "next/image";
import image1 from "../../../../public/images/product1.png";

const otherProducts = [
  {
    title: "Producto 1",
    image: image1,
  },
  {
    title: "Producto 2",
    image: image1,
  },
  {
    title: "Producto 3",
    image: image1,
  },
  {
    title: "Producto 4",
    image: image1,
  },
];

const AllProducts = () => {
  return (
    <div className="grid h-72 lg:h-[400px] xl:h-[500px] w-[70%] gap-10 grid-cols-2 mt-10">
      {otherProducts.map((product, index) => (
        <div
          key={index}
          className="bg-white border rounded-lg border-gray-300 flex items-center justify-center flex-col"
        >
          <p className="lg:text-2xl text-lg text-center font-bold">
            {product.title}
          </p>
          <Image
            className="self-center w-[40%]"
            src={product.image}
            alt="product-img"
          />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
