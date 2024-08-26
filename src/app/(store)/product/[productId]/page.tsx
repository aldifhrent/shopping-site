<<<<<<< HEAD
import Image from "next/image";

export default function Page({ params }: { params: { productId: string } }) {
  return (
    <main className="w-full items-center justify-center p-12">
      <div className="flex gap-3">
        <Image src={params.productId} alt="" />
      </div>
    </main>
  );
}
=======
import Header from "@/components/header";
import Wrapper from "@/components/wrapper";
import { formatPrice } from "@/lib/formatprice";
import Image from "next/image";
import { GetServerSideProps } from "next";
import ButtonCart from "@/components/button-cart";
import { Product } from "@prisma/client";
import { useGetProductById } from "@/features/product/hooks/product";

interface ProductPageIdProps {
  params: {
    productId: string;
  };
}

const ProductPageId = async ({ params }: ProductPageIdProps) => {
  const products = await useGetProductById(params.productId);

  if (!products) {
    // Handle the case where the product is not found (return a 404, show an error message, etc.)
    return (
      <>
        <Header />
        <Wrapper>
          <p>Product not found.</p>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <Wrapper>
        <div className="flex flex-col md:flex-row gap-x-12 ">
          <Image
            src={products.images || "/arrivals/arrivals-1.svg"}
            width={550}
            height={550}
            alt={products.name || ""}
          />
          <div className="flex flex-col w-auto">
            <h1 className="text-5xl mt-8 md:mt-12">{products.name}</h1>
            <p className="mt-4 text-3xl">{formatPrice(products.price)}</p>
            <p>{products.description || ""}</p>

            <ButtonCart data={products} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ProductPageId;
>>>>>>> 8d80a130897fc9effc781d0d54fe31fcf3c1f3fe
