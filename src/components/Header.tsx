"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";

import cartIcon from "../assets/images/cart.svg";
import heartIcon from "../assets/images/heart.svg";
import creditCardIcon from "../assets/images/credit-card.svg";
import SearchIcon from "../assets/images/search.svg";
import personIcon from "../assets/images/person.svg";
import burgerIcon from "../assets/images/burger.svg";

const Navigation = () => {
  const items = [
    "მედიკამენტები",
    "სილამაზე და მოვლა",
    "დედა და ბავშვი",
    "ივენთები",
    "ბლოგი",
    "აქციები",
    "OUTLET",
    "კონტაქტი",
    "ფილიალები",
  ];

  // Step 1: Create a state variable for the active tab
  const [activeTab, setActiveTab] = useState(items[0]); // Default to the first item

  return (
    <nav className="xl:mx-[168px] mx-auto justify-between flex overflow-y-hidden overflow-x-auto items-center space-x-4 text-gray-700 font-medium mt-2">
      <a
        href="#"
        className="hover:text-black bg-[#8255E3] text-[#fff] rounded-[8px] flex px-[16px] h-[48px] items-center justify-center"
      >
        <Image
          src={burgerIcon}
          width={24}
          height={24}
          alt="burger"
          className="self-center"
        />
        <div className="self-center text-[18px] ml-[8px] text-[#fff]">კატეგორიები</div>
      </a>
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <a
            href="#"
            className={`relative text-[18px]  hover:text-[#8255E3] hover:border-b-[2px] hover:border-b-[#dfd2ff] leading-[24px] py-[12px] px-[8px] group transition-colors duration-300 ${
              activeTab === item
                ? "text-[#8255E3] border-b-[2px] border-b-[#dfd2ff]"
                : "text-gray-700"
            } ${item === "OUTLET" ? "font-semibold" : ""}`}
            onClick={() => setActiveTab(item)}
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute left-0 right-0 bottom-[-10px] h-[1px] bg-[#E0D1FF] scale-x-0 transition-transform duration-300" />
          </a>
          {index < items.length - 1 && (
            <div
              className="mx-2 self-center"
              style={{
                width: "1px",
                height: "15px",
                backgroundColor: "#0000000D",
              }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const Header = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <header className="bg-[#ffffff] ">
      <div className="text-[16px] leading-[28px] text-[#ffffff] text-center py-[8px] bg-[#7148CA]">
        უფასო მიწოდება 100 ლარიან შენაძენზე თბილისის მასშტაბით
      </div>
      {/* Full-width border */}
      <div className="mx-[168px]">
        <div className="my-[8px] flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="PSP"
            height={48}
            width={170}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
          {/* Search bar and buttons */}
          <div className="flex items-center space-x-[16px]">
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
                  border: "1px solid #1B1D201A",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: "transparent" },
                    "&.Mui-focused fieldset": { borderColor: "transparent" },
                  },
                  "& .MuiInputBase-root": {
                    height: "100%",
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
                    <Image
                      src={SearchIcon}
                      alt="search"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  ),
                }}
              />
            </div>
            {/* Action buttons */}
            <div className="cursor-pointer px-[12px] text-[#101840] w-[139px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center hover:bg-[#1B1D2008] justify-center">
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
              <div className="cursor-pointer w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] hover:bg-[#1B1D2008] flex items-center justify-center">
                <Image src={cartIcon} alt="cart" width={24} height={24} />
              </div>
              <div className="cursor-pointer w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] hover:bg-[#1B1D2008] flex items-center justify-center">
                <Image src={heartIcon} alt="heart" width={24} height={24} />
              </div>
              <div className="cursor-pointer w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] hover:bg-[#1B1D2008] flex items-center justify-center">
                <Image src={personIcon} alt="person" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b  border-[#1B1D200F] "></div>
      <Navigation />
    </header>
  );
};

export default Header;
