"use client";

import ArrivalsCard from "./arrivals-card";
import Image from "next/image";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";

const NewArrivals = () => {
  const [arrivals, setArrivals] = useState([]);

  const fetchArrivals = async () => {
    try {
      const response = await axiosInstance.get("/api/store/products/arrivals");
      setArrivals(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArrivals();
  }, []);
  return (
    <section className="px-[49.4px] py-8">
      <div className="flex flex-col ">
        <div className="relative inline-block">
          <Image
            src="/vector/vector-arrivals.svg"
            alt=""
            width={88.35}
            height={16.59}
            className="absolute bottom-0 left-20 "
          />
          <h1 className="relative font-bold text-[22.8px] leading-[23.8px] tracking-[6%] z-10">
            NEW ARRIVALS
          </h1>
        </div>
        <div className="grid grid-cols-6  gap-x-12 mt-[51.35px]">
          {arrivals.map((arrival: Product) => (
            <ArrivalsCard key={arrival.id} product={arrival} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
