import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import starTag from "../assets/images/star_tag.svg";

const InfoCard = ({ title, description }) => {
  return (
    <div className="rounded-[8px] px-[24px] pt-[24px] pb-[76px] border-none bg-[#FBFBFD] transition duration-200">
      <div>
        <div className="flex items-center justify-center mb-[24px]">
          <Image src={starTag} width={32} height={32} alt="start" />
        </div>
        <h1 className="text-center text-[#101828] text-[20px] leading-[28px] font-bold">
          {title}
        </h1>
        <h2 className="text-center text-[#475467] mt-[8px] text-[16px] leading-[24px]">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default InfoCard;
