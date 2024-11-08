import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import productImg1 from "../assets/images/zhana.jpeg";
import productImg2 from "../assets/images/zhana2.jpeg";
import productImg3 from "../assets/images/zhana3.jpeg";
import caretRight from "../assets/images/caret-right.svg";
import grayClock from "../assets/images/gray_clock.svg";
import grayLocation from "../assets/images/gray_location.svg";
import grayCalendar from "../assets/images/gray_calendar.svg";
import caretLeft from "../assets/images/caret-left.svg";

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
  return (
    <div className=" bg-[#fff]">
      <div className="xl:mx-[168px] px-auto pt-[64px] pb-[80px]">
        <div className="py-[4px] flex items-center justify-between mb-[48px]">
          <h2 className="text-[24px] leading-[32px] text-[#474D66] font-bold">
            ივენთები
          </h2>
          <div className="flex items-center gap-[16px]">
            <h3 className="text-[16px] text-[#101840] leading-[24px]">
              ყველას ნახვა
            </h3>
            <div className="flex items-center">
              <div className="cursor-pointer border-[1px] p-[9px] border-[#1B1D2008] flex items-center justify-center rounded-[8px]">
                <Image
                  src={caretLeft}
                  width={20}
                  height={20}
                  alt="caret-left"
                />
              </div>
              <div className="cursor-pointer border-[1px] p-[9px] border-[#1B1D201A] flex items-center justify-center rounded-[8px]">
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
          {products.map((product, index) => {
            const [filled, setFilled] = useState(false);
            return (
              <Box
                key={product.id}
                className="cursor-pointer rounded-lg rounded-[8px] cursor-pointer shadow-sm relative bg-[#FFFFFF]"
                sx={{
                  "&:hover": { boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
                }}
              >
                <div className="absolute border-[2px] border-solid border-[#7143D1] top-[24px] px-[6px] bg-[#7143D1] left-[24px] flex items-center flex-col rounded-[8px] ">
                  <div className="text-white text-[32px] font-bold leading-[28px] pt-[8px] pb-[4px] font-bold">
                    24
                  </div>
                  <div className=" text-white rounded-lg font-bold text-[20px] pb-[8px] leading-[28px] font-bold">
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
                        style={{
                          objectFit: "cover",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      <div className="text-[#696F8C] text-[16px] leading-[24px]   ">
                        თბილისი
                      </div>
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <Image
                        src={grayCalendar}
                        alt={"gray calendar"}
                        width={20}
                        height={20}
                        style={{
                          objectFit: "cover",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      <div className="text-[#696F8C] text-[16px] leading-[24px]   ">
                        24 ოქტომბერი
                      </div>
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <Image
                        src={grayClock}
                        alt={"gray clock"}
                        width={20}
                        height={20}
                        style={{
                          objectFit: "cover",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      <div className="text-[#696F8C] text-[16px] leading-[24px]   ">
                        19:00
                      </div>
                    </div>
                  </div>
                  {/* Product Title with Ellipsis */}
                  <h3 className="text-[20px] leading-[28px] text-[#101840] font-bold overflow-hidden text-ellipsis break-all line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center mt-[8px] ">
                    <span className="text-[#44546F] text-[16px] leading-[24px]">
                      გლობალური პრემიუმ ბრენდის,{" "}
                      <span className="text-[#474D66]">𝐊𝐎𝐑𝐑𝐄𝐒</span>
                      -ის ივენთი ექსკლუზიურად 𝐈𝐌𝐏𝐄𝐗-ში
                    </span>
                  </div>
                  <div className="flex mt-[24px] items-center gap-[8px]">
                    <button className="p-[12px] w-1/2 text-[16px] leading-[24px] bg-[#8255E3] text-white rounded-lg font-medium">
                      რეგისტრაცია
                    </button>
                    <button
                      onClick={() => setFilled((prevState) => !prevState)}
                      className="p-[11px] text-[#101840]  text-center w-1/2 border-[1px] border-solid border-[#1B1D201A] rounded-[8px] hover:bg-[#1B1D2008]"
                    >
                      დეტალურად
                    </button>
                  </div>
                </div>
              </Box>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
