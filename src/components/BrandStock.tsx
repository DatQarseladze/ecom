import Image from "next/image";
import React from "react";
import { Box, Button } from "@mui/material";
import productImage from "../assets/images/product-image.png";
import caretRight from "../assets/images/caretright.svg";

const RightArrow = () => {
  return (
    <svg
      width="9"
      height="16.5"
      viewBox="0 0 9 16.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.42292 8.39779L1.77292 15.0478C1.71226 15.1085 1.64264 15.1551 1.56698 15.1859C1.49132 15.2167 1.41017 15.2316 1.32853 15.2316C1.24688 15.2316 1.16573 15.2167 1.09007 15.1859C1.01441 15.1551 0.944786 15.1085 0.884125 15.0478C0.823465 14.9871 0.776826 14.9175 0.746022 14.8418C0.715218 14.7662 0.700317 14.685 0.700317 14.6034C0.700317 14.5218 0.715218 14.4407 0.746022 14.365C0.776826 14.2893 0.823465 14.2197 0.884125 14.159L7.32853 7.71455L0.884125 1.27009C0.738322 1.12429 0.700317 0.905933 0.700317 0.68755C0.700317 0.469166 0.738322 0.250811 0.884125 0.104984C1.02993 -0.040844 1.24828 -0.07885 1.46666 -0.07885C1.68504 -0.07885 1.90339 -0.040844 2.04922 0.104984L8.42292 6.47868C8.48358 6.53934 8.53022 6.60896 8.56103 6.68462C8.59184 6.76028 8.60673 6.84144 8.60673 6.92308C8.60673 7.00472 8.59184 7.08588 8.56103 7.16154C8.53022 7.2372 8.48358 7.30682 8.42292 7.36749Z"
        fill="#fff"
      />
    </svg>
  );
};

const PromotionBanner = () => {
  return (
    <Box
      className="xl:px-[168px]  bg-[#EBE8FD] rounded-lg flex flex-row lg:flex-row items-center"
      sx={{ height: "652px" }}
    >
      <div className=" lg:w-1/2 flex flex-col px-auto justify-center text-center lg:text-left">
        <div className="rounded-[8px] py-[2px] border-[2px] border-[#8255E3]  mb-[10px] px-[8px] max-w-max">
          <p className="text-[#8255E3] text-[20px] leading-[28px] font-bold m-none">
            -50%-ზე ფასდაკლება
          </p>
        </div>

        <h2 className="text-[#101840] text-[56px] leading-[67.2px] font-bold leading-[44px] mb-[8px]">
          განეწყვე შემოდგომისთვის PYTORELAX-სთან ერთად
        </h2>
        <p className="text-[#474D66] text-[20px] leading-[30px] mb-[24px]">
          გვეწვიე IMPEX-ის ქსელში, მოიმარაგე პრემიუმ ბრენდის -{" "}
          <span className="font-bold">PYTORELAX</span>-ის თავის მოვლის
          საშუალებები დიდი ფასდაკლებით
        </p>
        <button className=" flex items-center text-[16px] max-w-max text-[#fff] text-[20px] leading-[28px] rounded-[8px] p-[16px] bg-[#8255E3] hover:bg-[#503095] rounded-[8px]">
          გაიგე მეტი
          <div className="ml-[16.25px]">
            <Image src={caretRight} alt="caret right" width={24} height={24} />
          </div>
        </button>
      </div>

      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <Image
          src={productImage}
          alt="Promotion Product"
          width={720}
          height={596}
          style={{ objectFit: "contain" }}
          className="rounded-lg shadow-md"
        />
      </div>
    </Box>
  );
};

export default PromotionBanner;
