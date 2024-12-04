"use client";
import { useState } from "react";

const Branches = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="xl:px-[168px] web-xl:px-[80px] bg-[#FBFBFD]">
      <h1 className="pt-[80px] pb-[48px] text-[40px] leading-[48px] text-center font-bold">
        ფილიალები
      </h1>
    </div>
  );
};

export default Branches;
