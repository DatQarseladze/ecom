"use client";
import Image from "next/image";
import React from "react";
import { Box } from "@mui/material";
import farmonaImg from "../assets/images/farmona.png";
import topicremImg from "../assets/images/topicrem.png";
import soskinImg from "../assets/images/soskin.png";
import kloraneImg from "../assets/images/klorane.png";
import alphanovaImg from "../assets/images/alphanova.png";
import sunkissedImg from "../assets/images/sunkissed.png";
import phytorelaxImg from "../assets/images/phytorelax.png";
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
  return (
    <div className="xl:mx-[168px] mx-auto mt-[48px]">
      <Box
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
                width={148} // Maintain image width
                height={48}
                layout="fixed"
                style={{
                  objectFit: "contain",
                  width: "148px", // Allow image to fit the box
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
