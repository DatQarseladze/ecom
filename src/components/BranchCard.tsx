import React, { useState, useEffect, useRef } from "react";
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
  hideImage?: boolean;
};

const LocationCard: React.FC<LocationCardProps> = ({
  image,
  city,
  district,
  address,
  time,
  isOpen,
  onPhoneClick,
  hideImage = false,
}) => {
  const [activeIcon, setActiveIcon] = useState<"phone" | "location" | null>(
    null
  );
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const phoneIconRef = useRef<HTMLDivElement>(null);

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup((prev) => !prev);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex w-full items-center cursor-pointer justify-between hover:bg-[#1B1D2008] border-b-solid border-b-[1px] border-b-[#1B1D201A] transition duration-200 ${
        activeIcon === null ? "active:bg-[#1B1D200F]" : ""
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-1 items-center w-full pt-[15px] pb-[15px] relative">
        {!hideImage && (
          <div className="max-2xl:min-w-[164px] px-[16px] flex-grow">
            <img
              src={image}
              alt="location"
              className="w-[132px] h-[80px] object-cover rounded-md"
            />
          </div>
        )}
        <div
          className={`${hideImage ? "" : "max-2xl:min-w-[374px]"} pl-[16px] flex-grow`}
        >
          <span className="text-[#101840]">{city}</span>
        </div>
        <div
          className={`${hideImage ? "" : "max-2xl:min-w-[374px]"} pl-[16px] flex-grow`}
        >
          <span className="text-[#101840] pl-[48px]">{district}</span>
        </div>
        <div
          className={`${hideImage ? "" : "max-2xl:min-w-[374px]"} pl-[16px] flex-grow`}
        >
          <span className="text-[#101840] pl-[48px]">{address}</span>
        </div>
        <div
          className={`${hideImage ? "" : "max-2xl:min-w-[184px]"} pl-[16px] flex flex-col flex-grow`}
        >
          <span className="text-[14px] leading-[22px] text-[#101840]">
            ორშაბათი - კვირა
          </span>
          <div className="flex items-center gap-[5px]">
            <div className="w-[9.75px] h-[9.75px] bg-[#01B26E] rounded-[50%]" />
            <span className="text-[#101840]">08:30 - 23:45</span>
          </div>
        </div>

        {/* Phone Icon */}
        <div className="relative min-w-[52px]" ref={phoneIconRef}>
          <div
            className="flex justify-center items-center cursor-pointer rounded-md w-[40px] h-[40px] hover:bg-[#1B1D2008] active:bg-[#1B1D200F]"
            onClick={handlePhoneClick}
          >
            <Image
              src={phoneIcon}
              alt="phone"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </div>

          {showPopup && (
            <div
              ref={popupRef}
              className="absolute top-[0px] left-[50%] transform -translate-x-[50%] bg-white shadow-lg rounded-lg px-[15px] py-[20px] z-[9999] whitespace-nowrap overflow-visible will-change-transform"
              style={{
                pointerEvents: "auto", // Ensures interaction works properly
                position: "fixed",
                top: `${(phoneIconRef?.current?.getBoundingClientRect()?.top || 0) + 45}px`,
                left: `${(phoneIconRef.current?.getBoundingClientRect().left || 0) - 25}px`,
              }}
            >
              <span
                onClick={() => {
                  navigator.clipboard.writeText("0322 123 123");
                  setShowPopup(false);
                }}
                className="text-[#101840] font-medium"
              >
                0322 123 123
              </span>
            </div>
          )}
        </div>

        {/* Location Icon */}
        <div className="min-w-[60px]">
          <div className="flex justify-center items-center cursor-pointer w-[40px] rounded-md h-[40px] hover:bg-[#1B1D2008] active:bg-[#1B1D200F]">
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
