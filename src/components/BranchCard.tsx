import React, { useState } from "react";
import { IconButton } from "@mui/material";
import phoneIcon from "@/src/assets/images/phone-card.svg";
import locationIcon from "@/src/assets/images/location.svg";
import Image from "next/image";

type LocationCardProps = {
  image: string;
  city: string;
  district: string;
  address: string;
  time: string;
  isOpen: boolean;
  onPhoneClick: () => void;
};

const LocationCard: React.FC<LocationCardProps> = ({
  image,
  city,
  district,
  address,
  time,
  isOpen,
  onPhoneClick,
}) => {
  const [activeIcon, setActiveIcon] = useState<"phone" | "location" | null>(
    null
  );

  const handleMouseDownPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIcon("phone");
  };

  const handleMouseUpPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIcon(null);
    onPhoneClick();
  };

  const handleMouseDownLocation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIcon("location");
  };

  const handleMouseUpLocation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIcon(null);
  };

  return (
    <div
      className={`flex w-full items-center cursor-pointer justify-between pt-[15px] pb-[15px] hover:bg-[#1B1D2008] border-b-solid border-b-[1px] border-b-[#1B1D201A] transition duration-200 ${activeIcon === null ? "active:bg-[#1B1D200F]" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-1 items-center w-full">
        <div className="2xl:min-w-[164px] px-[16px] flex-grow">
          <img
            src={image}
            alt="location"
            className="w-[132px] h-[80px] object-cover rounded-md"
          />
        </div>
        <div className="2xl:min-w-[374px] pl-[16px] flex-grow">
          <span className="text-[#101840] pl-[48px]">{city}</span>
        </div>
        <div className="2xl:min-w-[374px] pl-[16px] flex-grow">
          <span className="text-[#101840] pl-[48px]">{district}</span>
        </div>
        <div className="2xl:min-w-[374px] pl-[16px] flex-grow">
          <span className="text-[#101840] pl-[48px]">{address}</span>
        </div>
        <div className="2xl:min-w-[184px] pl-[16px] flex flex-col flex-grow">
          <span className="text-[14px] leading-[22px] text-[#101840]">
            ორშაბათი - კვირა
          </span>
          <div className="flex items-center gap-[5px]">
            <div className="w-[9.75px] h-[9.75px] bg-[#01B26E] rounded-[50%]" />
            <span className="text-[#101840]">08:30 - 23:45</span>
          </div>
        </div>

        {/* Phone Icon */}
        <div className={`2xl:min-w-[52px]`}>
          <div
            className="flex justify-center items-center cursor-pointer rounded-md w-[40px] h-[40px] hover:bg-[#1B1D2008] active:bg-[#1B1D200F]"
            onMouseDown={handleMouseDownPhone}
            onMouseUp={handleMouseUpPhone}
          >
            <Image
              src={phoneIcon}
              alt="phone"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>

        <div className={`2xl:min-w-[60px]`}>
          <div
            className="flex justify-center items-center cursor-pointer w-[40px] rounded-md h-[40px] hover:bg-[#1B1D2008] active:bg-[#1B1D200F]"
            onMouseDown={handleMouseDownLocation}
            onMouseUp={handleMouseUpLocation}
          >
            <Image
              src={locationIcon}
              alt="location"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
