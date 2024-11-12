import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import grayClock from "../assets/images/gray_clock.svg";
import grayLocation from "../assets/images/gray_location.svg";
import grayCalendar from "../assets/images/gray_calendar.svg";
import caretLeft from "../assets/images/caret-left.svg";
import caretRight from "../assets/images/caret-right.svg";

// Define the ProductCard component
const ProductCard = ({ product }) => {
  const [filled, setFilled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);

  const handleMouseDown = () => {
    setActiveIndex(true);
  };

  const handleMouseUp = () => {
    setActiveIndex(false);
  };
  return (
    <Box
      key={product.id}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`cursor-pointer rounded-lg shadow-sm relative ${
        activeIndex ? "bg-[#f4f4f6]" : "bg-[#FFFFFF]"
      }`}
    >
      <div className="absolute border-[1px] border-solid border-[#9A6DF9] top-[24px] px-[7px] bg-[#754FD1] left-[24px] flex items-center flex-col rounded-[8px] ">
        <div className="text-white text-[32px] font-bold leading-[28px] pt-[9px] pb-[4px]">
          24
        </div>
        <div className=" text-white rounded-lg font-bold text-[20px] pb-[9px] leading-[28px]">
          ოქტ
        </div>
      </div>

      <div className="overflow-hidden rounded-md">
        <Image
          src={product.img}
          alt={product.title}
          width={512}
          height={296}
          style={{ objectFit: "cover", height: "296px" }}
          className="w-full transition"
        />
      </div>
      <div
        className="flex p-[24px] flex-col"
        style={{ boxShadow: "0px 8px 40px -8px #172B4D14" }}
      >
        <div className="flex gap-[16px] pb-[24px]">
          <div className="flex items-center gap-[4px]">
            <Image
              src={grayLocation}
              alt={"gray location"}
              width={20}
              height={20}
            />
            <div className="text-[#696F8C] text-[16px]">თბილისი</div>
          </div>
          <div className="flex items-center gap-[4px]">
            <Image
              src={grayCalendar}
              alt={"gray calendar"}
              width={20}
              height={20}
            />
            <div className="text-[#696F8C] text-[16px]">24 ოქტომბერი</div>
          </div>
          <div className="flex items-center gap-[4px]">
            <Image src={grayClock} alt={"gray clock"} width={20} height={20} />
            <div className="text-[#696F8C] text-[16px]">19:00</div>
          </div>
        </div>
        <h3 className="text-[20px] leading-[28px] text-[#101840] font-bold overflow-hidden text-ellipsis line-clamp-2">
          {product.title}
        </h3>
        <div className="flex items-center mt-[8px]">
          <span className="text-[#44546F] text-[16px]">
            გლობალური პრემიუმ ბრენდის,{" "}
            <span className="text-[#474D66]">𝐊𝐎𝐑𝐑𝐄𝐒</span> -ის ივენთი
            ექსკლუზიურად 𝐈𝐌𝐏𝐄𝐗-ში
          </span>
        </div>
        <div className="flex mt-[24px] items-center gap-[8px]">
          <button className="p-[12px] w-1/2 text-[16px] bg-[#8255E3] hover:bg-[#503095] text-white rounded-lg">
            რეგისტრაცია
          </button>
          <button
            onClick={() => setFilled((prevState) => !prevState)}
            className="p-[11px] text-[#101840] text-center w-1/2 border-[1px] border-solid border-[#1B1D201A] rounded-[8px] hover:bg-[#1B1D2008]"
          >
            დეტალურად
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ProductCard;
