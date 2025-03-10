import IProduct from "@/data/model/Product";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  product: IProduct;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex gap-4 bg-zinc-900 rounded-md overflow-hidden"
    >
      <div className="min-w-48 min-h-36 relative">
        <Image src={product.imageUrl} alt={product.name} fill />
      </div>
      <div className="flex flex-col justify-center gap-1.5">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xs text-zinc-400">{product.description}</p>
        <span className="text-lg">R$ {product.price.toFixed(2)}</span>
      </div>
    </Link>
  );
}
