import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import caretRight from "../assets/images/caret-right.svg";
import caretLeft from "../assets/images/caret-left.svg";
import filledHeart from "../assets/images/filled-heart.svg";
import {
  products,
  heartIcon,
  leafIcon,
  starIcon,
  clockIcon,
  organIcon,
  ratingIcon,
  bestsellerIcon,
  dotIcon,
  voltIcon,
  truckIcon,
  wastingTimeIcon,
} from "./constants";

import ReusableBadge from "./ReusableBadge";

const ProductList = () => {
  return (
    <div className="xl:mx-[168px] bg-[#FBFBFD] px-auto pt-[64px] pb-[80px]">
      <div className="py-[4px] flex items-center justify-between mb-[48px]">
        <h2 className="text-[24px] leading-[32px] text-[#474D66] font-bold">
          ტოპ გაყიდვადი
        </h2>
        <div className="flex items-center gap-[16px]">
          <h3 className="text-[16px] text-[#101840] leading-[24px]">
            ყველას ნახვა
          </h3>
          <div className="flex items-center">
            <div className="cursor-pointer border-[1px] p-[20px] border-[#1B1D2008] flex items-center justify-center rounded-[8px]">
              <Image src={caretLeft} width={20} height={20} alt="caret-left" />
            </div>
            <div className="cursor-pointer border-[1px] p-[20px] border-[#1B1D201A] flex items-center justify-center rounded-[8px]">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => {
          const [filled, setFilled] = useState(false);
          return (
            <Box
              key={product.id}
              className="rounded-lg p-[24px] cursor-pointer shadow-sm relative bg-[#FFFFFF]"
              sx={{
                "&:hover": { boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
              }}
            >
              <div className="flex items-center justify-between w-full">
                <div className="bg-[#8255E3] text-white rounded-lg py-[2px] px-[8px] text-[20px] leading-[28px] font-bold">
                  {product.discount}
                </div>
                <div className="flex space-x-2">
                  {index === 0 ? (
                    <ReusableBadge
                      iconSrc={dotIcon}
                      bgColor={"#219653"}
                      borderColor={"#A3E6CD"}
                      label={"მხოლოდ ონლაინ"}
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
                      iconSrc={organIcon}
                      bgColor={"#01B21E"}
                      borderColor={"#A3E6CD"}
                      label={"ორგანული"}
                    />
                  ) : (
                    <ReusableBadge
                      iconSrc={starIcon}
                      bgColor={"#FFD000"}
                      borderColor={"#ffd000"}
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
                      iconSrc={clockIcon}
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
                      borderColor={"#ffd000"}
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
              <div className="flex flex-col">
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
                <div className="flex mt-[16px] items-center py-[4px]">
                  <button className="p-[12px] flex-1 text-[16px] mr-[12px] leading-[24px] bg-[#8255E3] text-white rounded-lg font-medium">
                    კალათაში დამატება
                  </button>
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

export default ProductList;
