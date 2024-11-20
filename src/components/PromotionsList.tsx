import Image from "next/image";
import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import productImg1 from "../assets/images/picture.jpeg";
import productImg2 from "../assets/images/picture1.png";
import productImg3 from "../assets/images/picture2.png";
import productImg4 from "../assets/images/picture3.png";
import clockImg from "../assets/images/clock.png";
import ReusableBadge from "./ReusableBadge";
import { Divider } from "@mui/material";

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
  const [tabIndex, setTabIndex] = React.useState(-1);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div className="xl:mx-[168px] web-xl:mx-[80px] bg-[#fff] px-auto pt-[64px] pb-[80px]">
      <Box>
        <Tabs
          value={tabIndex === -1 ? false : tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            position: "relative",
            ".MuiTabs-flexContainer": {
              gap: "24px",
              zIndex: 1,
            },
          }}
          indicatorColor="primary"
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
                  color: tabIndex === index ? "#8255E3" : "#8F95B2", // Active tab color
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "28px",
                  paddingBottom: "9px",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -1,
                    left: 0,
                    right: 0,
                    zIndex: 5000,
                    height: "3px",
                    backgroundColor: "#696F8C",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease-in-out",
                    transformOrigin: "center",
                  },
                  "&:hover": {
                    color: tabIndex !== index ? "#696F8C" : "#8255E3", // Only change color on hover for non-active tabs
                  },
                  "&:hover::after": {
                    transform: tabIndex !== index ? "scaleX(1)" : "scaleX(0)", // Only show the underline for non-active tabs on hover
                  },
                }}
              />
            )
          )}
        </Tabs>
        <Divider
          className="w-full mb-[60px]"
          sx={{ height: "2px", backgroundColor: "#FFFFFF00", position: 'relative', top: -2 }}
        />
      </Box>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <Box
            key={product.id}
            className="rounded-lg cursor-pointer relative bg-[#FFFFFF]"
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
                bgColor={"#F1C604"}
                borderColor={"#FFDE40"}
                hoverBgColor={"#D8A219"}
                hoverBorderColor={"#FFD000"}
                label={"21 ოქტ - 30 ოქტ"}
              />
            </div>

            <Image
              src={product.img}
              alt={product.title}
              width={378}
              height={296}
              style={{ objectFit: "cover", height: "296px" }}
              className="w-full rounded-tl-[8px] rounded-tr-[8px]"
            />
            <div className="flex p-[24px] flex-col">
              <h3 className="text-[20px] leading-[28px] text-[#101840] font-bold">
                {product.title}
              </h3>
              <p className="text-[#474D66] mt-[8px] text-[16px] leading-[24px]">
                გლობალური პრემიუმ ბრენდის, KORRESS-ის ივენთი ექსკლუზიურად
                IMPEX-ში
              </p>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
