"use client";
import React, { useState } from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import Image from "next/image";

import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";

import envelope from "../assets/images/envelope.svg";
import phone from "../assets/images/phone.svg";
import pin from "../assets/images/pin.svg";
import logo from "../assets/images/logo3.svg";

import { serviceLinks, icons, links, promoLinks } from "./constants";

const Footer = () => {
  const [search, setSearch] = useState("");
  const route = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: "#6D4CBA",
        color: "#FFFFFF",
      }}
    >
      <div className="flex justify-between items-center xl:mx-[168px] max-2xl:mx-[80px] mx-auto pt-[48px] pb-[47px]">
        <div className="flex-col ">
          <div className="font-bold text-[20px] mb-[8px] leading-[30px]">
            გამოიწერე ჩვენი სიახლეები
          </div>
          <div className="text-[#FFFFFFB2] text-[16px] leading-[24px]">
            ჩვენ ყოველკვირეულად გამოგიგზავნით მნიშვნელოვან სიახლეებს.
          </div>
        </div>
        <Box display="flex" gap="16px">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="დაგვიტოვე საკონტაქტო ნომერი"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              height: 56,
              borderRadius: "8px",
              width: 347,
              border: "1px solid #9A6DF9",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
                "&.Mui-focused fieldset": { borderColor: "transparent" },
              },
              "& .MuiInputBase-root": {
                height: "100%",
              },
              "& .MuiInputBase-input": {
                cursor: "pointer",
                "&::placeholder": {
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  opacity: 1,
                },
                "&:hover::placeholder": {
                  color: "#474D66",
                },
                "&:focus::placeholder": {
                  color: "#474D66",
                },
              },
            }}
          />

          <button
            className="text-[16px] bg-[#F8F4FF] hover:bg-[#ede3ff] text-[#101840] py-[15px] px-[20px] leading-[24px]"
            style={{
              border: "1px solid #FFFFFF",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            გამოწერა
          </button>
        </Box>
      </div>

      <Divider
        className="w-full"
        sx={{ backgroundColor: "#FFFFFF", opacity: 0.2 }}
      />
      <div className="xl:mx-[168px] max-2xl:mx-[80px] mx-auto">
        <Box className="flex my-[64px] justify-between">
          <Box>
            <Image src={logo} alt="Impex Logo" width={234} height={66} />
            <Typography
              variant="body2"
              sx={{ marginTop: "8px", color: "#FFFFFF" }}
            ></Typography>
          </Box>

          <div className="flex flex gap-[106px] justify-between">
            <Box className="flex gap-[16px] flex-col">
              <div className="mb-[8px] leading-[20px] font-semibold">
                იმპექსის შესახებ
              </div>
              {links.map((link, index) => (
                <Link
                  key={index}
                  color="#FFFFFF"
                  underline="none"
                  className="cursor-pointer"
                  onClick={() => link?.redirect && route.push(`/${link?.redirect}`)}
                >
                  {link.text}
                </Link>
              ))}
            </Box>

            <Box className="flex gap-[16px] flex-col">
              <div className="mb-[8px] leading-[20px] font-semibold">
                My Impex
              </div>
              {promoLinks.map((link, index) => (
                <Link
                  key={index}
                  color="#FFFFFF"
                  underline="none"
                  className="cursor-pointer"
                  onClick={() => link?.redirect && route.push(link?.redirect)}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
            <Box className="flex gap-[16px] flex-col">
              <div className="mb-[8px] leading-[20px] font-semibold">
                კონფიდენციალობა და პირობები
              </div>
              {serviceLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="#FFFFFF"
                  underline="none"
                >
                  {link.text}
                </Link>
              ))}
            </Box>
            <Box className="flex gap-[16px] flex-col">
              <div className="mb-[8px] leading-[20px] font-semibold">
                კონტაქტი
              </div>
              <Link
                className="flex items-center gap-[3px]"
                href="#"
                color="#FFFFFF"
                underline="none"
              >
                <Image src={phone} alt="phone" width={18} height={18} />
                <div>+995 322 313 100</div>
              </Link>
              <Link
                className="flex items-center gap-[3px]"
                href="#"
                color="#FFFFFF"
                underline="none"
              >
                <Image src={envelope} alt="envelope" width={18} height={18} />
                <div>office@myimpex.ge</div>
              </Link>
              <Link
                className="flex items-center gap-[3px]"
                href="#"
                color="#FFFFFF"
                underline="none"
              >
                <Image src={pin} alt="pin" width={18} height={18} />
                <div>თბილისი</div>
              </Link>
            </Box>
          </div>
        </Box>

        <Divider sx={{ backgroundColor: "#FFFFFF", opacity: 0.2 }} />

        {/* Bottom Section */}
        <div className="flex justify-between items-center pb-[48px] pt-[31px]">
          <div
            className="text-[16px] leading-[24px] text-[#FFFFFFB2]"
            color="#FFFFFFB2"
          >
            &copy; 2024 IMPEX. All rights reserved.
          </div>
          <Box display="flex" gap="4px">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="p-[8px] rounded-[8px] hover:bg-[#7143D1]"
              >
                <Image
                  className="cursor-pointer"
                  src={icon.src}
                  alt={icon.alt}
                  width={32}
                  height={32}
                />
              </div>
            ))}
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
