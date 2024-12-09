import React from "react";
import { IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
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
  return (
    <div className="flex items-center cursor-pointer justify-between p-[15px] hover:bg-[#1B1D2008] active:bg-[#1B1D200F] border-b-solid border-b-[1px] border-b-[#1B1D201A] transition duration-200">
      <div className="flex items-center">
        <div className="pr-[16px]">
          <img
            src={image}
            alt="location"
            className="w-[132px] h-[80px] object-cover rounded-md"
          />
        </div>
        <div className="w-[374px] pl-[16px]">
          <span className="text-[#101840] pl-[48px]">{city}</span>
        </div>
        <div className="w-[374px] pl-[16px]">
          <span className="text-[#101840] pl-[48px]">{district}</span>
        </div>
        <div className="w-[374px] pl-[16px]">
          <span className="text-[#101840] pl-[48px]">{address}</span>
        </div>
        <div className="w-[184px] pl-[16px] flex flex-col">
          <span className="text-[14px] leading-[22px] text-[#101840]">
            ორშაბათი - კვირა
          </span>
          <div className="flex items-center gap-[5px]">
            <div className="w-[9.75px] h-[9.75px] bg-[#01B26E] rounded-[50%]" />
            <span className="text-[#101840]">08:30 - 23:45</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mr-[20px] rounded-md w-[40px] h-[40px] hover:bg-[#1B1D200F]">
        <Image
          src={phoneIcon}
          alt="phone"
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="flex justify-center items-center w-[40px] rounded-md h-[40px] hover:bg-[#1B1D200F]">
        <Image
          src={locationIcon}
          alt="phone"
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
        />
      </div>
    </div>
  );
};

export default LocationCard;
