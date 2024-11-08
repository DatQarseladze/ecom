import Image from "next/image";
import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import productImg1 from "../assets/images/picture.jpeg";
import productImg2 from "../assets/images/picture1.png";
import productImg3 from "../assets/images/picture2.png";
import productImg4 from "../assets/images/picture3.png";
import clockImg from "../assets/images/clock.png";
import ReusableBadge from "./ReusableBadge";

const products = [
  {
    id: 1,
    title:
      "50%-ზე ფასდაკლება CeraVe-ს ბრენდის პროდუქტის ხაზის მრავალფეროვნებაზე",
    img: productImg1,
  },
  {
    id: 2,
    title: "40%-მდე ფასდაკლება PHYTORELAX-ის ბრენდის თავის მოვლის საშუალებებზე",
    img: productImg2,
  },
  {
    id: 3,
    title:
      "30%-ზე ფასდაკლება Soskin-ის ბრენდის პროდუქტის ხაზის მრავალფეროვნებაზე",
    img: productImg3,
  },
  {
    id: 4,
    title:
      "30%-ზე ფასდაკლება KORRES-ის ბრენდის პროდუქტის ხაზის მრავალფეროვნებაზე",
    img: productImg4,
  },
];

const Promotions = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div className="xl:mx-[168px] bg-[#fff] px-auto pt-[64px] pb-[80px]">
      <Box>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          className="mb-[60px]"
          sx={{
            position: "relative", // Ensures the Tabs have a positioning context
            // borderBottom: "2px solid #e8e8e9", // Retain the bottom border
            ".MuiTabs-flexContainer": {
              gap: "24px",
              borderBottom: '1px solid #e8e8e9'
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#8255E3", // Active tab indicator color
              // height: "2px", // The height of the indicator matches the border height
              // position: "absolute",
              // bottom: "0px", // Place it at the bottom of the Tabs container
              // left: 0, // Align it with the left side
              // right: 0, // Ensure it spans the full width
              // zIndex: 10, // Bring the indicator above the border
            },
          }}
        >
          {["სილამაზე", "ჯანმრთელობა", "დედა და ბავშვები", "პირის ღრუ"].map(
            (label, index) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  color: tabIndex === index ? "#8255E3 !important" : "#8F95B2",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "28px",
                  paddingBottom: "9px",
                }}
              />
            )
          )}
        </Tabs>
      </Box>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <Box
            key={product.id}
            className="rounded-lg cursor-pointer shadow-sm relative bg-[#FFFFFF]"
            sx={{
              boxShadow: "0px 8px 40px -8px #172B4D14",
              "&:hover": {
                background: "#1B1D200F",
              },
            }}
          >
            <div className="absolute left-[24px] top-[24px] ">
              <ReusableBadge
                iconSrc={clockImg}
                bgColor={"#FFD000"}
                borderColor={"#FFD000"}
                label={"21 ოქტ - 30 ოქტ"}
              />
            </div>

            <Image
              src={product.img}
              alt={product.title}
              width={378}
              height={296}
              style={{ objectFit: "cover", height: "296px" }}
              className="w-full rounded-md"
            />
            <div className="flex p-[24px] flex-col">
              <h3 className="text-[20px] leading-[28px] text-[#101840] font-bold">
                {product.title}
              </h3>
              <p className="text-[#474D66] mt-[8px] text-[16px] leading-[24px]">
                გლობალური პრემიუმ ბრენდის, 𝐊𝐎𝐑𝐑𝐄𝐒-ის ივენთი ექსკლუზიურად
                𝐈𝐌𝐏𝐄𝐗-ში
              </p>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
