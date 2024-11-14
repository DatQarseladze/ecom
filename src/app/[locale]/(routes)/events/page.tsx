"use client";
import { useState } from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import ProductCard from "@/src/components/ProductCard";
import productImg1 from "../../../../assets/images/event1.jpeg";
import productImg2 from "../../../../assets/images/zhanet.jpeg";
import productImg3 from "../../../../assets/images/zhanet3.jpeg";
import PaginationComponent from "@/src/components/Pagination";
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
  {
    id: 4,
    discount: "-42%",
    title: "KORRES-ის ბრენდის პრეზენტაცია ჟანეტ ქერდიყოშვილთან ერთად",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg3,
  },
  {
    id: 5,
    discount: "-42%",
    title: "KORRES-ის ბრენდის პრეზენტაცია ჟანეტ ქერდიყოშვილთან ერთად",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg3,
  },
  {
    id: 6,
    discount: "-42%",
    title: "KORRES-ის ბრენდის პრეზენტაცია ჟანეტ ქერდიყოშვილთან ერთად",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg3,
  },
  {
    id: 7,
    discount: "-42%",
    title: "KORRES-ის ბრენდის პრეზენტაცია ჟანეტ ქერდიყოშვილთან ერთად",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg3,
  },
  {
    id: 8,
    discount: "-42%",
    title: "KORRES-ის ბრენდის პრეზენტაცია ჟანეტ ქერდიყოშვილთან ერთად",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg3,
  },
  {
    id: 9,
    discount: "-42%",
    title: "KORRES-ის ბრენდის პრეზენტაცია ჟანეტ ქერდიყოშვილთან ერთად",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg3,
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState<string>("ongoing"); // Initial active tab
  const route = useRouter();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Update active tab on click
  };

  return (
    <div className="bg-[#FBFBFD] pt-[56px] pb-[40px]">
      <div className="xl:mx-[168px] web-xl:mx-[80px] ">
        <h1 className="mb-[40px] text-center text-[40px] text-[#474D66] leading-[48px] font-bold">
          ივენთები
        </h1>
        <div className="flex items-center justify-center gap-[24px]">
          <span
            className="relative text-[20px] cursor-pointer leading-[28px] font-[500] inline-block group pb-[8px]" // Add padding-bottom here
            onClick={() => handleTabClick("ongoing")}
          >
            <span
              className={`text-[20px] ${
                activeTab === "ongoing" ? "text-[#8255E3]" : "text-[#8F95B2]"
              }`}
            >
              მიმდინარე
            </span>
            {/* Border/Underline Logic */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 ease-in-out ${
                activeTab === "ongoing"
                  ? "w-full bg-[#8255E3]" // Active state border color
                  : "group-hover:w-full bg-[#696F8C]" // Hover state border color
              }`}
            ></span>
          </span>
          <span
            className="relative text-[20px] cursor-pointer leading-[28px] font-[500] inline-block group pb-[8px]" // Add padding-bottom here
            onClick={() => handleTabClick("archive")}
          >
            <span
              className={`text-[20px] ${
                activeTab === "archive" ? "text-[#8255E3]" : "text-[#8F95B2]"
              }`}
            >
              არქივი
            </span>
            {/* Border/Underline Logic */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 ease-in-out ${
                activeTab === "archive"
                  ? "w-full bg-[#8255E3]" // Active state border color
                  : "group-hover:w-full bg-[#696F8C]" // Hover state border color
              }`}
            ></span>
          </span>
        </div>
        <Divider
          className="w-full"
          sx={{ backgroundColor: "#1B1D201A", opacity: 1 }}
        />

        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
        <div className="flex justify-center mt-[36px]">
          <PaginationComponent
            totalPages={10}
            currentPage={1}
            onPageChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
