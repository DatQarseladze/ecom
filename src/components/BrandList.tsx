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
    <div className="container mx-auto px-4 py-2">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          border: "1px solid #1B1D201A",
          "@media (max-width: 768px)": {
            justifyContent: "center", // Center align for small screens
          },
        }}
      >
        {brandLogos.map((brand, index) => (
          <Box
            key={brand.id}
            sx={{
              padding:
                index !== brandLogos.length - 1 ? "16px 27px" : "16px 25px", // Top & bottom: 16px, left & right: 26px
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRight:
                index !== brandLogos.length - 1 ? "1px solid #1B1D201A" : "",
              width: `${100 / brandLogos.length}%`, // Use percentage for equal width
              minWidth: "148px", // Ensure a minimum width for logos
              boxSizing: "border-box", // Include padding in width calculation
              cursor: "pointer",
            }}
          >
            {index === brandLogos.length - 1 ? (
              <div
                className="flex items-center justify-center"
                style={{
                  whiteSpace: "nowrap", // Prevent text from wrapping
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
                />
              </div>
            ) : (
              <Image
                src={brand.src}
                alt={brand.name}
                width={148}
                height={48}
                style={{ objectFit: "contain" }}
              />
            )}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default BrandList;
