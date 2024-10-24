"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";
import { RootState } from "../store";
import { useSession } from "next-auth/react";
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
    "კატეგორიები",
    "ფილიალები",
  ];

  return (
    <nav className="mx-[168px] justify-between flex py-2 items-center space-x-4 text-gray-700 font-medium mt-2">
      <a
        href="#"
        className="hover:text-black bg-[#8255E3] text-[#fff] rounded-[8px] flex gap-[8px] px-[16px] h-[48px] items-center justify-center"
      >
        <Image
          src={burgerIcon}
          width={24}
          height={24}
          alt="burger"
          className="self-center"
        />
        <div className="self-center text-[#fff]">კატეგორიები</div>
      </a>
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <a
            href="#"
            className="relative text-[18px] group hover:text-[#8255E3] transition-colors duration-300"
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute left-0 right-0 bottom-[-10px] h-[1px] bg-[#E0D1FF] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          {index < items.length - 1 && (
            <span className="text-[14px] mx-2 self-center text-[#0000000D]">
              |
            </span>
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
    <header className="bg-[#ffffff] shadow-sm">
      <div className="text-[16px] leading-[28px] text-[#ffffff] text-center py-[8px] bg-[#7148CA]">
        უფასო მიწოდება 100 ლარიან შენაძენზე თბილისის მასშტაბით
      </div>
      {/* Full-width border */}
      <div className="border-b mx-[168px] border-[#1B1D200F]">
        <div className="py-2 flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="PSP"
            height={56}
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
            <div className="cursor-pointer px-[12px] text-[#101840] w-[139px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center justify-center">
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
              <div className="cursor-pointer w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center justify-center">
                <Image src={cartIcon} alt="cart" width={24} height={24} />
              </div>
              <div className="cursor-pointer w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center justify-center">
                <Image src={heartIcon} alt="heart" width={24} height={24} />
              </div>
              <div className="cursor-pointer w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center justify-center">
                <Image src={personIcon} alt="person" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </header>
  );
};

export default Header;
