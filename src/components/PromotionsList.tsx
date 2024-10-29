import Image from "next/image";
import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import productImg1 from "../assets/images/picture.jpeg";
import productImg2 from "../assets/images/picture1.png";
import productImg3 from "../assets/images/picture2.png";
import productImg4 from "../assets/images/picture3.png";
import clockImg from "../assets/images/clock.png";

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
    <div className="xl:mx-[168px] mx-auto mt-12">
      {/* Tabs */}
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          className="mb-4"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#8255E3", // Active tab underline color
              height: "3px",
            },
          }}
        >
          {["სილამაზე", "ჯანმრთელობა", "დედა და ბავშვები", "პირის ღრუ"].map(
            (label, index) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  borderBottom: "2px solid #e8e8e9", // Default inactive border color
                  color: tabIndex === index ? "#8255E3 !important" : "#8F95B2", // Color based on active tab
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "28px",
                  "&.Mui-selected": {
                    borderBottom: "3px solid #8255E3", // Active tab border color
                  },
                }}
              />
            )
          )}
        </Tabs>
      </Box>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <Box
            key={product.id}
            className="rounded-lg cursor-pointer shadow-sm relative bg-[#FFFFFF]"
            sx={{
              "&:hover": { boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
            }}
          >
            <div className="absolute left-[24px] top-[24px] flex items-center justify-center cursor rounded-[8px] bg-[#FFD000] w-[32px] h-[32px]">
              <Image src={clockImg} width={16} height={16} alt="clock" />
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
              <h3 className="text-[20px] leading-[28px] text-[#101840] font-bold text-gray-800">
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
