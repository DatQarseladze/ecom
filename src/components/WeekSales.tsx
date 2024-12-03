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
import shoppingCartIcon from "../assets/images/shopping-cart.svg";
import wastingTimeIcon from "../assets/images/wasting-time.svg";
import filledHeart from "../assets/images/filled-heart.svg";
import ReusableBadge from "./ReusableBadge";
import { weekProducts } from "./constants";
import MinusIcon from "@/src/icons/MinusIcon";
import PlusIcon from "@/src/icons/PlusIcon";
import HeartIcon from "@/src/icons/HeartIcon";
import Card from "./Card";

const WeekSales = () => {
  const [counts, setCounts] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseDown = (index, event) => {
    if (event.target.closest("button")) return;
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
    <div className="xl:mx-[168px] web-xl:mx-[80px] bg-[#FBFBFD] px-auto pt-[64px] pb-[80px]">
      <div className="py-[4px] flex items-center justify-between mb-[48px]">
        <h2 className="text-[24px] leading-[32px] text-[#474D66] font-bold">
          კვირის ფასდაკლებები
        </h2>
        <div className="flex items-center gap-[16px]">
          <h3 className="cursor-pointer text-[16px] text-[#101840] leading-[24px] border-b-[1px] border-transparent hover:border-[#474D66] hover:text-[#474D66]">
            ყველას ნახვა
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[8px]">
        {weekProducts.map((product, index) => (
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

export default WeekSales;
