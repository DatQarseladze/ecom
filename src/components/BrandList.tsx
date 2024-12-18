"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import {
  farmonaImg,
  topicremImg,
  soskinImg,
  kloraneImg,
  alphanovaImg,
  sunkissedImg,
  phytorelaxImg,
} from "@/src/components/constants";
import rightIcon from "../assets/images/right.svg";

const brandLogos = [
  { id: 1, name: "Farmona", src: farmonaImg },
  { id: 2, name: "Topicrem", src: topicremImg },
  { id: 3, name: "Soskin", src: soskinImg },
  { id: 4, name: "Klorane", src: kloraneImg },
  { id: 5, name: "Alphanova", src: alphanovaImg },
  { id: 6, name: "Sunkissed", src: sunkissedImg },
  { id: 7, name: "PhytoRelax", src: phytorelaxImg },
  { id: 8, name: "OtherBrand", src: phytorelaxImg },
];

const BrandList = () => {
  const route = useRouter();
  const [isClicked, setIsClicked] = useState<{ [key: number]: boolean }>({});

  const handleMouseDown = (id: number) => {
    setIsClicked((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseUp = (id: number) => {
    setIsClicked((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="2xl:px-[168px] max-2xl:px-[168px] px-auto py-[48px] bg-[#fff]">
      <Box
        className="rounded-[8px]"
        sx={{
          display: "flex",
          width: "100%",
          borderTop: "1px solid #1B1D201A",
          borderBottom: "1px solid #1B1D201A",
          "@media (max-width: 768px)": {
            justifyContent: "center",
          },
          borderLeft: "unset",
          boxSizing: "border-box",
          overflow: "auto",
        }}
      >
        {brandLogos.map((brand, index) => (
          <Box
            key={brand.id}
            onClick={() => route.push("/brands")}

            onMouseDown={() => handleMouseDown(brand.id)}
            onMouseUp={() => handleMouseUp(brand.id)}
            className={` ${isClicked[brand.id] ? "bg-[#1B1D200F]" : "hover:bg-[#1B1D2008]"} `}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderLeft: "1px solid #1B1D201A",
              borderRight: "1px solid #1B1D201A",
              flex: 1,
              padding: "16px",
              boxSizing: "border-box",
              cursor: "pointer",
              filter: "grayscale(100%)",
              transition: "filter 0.3s ease",
              "&:hover": {
                filter: "none",
              },
            }}
          >
            {index === brandLogos.length - 1 ? (
              <div
                className="flex items-center justify-center"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    color: "#172B4D",
                    marginRight: "10px",
                  }}
                >
                  ყველა ბრენდი
                </div>
                <Image
                  src={rightIcon}
                  width={6.75}
                  alt="right icon"
                  height={12.38}
                  className="mr-[5px]"
                />
              </div>
            ) : (
              <Image
                src={brand.src}
                alt={brand.name}
                width={148}
                height={48}
                layout="fixed"
                style={{
                  objectFit: "contain",
                  width: "148px",
                  height: "48px",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default BrandList;
