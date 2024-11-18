import React from "react";
import Image from "next/image";
import imageUpRight from "../assets/images/arrow_up_right.svg";

import grayClock from "../assets/images/gray_clock.svg";
import grayLocation from "../assets/images/gray_location.svg";
import homeIcon from "../assets/images/home.svg";

const JobPost = ({
  title,
  dates,
  subTitle,
  location,
  company,
  employmentType,
  link,
}) => {
  return (
    <div className="cursor-pointer w-full border border-[#1B1D201A] rounded-[8px] p-[24px] pt-[23px] pb-[31px] hover:bg-[#1B1D2008] active:bg-[#1B1D200F]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[7px]">
          <div className="bg-[#17875D] w-[9.75px] h-[9.75px] rounded-full" />

          <p className="text-[#696F8C]">{dates}</p>
        </div>
        <div className="flex items-center gap-[4px]">
          <a
            href={link}
            className="text-[#8255E3]"
            target="_blank"
            rel="noopener noreferrer"
          >
            გაეცანი ვაკანსიას
          </a>
          <Image
            src={imageUpRight}
            alt="image up right"
            width={18}
            height={18}
          />
        </div>
      </div>
      <h3 className="text-[18px] mt-[16px] leading-[28px] font-bold text-[#101840]">
        {title}
      </h3>
      <h3 className="text-[#474D66] mt-[8px]">{subTitle}</h3>
      <div className="flex gap-[16px] mt-[16px]">
        <div className="flex items-center gap-[4px]">
          <Image
            src={grayLocation}
            alt={"gray location"}
            width={20}
            height={20}
          />
          <div className="text-[#696F8C] text-[16px]">{location}</div>
        </div>
        <div className="flex items-center gap-[4px]">
          <Image src={homeIcon} alt={"home icon"} width={20} height={20} />
          <div className="text-[#696F8C] text-[16px]">{company}</div>
        </div>
        <div className="flex items-center gap-[4px]">
          <Image src={grayClock} alt={"gray clock"} width={20} height={20} />
          <div className="text-[#696F8C] text-[16px]">{employmentType}</div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
