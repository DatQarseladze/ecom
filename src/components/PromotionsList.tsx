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
    title: "r-ზე ფასდაკლება CeraVe-ს ბრენდის პროდუქტის ხაზის მრავალფეროვნებაზე",
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
  const [tabIndex, setTabIndex] = React.useState(null);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div className="xl:mx-[168px] web-xl:mx-[80px] bg-[#fff] px-auto pt-[64px] pb-[80px]">
      <Box>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          className="mb-[60px]"
          sx={{
            position: "relative",
            ".MuiTabs-flexContainer": {
              gap: "24px",
              borderBottom: "1px solid #e8e8e9",
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#8255E3",
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
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "#696F8C",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease-in-out",
                    transformOrigin: "center",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
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
                hoverBorderColor={"#E4AA16"}
                hoverBgColor={"#D8A219"}
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
