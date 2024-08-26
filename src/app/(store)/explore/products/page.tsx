import Header from "@/components/header";
import ProductCard from "@/components/products/products-card";
import Wrapper from "@/components/wrapper";
import { formatPrice } from "@/lib/formatprice";
import { Product } from "@prisma/client";
import { useFetchProducts } from "@/features/product/hooks/product";

const ProductsPage = async () => {
  const products = await useFetchProducts();
  console.log(products);

  return (
    <>
      <Header />
      <Wrapper>
        <h1 className="text-4xl font-bold">Find the Perfect Product for You</h1>
        <p className="text-sm">
          Browse through our wide range of categories and find what suits your
          needs.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 mt-6">
          {products?.map((product: Product) => (
            <ProductCard
              id={product.id}
              name={product.name}
              price={formatPrice(product.price)}
              key={product.id}           />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default ProductsPage;
