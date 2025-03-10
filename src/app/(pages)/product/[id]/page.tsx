import ProductDetails from "@/components/product/productsDetails";
import getProductById from "@/data/service/getProductId";
import Link from "next/link";

export default async function PageDetailsProduct(props: any) {
  const products = await getProductById(+props.params.id);
  if (!products) return <div>Produto não encontrado</div>;
  return (
    <div className="flex flex-col gap-5">
      <ProductDetails product={products} />
      <Link href="/product" className="self-center bg-blue-500 p-2 rounded-md">
        Voltar
      </Link>
    </div>
  );
}
