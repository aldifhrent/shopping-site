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
