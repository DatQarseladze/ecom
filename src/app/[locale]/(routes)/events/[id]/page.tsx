"use client";
import { useState } from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import Image from "next/image";

import ProductCard from "@/src/components/ProductCard";
import productImg from "../../../../../assets/images/event1.jpeg";

import productImg1 from "../../../../../assets/images/zhana.jpeg";
import productImg2 from "../../../../../assets/images/zhana2.jpeg";
import productImg3 from "../../../../../assets/images/zhana3.jpeg";
import grayLocation from "../../../../../assets/images/gray_location.svg";
import grayCalendar from "../../../../../assets/images/gray_calendar.svg";
import grayClock from "../../../../../assets/images/gray_clock.svg";
import rightPurple from "../../../../../assets/images/right_purple.svg";
import saleIcon from "../../../../../assets/images/sale.svg";
import caretRight from "../../../../../assets/images/caret-right.svg";
import caretLeft from "../../../../../assets/images/caret-left.svg";

import PaginationComponent from "@/src/components/Pagination";

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

const Events = () => {
  const [activeTab, setActiveTab] = useState<string>("ongoing"); // Initial active tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Update active tab on click
  };

  return (
    <div>
      <div className="xl:mx-[168px] web-xl:mx-[80px] pt-[48px]">
        <Box display="flex" alignItems="center">
          <div className="text-[14px] text-[#8255E3] leading-[22px]">
            მთავარი
          </div>
          <Typography color="#1B1D203D" mx={'8px'}>
            /
          </Typography>
          <div className="text-[14px] text-[#8255E3] leading-[22px]">
            ივენთები
          </div>
          <Typography mx={'8px'} color="#1B1D203D">/</Typography>
          <div className="text-[#696F8C] text-[14px] leading-[22px]">
            გლობალური პრემიუმ ბრენდის, <span className="">KORRESS</span>-ის
            ტესტირების დღეები IMPEX-ში გრძელდება!
          </div>
        </Box>
        <div className="mt-[40px] mb-[48px] flex gap-[48px]">
          <div className="relative">
            <Image
              src={productImg}
              alt={"product"}
              className="rounded-[16px]"
              width={512}
              height={512}
            />
            <div className="absolute w-[58px] border-[1px] border-solid border-[#9A6DF9] top-[24px] px-[7px] bg-[#754FD1] left-[24px] flex items-center flex-col rounded-[8px] ">
              <div className="text-white text-[32px] font-bold leading-[28px] pt-[9px] pb-[4px]">
                24
              </div>
              <div className=" text-white rounded-lg font-bold text-[20px] pb-[9px] leading-[28px]">
                ოქტ
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[40px] font-bold leading-[48px] text-[#101840]">
              გლობალური პრემიუმ ბრენდის, KORRESS-ის ტესტირების დღეები IMPEX-ში
              გრძელდება!
            </h1>
            <div className="flex my-[24px] mb-[] flex-col gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <Image
                  src={grayLocation}
                  alt={"gray location"}
                  width={20}
                  height={20}
                />
                <div className="text-[#44546F] text-[16px]">
                  თბილისი, ჰუალინგ პლაზა
                </div>
                <div className="flex cursor-pointer ml-[2px] items-center text-[#8255E3]">
                  მიმართულების ჩვენება
                  <Image
                    src={rightPurple}
                    alt={"right arrow"}
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <div className="flex items-center gap-[4px]">
                <Image
                  src={grayCalendar}
                  alt={"gray calendar"}
                  width={20}
                  height={20}
                />
                <div className="text-[#44546F] text-[16px]">24 ოქტომბერი</div>
              </div>
              <div className="flex items-center gap-[4px]">
                <Image
                  src={grayClock}
                  alt={"gray clock"}
                  width={20}
                  height={20}
                />
                <div className="text-[#44546F] text-[16px]">
                  19:00 - 22:00 საათი
                </div>
              </div>
              <div className="flex items-center gap-[4px]">
                <Image
                  src={saleIcon}
                  alt={"sale clock"}
                  width={20}
                  height={20}
                />
                <div className="text-[#44546F] text-[16px]">
                  40₾ | 355 ზე ქულა
                </div>
              </div>
            </div>
            <div className="text-[16px] mb-[4px] text-[#474D66] ">
              24 ოქტომბერს, ჰუალინგ პლაზაში ჩატარდება კავკასიაში ყველაზე დიდი
              მე-5 საერთაშორისო გამოფენა, რომელიც ყოველწლიურად იმართება
              "საქართველოს სილამაზის დილერთა ასოციაციის" ორგანიზებით. წელს
              გამოფენას საიუბილეო თარიღი აქვს.
            </div>
            <div className="text-[#8255E3] cursor-pointer mb-[24px]">
              იხილე სრული აღწერა
            </div>
            <button className="p-[12px] w-[156px] text-[16px] bg-[#8255E3] hover:bg-[#503095] text-white rounded-lg">
              რეგისტრაცია
            </button>
          </div>
        </div>
        <div className="py-[48px]">
          <h1 className="text-[32px] leading-[40px] font-bold mb-[24px]">
            აღწერა
          </h1>
          <div className="flex flex-col gap-[24px]">
            <div className="text-[#474D66]">
              24 ოქტომბერს, ჰუალინგ პლაზაში ჩატარდება კავკასიაში ყველაზე დიდი
              მე-5 საერთაშორისო გამოფენა, რომელიც ყოველწლიურად იმართება
              "საქართველოს სილამაზის დილერთა ასოციაციის" ორგანიზებით. წელს
              გამოფენას საიუბილეო თარიღი აქვს. <br />
              სივრცე სხვადასხვა სილამაზის კომპანიების პროდუქციას დაეთმობა, დღის
              განმავლობაში, ვიზიტორებს მრავალი სახეობის პროდუქციის ერთ სივრცეში
              დათვალიერება შეეძლებათ. ასევე, ვიზიტორებს ექნებათ საშუალება
              დაესწრონ სხვადასხვა მასტერ-კლასებსა და ლექციებს.
            </div>
            <div className="text-[#474D66]">
              24 ოქტომბერს, ჰუალინგ პლაზაში ჩატარდება კავკასიაში ყველაზე დიდი
              მე-5 საერთაშორისო გამოფენა, რომელიც ყოველწლიურად იმართება
              "საქართველოს სილამაზის დილერთა ასოციაციის" ორგანიზებით. წელს
              გამოფენას საიუბილეო თარიღი აქვს. <br />
              სივრცე სხვადასხვა სილამაზის კომპანიების პროდუქციას დაეთმობა, დღის
              განმავლობაში, ვიზიტორებს მრავალი სახეობის პროდუქციის ერთ სივრცეში
              დათვალიერება შეეძლებათ. ასევე, ვიზიტორებს ექნებათ საშუალება
              დაესწრონ სხვადასხვა მასტერ-კლასებსა და ლექციებს.
            </div>
            <div className="text-[#474D66]">
              24 ოქტომბერს, ჰუალინგ პლაზაში ჩატარდება კავკასიაში ყველაზე დიდი
              მე-5 საერთაშორისო გამოფენა, რომელიც ყოველწლიურად იმართება
              "საქართველოს სილამაზის დილერთა ასოციაციის" ორგანიზებით. წელს
              გამოფენას საიუბილეო თარიღი აქვს. <br />
              სივრცე სხვადასხვა სილამაზის კომპანიების პროდუქციას დაეთმობა, დღის
              განმავლობაში, ვიზიტორებს მრავალი სახეობის პროდუქციის ერთ სივრცეში
              დათვალიერება შეეძლებათ. ასევე, ვიზიტორებს ექნებათ საშუალება
              დაესწრონ სხვადასხვა მასტერ-კლასებსა და ლექციებს.
            </div>
          </div>
        </div>
      </div>
      <div className="py-[80px] bg-[#FBFBFD]">
        <div className='xl:mx-[168px] web-xl:mx-[80px]'>
          <div className="justify-between items-center flex mb-[48px]">
            <h1 className="text-[24px] leading-[32px] font-bold text-[#474D66]">
              სხვა ივენთები
            </h1>

            <div className="flex items-center gap-[16px]">
              <h3 className="cursor-pointer text-[16px] text-[#101840] leading-[24px] border-b-[1px] border-transparent hover:border-[#474D66] hover:text-[#474D66]">
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
