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
    <div className="xl:mx-[168px] web-xl:mx-[80px]">
      <div className="pt-[80px] pb-[24px]">
        <h1 className="text-[40px] leading-[48px] text-[#101840] font-bold text-center">
          ბრენდები
        </h1>
      </div>
    </div>
  );
};

export default Events;
