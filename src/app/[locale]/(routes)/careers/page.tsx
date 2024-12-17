"use client";
import { useState } from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import Image from "next/image";

import ProductCard from "@/src/components/ProductCard";
import productImg from "../../../../assets/images/careers1.svg";
import careersImg from "../../../../assets/images/careers2.svg";

import productImg1 from "../../../../assets/images/zhana.jpeg";
import productImg2 from "../../../../assets/images/zhana2.jpeg";
import productImg3 from "../../../../assets/images/zhana3.jpeg";
import grayLocation from "../../../../assets/images/gray_location.svg";
import grayCalendar from "../../../../assets/images/gray_calendar.svg";
import grayClock from "../../../../assets/images/gray_clock.svg";
import rightPurple from "../../../../assets/images/right_purple.svg";
import saleIcon from "../../../../assets/images/sale.svg";
import caretRight from "../../../../assets/images/caret-right.svg";
import rightArrow from "../../../../assets/images/right-arrow.svg";
// import caretLeft from '../../../../assets/images/caret-left.svg";
import caretLeft from "../../../../assets/images/caret-left.svg";
import InfoCard from "@/src/components/InfoCard";
import { useRouter } from "next/navigation";

const cardData = [
  {
    title: "კონკურენტული ხელფასი",
    description:
      "ჩვენ ვაფასებთ ჩვენი გუნდის წევრებს და ვთავაზობთ კონკურენტულ ხელფასს გამოცდილების შესაბამისად.",
  },
  {
    title: "ჯანმრთელობის დაზღვევა",
    description:
      "ჩვენ ვაფასებთ ჩვენი გუნდის წევრებს და ვთავაზობთ კონკურენტულ ხელფასს გამოცდილების შესაბამისად.",
  },
  {
    title: "პროფესიული განვითარების შესაძლებლობები",
    description:
      "ჩვენ ვაფასებთ ჩვენი გუნდის წევრებს და ვთავაზობთ კონკურენტულ ხელფასს გამოცდილების შესაბამისად.",
  },
  {
    title: "სამუშაო-ცხოვრების ბალანსი",
    description:
      "ჩვენ ვაფასებთ ჩვენი გუნდის წევრებს და ვთავაზობთ კონკურენტულ ხელფასს გამოცდილების შესაბამისად.",
  },
];

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
  const route = useRouter();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Update active tab on click
  };

  return (
    <div>
      <div className="2xl:mx-[168px] max-2xl:mx-[168px]">
        <div className="pt-[96px] pb-[64px] flex gap-[64px]">
          <div className="flex justify-center flex-col">
            <h1 className="text-[40px] font-bold leading-[48px] text-[#101840]">
              კარიერა იმპექსში
            </h1>
            <h3 className="text-[20px] font-bold leading-[28px] text-[#101840] mt-[8px] mb-[24px]">
              გახდი ჩვენი გუნდის წევრი
            </h3>
            <h4 className="text-[16px] leading-[24px] text-[#474D66]">
              ჩვენ ვთვლით, რომ თანამშრომლები ყველაზე მნიშვნელოვანი აქტივია.
              ვქმნით თანაბარ შესაძლებლობებს, სადაც სხვადასხვა კულტურისა და
              ღირებულებების მქონე ადამიანებისთვის მუშაობა საინტერესო და
              გამოწვევებით სავსეა. <br />
              ჩვენ ერთად ვსწავლობთ, ვმოქმედებთ და ვვითარდებით. არასდროს
              ვკმაყოფილდებით მიღწეული შედეგებით და ყოველთვის ვცდილობთ ვიყოთ
              იმაზე უკეთესი, ვიდრე დღეს ვართ. ამაში მუდმივი სწავლა, ერთმანეთის
              მხარდაჭერა და მიზნის მიღწევაზე ორიენტირებული გარემო გვეხმარება.
            </h4>
            <button
              onClick={() => route.push("/careers/list")}
              className="py-[14px] pr-[15px] pl-[23px] hover:bg-[#EDE3FF] pr-[12px] items-center flex mt-[24px] text-[20px] leading-[28px] text-[#101840] bg-[#F8F4FF] rounded-[8px] gap-[8px] self-start"
            >
              იხილეთ ვაკანსიები
              <Image
                src={rightArrow}
                width={24}
                className="ml-[2px]"
                height={24}
                alt="see careers icon"
              />
            </button>
          </div>

          <div className="">
            <Image
              src={productImg}
              alt={"product"}
              className="rounded-[8px] max-w-[unset]"
              width={792}
              height={560}
            />
          </div>
        </div>
        <div className="pt-[64px] pb-[96px] flex gap-[64px]">
          <div className="">
            <Image
              src={careersImg}
              alt={"product"}
              className="rounded-[8px] max-w-[unset]"
              width={792}
              height={560}
            />
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="text-[32px] font-bold leading-[40px] text-[#101840]">
              რატომ უნდა იმუშაოთ ჩვენთან
            </h1>

            <h4 className="text-[16px] leading-[24px] mt-[16px] text-[#474D66]">
              ჩვენ ვთვლით, რომ თანამშრომლები ყველაზე მნიშვნელოვანი აქტივია.
              ვქმნით თანაბარ შესაძლებლობებს, სადაც სხვადასხვა კულტურისა და
              ღირებულებების მქონე ადამიანებისთვის მუშაობა საინტერესო და
              გამოწვევებით სავსეა. <br />
              ჩვენ ერთად ვსწავლობთ, ვმოქმედებთ და ვვითარდებით. არასდროს
              ვკმაყოფილდებით მიღწეული შედეგებით და ყოველთვის ვცდილობთ ვიყოთ
              იმაზე უკეთესი, ვიდრე დღეს ვართ. ამაში მუდმივი სწავლა, ერთმანეთის
              მხარდაჭერა და მიზნის მიღწევაზე ორიენტირებული გარემო გვეხმარება.
            </h4>
          </div>
        </div>
        <div className="py-[96px]">
          <h1 className="text-[32px] text-center leading-[40px] text-[#101840] font-bold mb-[16px]">
            ჩვენთან მუშაობის უპირატესობები
          </h1>
          <h3 className="text-[16px] text-center leading-[24px] text-[#474D66]">
            ჩვენთან იპოვი შენთვის სასურველ ვაკანსიას. შემოგვიერთდი!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[64px]">
            {cardData.map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
