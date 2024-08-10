import ArrivalsCard from "./arrivals-card";
import Wrapper from "./wrapper";
import Image from "next/image";
const newArrivals = () => {
  return (
    <section className="px-[49.4px] py-8">
      <div className="flex flex-col ">
        <div className="relative inline-block">
          <Image
            src="/vector/vector-arrivals.svg"
            alt=""
            width={88.35}
            height={16.59}
            className="absolute bottom-0 left-20"
          />
          <h1 className="relative font-bold text-[22.8px] leading-[23.8px] tracking-[6%] z-10">
            NEW ARRIVALS
          </h1>
        </div>
        <div className="flex gap-x-12 mt-[51.35px]">
          <ArrivalsCard />
          <ArrivalsCard />
          <ArrivalsCard />
        </div>
      </div>
    </section>
  );
};

export default newArrivals;
