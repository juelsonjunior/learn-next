import IProduct from "@/data/model/Product";
import Image from "next/image";

interface ProductDetailsProps {
  product: IProduct;
}

export default function ProductDetails(props: ProductDetailsProps) {
  const { product } = props;
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative min-w-48 min-h-36">
        <Image src={product.imageUrl} alt={product.name} fill />
      </div>
      <div className="flex flex-col items-center text-center gap-5 max-w-[500px]">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-500">{product.description}</p>
        <span className="text-2xl">R$ {product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
