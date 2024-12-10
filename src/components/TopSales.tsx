import React, { useState } from "react";
import Image from "next/image";
import caretRight from "../assets/images/caret-right.svg";
import caretLeft from "../assets/images/caret-left.svg";
import { products } from "./constants";

import Card from "./Card";

const ProductList = () => {
  const [counts, setCounts] = useState({});

  const handleCountChange = (index, change) => {
    setCounts((prevCounts) => {
      const currentCount = prevCounts[index] || 0;
      const newCount = Math.max(0, Math.min(10, currentCount + change));
      return { ...prevCounts, [index]: newCount };
    });
  };
  return (
    <div className="xl:mx-[168px] max-2xl:mx-[80px] bg-[#FBFBFD] px-auto pt-[64px] pb-[80px]">
      <div className="py-[4px] flex items-center justify-between mb-[48px]">
        <h2 className="text-[24px] leading-[32px] text-[#474D66] font-bold">
          ტოპ გაყიდვადი
        </h2>
        <div className="flex items-center gap-[16px]">
          <h3 className="cursor-pointer text-[16px] text-[#101840] leading-[24px] border-b-[1px] border-transparent hover:border-[#474D66] hover:text-[#474D66]">
            ყველას ნახვა
          </h3>

          <div className="flex items-center gap-[4px]">
            <div className="cursor-pointer border-[1px] p-[9px] border-[#1B1D2008] flex items-center justify-center rounded-[8px]">
              <Image src={caretLeft} width={20} height={20} alt="caret-left" />
            </div>
            <div className="cursor-pointer hover:bg-[#1B1D2008] border-[1px] p-[9px] border-[#1B1D201A] flex items-center justify-center rounded-[8px]">
              <Image
                src={caretRight}
                width={20}
                height={20}
                alt="caret-right"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[8px]">
        {products.map((product, index) => (
          <Card
            key={product.id}
            product={product}
            index={index}
            counts={counts}
            handleCountChange={handleCountChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
