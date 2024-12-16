"use client";

import React from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import productImg1 from "../assets/images/zhana.jpeg";
import productImg2 from "../assets/images/zhana2.jpeg";
import productImg3 from "../assets/images/zhana3.jpeg";
import caretRight from "../assets/images/caret-right.svg";
import caretLeft from "../assets/images/caret-left.svg";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    discount: "-42%",
    title: "KORRES-ის ბრენდის პრეზენტაცია ჟანეტ ქერდიყოშვილთან ერთად",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg1,
  },
  {
    id: 2,
    discount: "-42%",
    title: "KORRES-ის ბრენდის პრეზენტაცია ჟანეტ ქერდიყოშვილთან ერთად",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg2,
  },
  {
    id: 3,
    discount: "-42%",
    title: "KORRES-ის ბრენდის პრეზენტაცია ჟანეტ ქერდიყოშვილთან ერთად",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg3,
  },
];

const ProductList = () => {
  const route = useRouter();
  return (
    <div className="bg-[#fff]">
      <div className="2xl:mx-[168px] max-2xl:mx-[168px] px-auto pt-[64px] pb-[80px]">
        <div className="py-[4px] flex items-center justify-between mb-[48px]">
          <h2 className="text-[24px] leading-[32px] text-[#474D66] font-bold">
            ივენთები
          </h2>
          <div className="flex items-center gap-[16px]">
            <h3
              onClick={() => route.push("/events")}
              className="cursor-pointer text-[16px] text-[#101840] leading-[24px] border-b-[1px] border-transparent hover:border-[#474D66] hover:text-[#474D66]"
            >
              ყველას ნახვა
            </h3>
            <div className="flex items-center gap-[4px]">
              <div className="cursor-pointer border-[1px] p-[9px] border-[#1B1D2008] flex items-center justify-center rounded-[8px]">
                <Image
                  src={caretLeft}
                  width={20}
                  height={20}
                  alt="caret-left"
                />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleDetail={() => {
                route.push("/events/2");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
