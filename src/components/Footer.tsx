import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import Image from "next/image";
import logo from "../assets/images/logo.png"; // Path to your logo image
import { TextField } from "@mui/material";

import envelope from "../assets/images/envelope.svg"; // Path to your logo image
import phone from "../assets/images/phone.svg"; // Path to your logo image
import pin from "../assets/images/pin.svg"; // Path to your logo image

import WhatsAppIcon from "../assets/images/whatsapp.svg"; // Path to social media icons
import FacebookIcon from "../assets/images/facebook.svg";
import MessengerIcon from "../assets/images/messenger.svg";
import InstagramIcon from "../assets/images/instagram.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#6D4CBA",
        color: "#FFFFFF",
        padding: "40px 168px",
      }}
    >
      {/* Top Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <div className="flex-col">
          <div className="font-bold text-[20px] mb-[8px] leading-[30px]">
            გამოიწერე ჩვენი სერვისები
          </div>
          <div className="text-[#FFFFFFB2] text-[16px] leading-[24px]">
            ჩვეენ ყოველკვირეულად გამოგიგზავნით მნიშვნელოვან სიახლეებს.
          </div>
        </div>
        <Box display="flex" gap="16px">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="დაგვიტოვე საკონტაქტო ნომერი"
            value={""}
            sx={{
              height: 56,
              borderRadius: "8px",
              width: 568,
              border: "1px solid #9A6DF9",
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
                color: "#FFFFFF",
                opacity: 1,
              },
            }}
          />
          <button
            className="text-[16px] bg-[#F8F4FF] text-[#101840] py-[15px] px-[20px] leading-[24px]"
            style={{
              border: "1px solid #FFFFFF",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            გამოწერა
          </button>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#FFFFFF", opacity: 0.2 }} />

      <Box className="flex my-[64px]">
        <Box>
          <Image src={logo} alt="Impex Logo" width={264} height={88} />
          <Typography
            variant="body2"
            sx={{ marginTop: "8px", color: "#FFFFFF" }}
          >
          </Typography>
        </Box>

        {/* Links Columns */}
        <Box className="justify-between ml-[218px]" display="flex" gap="40px">
          <Box className="flex gap-[16px] flex-col">
            <Typography
              className="mb-[8px]"
              variant="subtitle1"
              fontWeight="bold"
            >
              იმპექსის შესახებ
            </Typography>
            <Link href="#" color="#FFFFFF" underline="none">
              კომპანიის შესახებ
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              სიახლეები
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              ჩვენი მიზანი
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              კარიერა
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              მენეჯმენტი
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              ჩვენი ბრენდები
            </Link>
          </Box>

          <Box className="flex gap-[16px] flex-col">
            <Typography
              className="mb-[8px]"
              variant="subtitle1"
              fontWeight="bold"
            >
              My Impex
            </Typography>
            <Link href="#" color="#FFFFFF" underline="none">
              აქციები
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              ივენთები
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              ზე ბარათი
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              რეგისტრაცია
            </Link>
          </Box>
          <Box className="flex gap-[16px] flex-col">
            <Typography
              className="mb-[8px]"
              variant="subtitle1"
              fontWeight="bold"
            >
              კონფიდენციალობა და პირობები
            </Typography>
            <Link href="#" color="#FFFFFF" underline="none">
              მომხმარებელთა მომსახურება
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              მიწოდება სახლში
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              იყიდე და აიღე აფთიაქში
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              წესები და პირობები
            </Link>
            <Link href="#" color="#FFFFFF" underline="none">
              კონფიდენციალობა
            </Link>
          </Box>
          <Box className="flex gap-[16px] flex-col">
            <Typography
              className="mb-[8px]"
              variant="subtitle1"
              fontWeight="bold"
            >
              კონტაქტი
            </Typography>
            <Link className="flex items-center gap-[3px]" href="#" color="#FFFFFF" underline="none">
              <Image src={phone} alt="phone" width={18} height={18} />
              <div>+995 322 313 100</div>
            </Link>
            <Link className="flex items-center gap-[3px]" href="#" color="#FFFFFF" underline="none">
              <Image src={envelope} alt="envelope" width={18} height={18} />
              <div>office@myimpex.ge</div>
            </Link>
            <Link className="flex items-center gap-[3px]" href="#" color="#FFFFFF" underline="none">
              <Image src={pin} alt="pin" width={18} height={18} />
              <div>თბილისი</div>
            </Link>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#FFFFFF", opacity: 0.2, mb: 3 }} />

      {/* Bottom Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="#FFFFFFB2">
          &copy; 2024 IMPEX. All rights reserved.
        </Typography>
        <Box display="flex" gap="16px">
          <Image className="cursor-pointer" src={MessengerIcon} alt="Viber" width={32} height={32} />
          <Image className="cursor-pointer" src={FacebookIcon} alt="Facebook" width={32} height={32} />
          <Image className="cursor-pointer" src={WhatsAppIcon} alt="WhatsApp" width={32} height={32} />
          <Image className="cursor-pointer" src={InstagramIcon} alt="Instagram" width={32} height={32} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
