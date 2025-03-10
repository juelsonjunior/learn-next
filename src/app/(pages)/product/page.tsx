import ProductItem from "@/components/product/productItem";
import getProduct from "@/data/service/getProduct";

export default async function pageProducts() {
  const products = await getProduct();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black">Lista de produtos</h1>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
