"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

import cartIcon from "../assets/images/cart.svg";
import heartIcon from "../assets/images/heart.svg";
import creditCardIcon from "../assets/images/credit-card.svg";
import personIcon from "../assets/images/person.svg";
import burgerIcon from "../assets/images/burger.svg";
import SearchIcon from "@/src/icons/SearchIcon";

const Navigation = () => {
  const items = [
    { url: "/meds", name: "მედიკამენტები" },
    { url: "/beauty", name: "სილამაზე და მოვლა" },
    { url: "/parents", name: "დედა და ბავშვი" },
    { url: "/events", name: "ივენთები" },
    { url: "//blogs", name: "ბლოგი" },
    { url: "/spots", name: "აქციები" },
    { url: "/outlets", name: "OUTLET" },
    { url: "/contacts", name: "კონტაქტი" },
    { url: "/branches", name: "ფილიალები" },
  ];

  const route = useRouter();
  const path = usePathname();
  const [activeTab, setActiveTab] = useState<any>(path);

  return (
    <nav className="2xl:mx-[168px] max-2xl:mx-[168px] mx-auto justify-between flex overflow-y-hidden overflow-x-auto items-center space-x-4 text-gray-700 font-medium mt-[8px]">
      <a
        href="#"
        className="hover:text-black bg-[#8255E3] w-[180px] text-[#fff] rounded-[8px] flex px-[16px] h-[48px] items-center justify-center"
        aria-label="Open categories"
      >
        <Image
          src={burgerIcon}
          width={20}
          height={20}
          alt="burger"
          className="self-center"
        />
        <div className="self-center text-[18px] ml-[8px] font-[400] text-[#fff]">
          კატეგორიები
        </div>
      </a>
      {items.map((item, index) => (
        <React.Fragment key={item?.name}>
          <a
            href="#"
            className={`relative text-[18px] h-[48px] font-[400] hover:bg-[#1B1D2008] rounded-[2px] leading-[24px] items-center px-[8px] flex group transition-colors duration-300
              ${
                activeTab === item?.url
                  ? "text-[#8255E3] border-b-[2px] border-b-[#dfd2ff]"
                  : "text-gray-700 border-b-[2px] border-b-transparent"
              } ${item?.name === "OUTLET" ? "font-medium" : ""}`}
            onClick={() => {
              if (item?.url) {
                route.push(item.url);
                setActiveTab(item?.url);
              }
              setActiveTab(item?.url);
            }}
            role="tab"
            aria-selected={path === item?.url}
            aria-label={item?.name}
          >
            <span className="relative z-10 text-center whitespace-nowrap overflow-hidden text-ellipsis">
              {item?.name}
            </span>
          </a>
          {index < items.length - 1 && (
            <span
              className="mx-2 self-center"
              aria-hidden="true"
              style={{
                width: "1px",
                height: "15px",
                backgroundColor: "#0000000D",
              }}
            ></span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const Header = () => {
  const [search, setSearch] = useState("");
  const [fillColor, setFillColor] = useState("white");

  return (
    <header>
      <section
        className="text-[16px] leading-[28px] text-[#ffffff] text-center py-[8px] bg-[#7148CA]"
        aria-live="polite"
      >
        <h2 className="sr-only">Free Shipping Offer</h2>
        უფასო მიწოდება 100 ლარიან შენაძენზე თბილისის მასშტაბით
      </section>

      <div className="2xl:mx-[168px] max-2xl:mx-[168px]">
        <div className="mb-[8px] mt-[24px] flex items-center justify-between">
          <a href="/" aria-label="Home" className="cursor-pointer">
            <Image
              src="/logo.svg"
              alt="PSP"
              width="0"
              height="0"
              className="w-[170px] h-[48px]"
            />
          </a>

          <div className="flex items-center space-x-[16px] overflow-y-hidden overflow-x-auto">
            <div className="flex-grow">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="ჩაწერე საძიებო სიტყვა"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                  height: 48,
                  borderRadius: "8px",
                  width: 568,
                  border: "transparent",
                  "&:hover": {
                    backgroundColor: "#f8f8f8",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1px solid #1B1D201A",
                    },
                    "&:hover fieldset": { borderColor: "#1B1D201A" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#8255E3",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#fff",
                    },
                  },
                  "& .MuiInputBase-root": {
                    height: "100%",
                    paddingRight: "3px  ",
                  },
                  "& input::placeholder": {
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    textAlign: "left",
                    color: "#474D66",
                    opacity: 1,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <div
                      className="cursor-pointer"
                      onMouseEnter={() => setFillColor("#1B1D200F")}
                      onMouseLeave={() => setFillColor("white")}
                    >
                      <SearchIcon fillColor={fillColor} />
                    </div>
                  ),
                }}
              />
            </div>

            <div
              className="cursor-pointer px-[12px] text-[#101840] w-[139px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center hover:bg-[#1B1D2008] justify-center"
              aria-label="Add to cart"
            >
              <Image
                src={creditCardIcon}
                alt="cart"
                className="mr-[8px]"
                width={17.5}
                height={12.5}
              />
              <span className="text-[16px]">ზე ბარათი</span>
            </div>

            <div className="flex space-x-[8px]">
              <div
                className="cursor-pointer w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] hover:bg-[#1B1D2008] flex items-center justify-center"
                aria-label="View cart"
              >
                <Image src={cartIcon} alt="cart" width={24} height={24} />
              </div>
              <div
                className="cursor-pointer w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] hover:bg-[#1B1D2008] flex items-center justify-center"
                aria-label="View wishlist"
              >
                <Image src={heartIcon} alt="heart" width={24} height={24} />
              </div>
              <div
                className="cursor-pointer w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] hover:bg-[#1B1D2008] flex items-center justify-center"
                aria-label="User profile"
              >
                <Image src={personIcon} alt="person" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-[#1B1D200F]" aria-hidden="true"></div>

      <Navigation />
    </header>
  );
};

export default Header;
