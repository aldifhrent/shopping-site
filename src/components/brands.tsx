import Image from "next/image";

const Brands = () => {
  return (
    <section className="bg-[#EBD96B] w-full h-full">
      <div className="flex relative w-full h-full items-center justify-center">
        <Image src="/brands.svg" alt="Brands" fill />
      </div>
    </section>
  );
};

export default Brands;
