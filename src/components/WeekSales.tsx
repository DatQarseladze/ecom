import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import heartIcon from "../assets/images/heart.svg";
import leafIcon from "../assets/images/leaf.svg";
import starIcon from "../assets/images/star.svg";
import clockIcon from "../assets/images/clock.svg";
import organIcon from "../assets/images/organ.svg";
import ratingIcon from "../assets/images/rating.svg";
import bestsellerIcon from "../assets/images/bestseller.svg";
import dotIcon from "../assets/images/dot.svg";
import voltIcon from "../assets/images/volt.svg";
import truckIcon from "../assets/images/truck.svg";
import shoppingCartIcon from '../assets/images/shopping-cart.svg'
import wastingTimeIcon from "../assets/images/wasting-time.svg";
import filledHeart from "../assets/images/filled-heart.svg";
import ReusableBadge from "./ReusableBadge";
import { weekProducts } from "./constants";
import MinusIcon from "@/src/icons/MinusIcon";
import PlusIcon from "@/src/icons/PlusIcon";

const WeekSales = () => {
  const [counts, setCounts] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseDown = (index) => {
    setActiveIndex(index);
  };

  const handleMouseUp = () => {
    setActiveIndex(null);
  };

  const handleCountChange = (index, change) => {
    setCounts((prevCounts) => {
      const currentCount = prevCounts[index] || 0;
      const newCount = Math.max(0, Math.min(10, currentCount + change));
      return { ...prevCounts, [index]: newCount };
    });
  };

  return (
    <div className="xl:mx-[168px] bg-[#FBFBFD] px-auto pt-[64px] pb-[80px]">
      <div className="py-[4px] flex items-center justify-between mb-[48px]">
        <h2 className="text-[24px] leading-[32px] text-[#474D66] font-bold">
          კვირის ფასდაკლებები
        </h2>
        <div className="flex items-center gap-[16px]">
          <h3 className="text-[16px] text-[#101840] leading-[24px]">
            ყველას ნახვა
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {weekProducts.map((product, index) => {
          const [filled, setFilled] = useState(false);
          return (
            <Box
              key={product.id}
              onMouseDown={() => handleMouseDown(index)}
              onMouseUp={handleMouseUp}
              className={`rounded-lg p-[24px] cursor-pointer shadow-sm relative ${
                activeIndex === index ? "bg-[#f4f4f6]" : "bg-[#FFFFFF]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="bg-[#8255E3] w-[63px] border-[1px] border-solid border-[#8255E3] text-white rounded-lg px-[6px] text-[20px] leading-[28px] font-bold">
                  {product.discount}
                </div>
                <div className="flex space-x-2">
                  {index === 0 ? (
                    <ReusableBadge
                      iconSrc={organIcon}
                      bgColor={"#01B21E"}
                      borderColor={"#A3E6CD"}
                      label={"ორგანული"}
                    />
                  ) : index === 1 ? (
                    <ReusableBadge
                      iconSrc={wastingTimeIcon}
                      bgColor={"#D14343"}
                      borderColor={"#EE9191"}
                      label={"შეზღუდული მარაგი"}
                    />
                  ) : index === 2 ? (
                    <ReusableBadge
                      iconSrc={dotIcon}
                      bgColor={"#219653"}
                      borderColor={"#A3E6CD"}
                      label={"მხოლოდ ონლაინ"}
                    />
                  ) : (
                    <ReusableBadge
                      iconSrc={starIcon}
                      bgColor={"#FFD000"}
                      borderColor={"#ffd000"}
                      hoverBorderColor={"#FFDE4D"}
                      hoverBgColor={"#D8A219"}
                      label={"ექსკლუზივი"}
                    />
                  )}
                  {index === 0 ? (
                    <ReusableBadge
                      iconSrc={ratingIcon}
                      bgColor={"#F18D13"}
                      borderColor={"#FAA53D"}
                      label={"ყველაზე რეიტინგული"}
                    />
                  ) : index === 1 ? (
                    <ReusableBadge
                      iconSrc={bestsellerIcon}
                      bgColor={"#ED55C2"}
                      borderColor={"#F499DA"}
                      label={"ბესტსელერი"}
                    />
                  ) : index === 2 ? (
                    <ReusableBadge
                      iconSrc={voltIcon}
                      bgColor={"#9A6DF9"}
                      borderColor={"#CBB2FF"}
                      label={"სიახლე"}
                    />
                  ) : (
                    <ReusableBadge
                      iconSrc={leafIcon}
                      bgColor={"#82B536"}
                      borderColor={"#94C748"}
                      label={"ვეგანური"}
                    />
                  )}
                  {index === 3 && (
                    <ReusableBadge
                      iconSrc={truckIcon}
                      bgColor={"#3366FF"}
                      borderColor={"#9DB5FF"}
                      label={"უფასო მიწოდება"}
                    />
                  )}
                  {index === 2 && (
                    <ReusableBadge
                      iconSrc={clockIcon}
                      bgColor={"#FFD000"}
                      borderColor={"#FFD000"}
                      hoverBorderColor={"#E4AA16"}
                      hoverBgColor={"#D8A219"}
                      label={"21 ოქტ - 30 ოქტ"}
                    />
                  )}
                </div>
              </div>

              <div className="overflow-hidden rounded-md">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={378}
                  height={296}
                  style={{ objectFit: "cover", height: "296px" }}
                  className="w-full transition-transform duration-300 hover:scale-150 hover:origin-top" // Adjust scale and set origin to top
                />
              </div>
              <div className="flex flex-col mt-[16px]">
                <h3 className="text-[20px] leading-[28px] text-[#101840] font-bold overflow-hidden text-ellipsis break-all line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center mt-[8px] ">
                  <span className="text-[#101840] font-bold text-[24px] leading-[32px]">
                    {product.price}
                  </span>
                  <span className="line-through text-[#8F95B2] text-[20px] ml-[8px]">
                    {product.originalPrice}
                  </span>
                </div>
                <div className="flex mt-[16px] items-center">
                  {!counts[index] ? (
                    <button
                      onClick={() => setCounts(1)}
                      className="flex justify-center items-center p-[12px] flex-1 text-[16px] mr-[12px] leading-[24px] bg-[#8255E3] hover:bg-[#7143D1] text-white rounded-lg font-medium"
                    >
                      <Image
                        src={shoppingCartIcon}
                        style={{
                          outline: "none",
                          height: "20px",
                          width: "20px",
                        }}
                        alt="cart"
                        width={20}
                        height={20}
                      />
                      <div className="ml-[8px]">კალათაში დამატება</div>
                    </button>
                  ) : (
                    <div className="flex-1 items-center justify-between flex text-[16px] mr-[12px] leading-[24px] overflow-hidden border-solid border-[1px] border-[#1B1D201A] text-white rounded-[8px] font-medium">
                      <button
                        onClick={() => handleCountChange(index, -1)}
                        className="bg-[#1B1D2008] cursor-pointer hover:bg-[#1B1D201F] p-[14px] rounded-tl-[7px] rounded-bl-[7px]"
                      >
                        <MinusIcon />
                      </button>
                      <div className="text-[#101840] text-[16px] leading-[24px]">
                        {counts[index]} შეკვრა
                      </div>
                      <button
                        onClick={() => handleCountChange(index, 1)}
                        disabled={counts[index] === 10}
                        className={`bg-[#1B1D2008] cursor-pointer hover:bg-[#1B1D201F] p-[14px] rounded-tr-[7px] rounded-br-[7px] ${counts[index] === 10 ? "opacity-50" : ""}`}
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  )}
                  <div
                    onClick={() => setFilled((prevState) => !prevState)}
                    className="p-[11px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] hover:bg-[#1B1D2008]"
                  >
                    {filled ? (
                      <Image
                        src={filledHeart}
                        style={{
                          outline: "none",
                          height: "24px",
                          width: "24px",
                        }}
                        alt="heart"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={heartIcon}
                        style={{
                          outline: "none",
                          height: "24px",
                          width: "24px",
                        }}
                        alt="heart"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default WeekSales;
