"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { TextField, IconButton, Button, Switch } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
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
    "სილამზე და მოვლა",
    "დედა და ბავშვი",
    "ივენთები",
    "ბლოგი",
    "აქციები",
    "AUTLET",
    "ფილიალები",
  ];

  return (
    <nav className="w-full flex container mx-auto px-4 py-2 text-gray-700 font-medium mt-2">
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
            className="relative text-[20px] group hover:text-[#8255E3] transition-colors duration-300 flex items-center"
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute left-0 right-0 bottom-[-10px] h-[1px] bg-[#E0D1FF] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          {/* Add separator after each item except the last one */}
          {index < items.length - 1 && (
            <div className="w-[1px] h-[14px] bg-[#0000000D] mx-2 self-center" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSession();
  const router = useRouter();

  const redirectToProfile = () => {
    router.push("/profile");
  };

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="bg-[#ffffff] shadow-sm">
      {/* <div className="container mx-auto px-4 py-2"> */}
      <div className="w-full">
        <div className="flex items-center justify-between pt-[20px] pb-[12px] border-b-[1px] border-[#1B1D200F]">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Image
                src="/logo.svg"
                alt="PSP"
                height={56}
                width={170}
                className="cursor-pointer"
                onClick={() => router.push("/")}
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-grow w-[568px] max-w-md">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="ჩაწერე საძიებო სიტყვა"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{
                    height: 56,
                    borderRadius: "8px", // Rounded corners
                    border: "1px solid #1B1D201A", // Custom border
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent", // Hide the default border
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent", // Hide the border on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent", // Hide the border when focused
                      },
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
              <div className="cursor-pointer text-[#101840] w-[176px] h-[56px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center justify-center">
                <Image
                  src={creditCardIcon}
                  alt="cart"
                  className="mr-[8px]"
                  width={24}
                  height={24}
                />
                <span className="text-[20px]">ზე ბარათი</span>
              </div>
              <div className="cursor-pointer w-[56px] h-[56px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center justify-center">
                <Image src={cartIcon} alt="cart" width={24} height={24} />
              </div>
              <div className="cursor-pointer w-[56px] h-[56px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center justify-center">
                <Image src={heartIcon} alt="heart" width={24} height={24} />
              </div>
              <div className="cursor-pointer w-[56px] h-[56px] rounded-[8px] border-[1px] border-[#1B1D201A] flex items-center justify-center">
                <Image src={personIcon} alt="person" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>

        <Navigation />

        {/* <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="w-[400px] h-[400px] transform bg-[#fff] translate-x-[-50%] translate-y-[-50%] absolute rounded-[12px] top-[50%] left-[50%]">
            <div className="text-black text-center">Login Modal</div>
          </div>
        </Modal> */}
      </div>
    </header>
  );
};

export default Header;
