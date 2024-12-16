"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { dissapearingIcon } from "@/src/components/constants";
import { Box, Typography, Tab, Tabs, Divider } from "@mui/material";
import ReusableBadge from "@/src/components/ReusableBadge";
import { weekProducts } from "@/src/components/constants";
import Card from "@/src/components/Card";
import MinusIcon from "@/src/icons/MinusIcon";
import PlusIcon from "@/src/icons/PlusIcon";
import HeartIcon from "@/src/icons/HeartIcon";
import checkMark from "@/src/assets/images/check-mark.svg";
import shoppingCartIcon from "@/src/assets/images/shopping-cart.svg";
import filledHeart from "@/src/assets/images/filled-heart.svg";
import checkIcon from "@/src/assets/images/check.svg";
import caretRight from "@/src/assets/images/caret-right.svg";
import caretLeft from "@/src/assets/images/caret-left.svg";
import Map from "@/src/components/Map";
import InnerImageZoom from "react-inner-image-zoom";

const ProductList = () => {
  const [counts, setCounts] = useState(0);
  const pharmacyRef = useRef<HTMLDivElement | null>(null);
  const route = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    "https://s3-alpha-sig.figma.com/img/739a/ecd8/76273b43eba237cb8a343eca676c5bff?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iE7Krq675y~OOpH~NuJ8~G-LQ3INvYNWbcjyQX~kRzSYZ0EslS0WvSA9PQDNKQuzCT~aa1ZkFiNe-kdsHXq4kCiaTmzzMDrT~60V8c7lrpMIlO4xoCyKn5T2p3Ipzq~wYPfr~9FXiLW2u21Ues8IStMtjMwBjAY6yGPWLQTE6YXDE4w7YQSk5T3wD7y2oRFLhdjiExBSrua3fZMzBV77g28zrZFw~nObe50qTDByjURKLsGzO6QlOEJr~LGlF9xyVStaxrfrnjANvVmoXN67-qFAdkj6lrLhKWOJZYJp6RkYXKXgOAdgWFzZQr~t3dASrX6Ba0~RrNtxgc0NBf5~7Q__"
  );

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSearchForPharmacy = () => {
    setTabIndex(1);
    pharmacyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMoveToDescription = () => {
    setTabIndex(0);
    pharmacyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [filled, setFilled] = useState(false);

  const handleCountChange = (index, change) => {
    // setCounts((prevCounts) => {
    //   const currentCount = prevCounts[index] || 0;
    //   const newCount = Math.max(0, Math.min(10, currentCount + change));
    //   return { ...prevCounts, [index]: newCount };
    // });
  };
  return (
    <div className="2xl:mx-[168px] max-2xl:mx-[168px] px-auto pt-[40px] pb-[80px]">
      <Box display="flex" alignItems="center">
        <div
          onClick={() => route.push("/")}
          className="text-[14px] text-[#8255E3] cursor-pointer leading-[22px]"
        >
          მთავარი
        </div>
        <Typography color="#1B1D203D" mx={"8px"}>
          /
        </Typography>
        <div
          onClick={() => route.push("/events")}
          className="text-[14px] cursor-pointer text-[#8255E3] leading-[22px]"
        >
          სილამაზე და მოვლა
        </div>
        <Typography mx={"8px"} color="#1B1D203D">
          /
        </Typography>
        <div
          onClick={() => route.push("/events")}
          className="text-[14px] cursor-pointer text-[#8255E3] leading-[22px]"
        >
          სახის მოვლა
        </div>
        <Typography mx={"8px"} color="#1B1D203D">
          /
        </Typography>
        <div
          onClick={() => route.push("/events")}
          className="text-[14px] cursor-pointer text-[#8255E3] leading-[22px]"
        >
          რუჯი და მზისგან დაცვა
        </div>
      </Box>
      <div className="mt-[24px] flex gap-[40px]">
        <div>
          <div className="flex gap-[40px]">
            <div>
              <div className="rounded-[8px] relative border-[1px] border-solid border-[#EDEFF5] w-[488px] h-[488px] cursor-pointer p-[16px]">
                <div className="absolute top-[16px] w-[63px] bg-[#9A6DF9] text-white rounded-md py-[2px] px-[8px] text-[20px] leading-[28px] font-bold">
                  42%
                </div>
                <div className="absolute top-[16px] right-[16px]">
                  <ReusableBadge
                    iconSrc={dissapearingIcon}
                    bgColor="#BB3F43"
                    borderColor="#EE9191"
                    label="შეზღუდული მარაგი"
                  />
                </div>
                <div className="flex mt-[48px] items-center justify-center">
                  <div className="w-[360px] h-[360px] relative">
                    <InnerImageZoom
                      src={selectedImage}
                      zoomSrc={selectedImage}
                      zoomType="hover"
                      zoomPreload={true}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-[8px] mt-[16px]">
                <div
                  onClick={() => {
                    setSelectedIndex(0);
                    setSelectedImage(
                      "https://s3-alpha-sig.figma.com/img/739a/ecd8/76273b43eba237cb8a343eca676c5bff?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iE7Krq675y~OOpH~NuJ8~G-LQ3INvYNWbcjyQX~kRzSYZ0EslS0WvSA9PQDNKQuzCT~aa1ZkFiNe-kdsHXq4kCiaTmzzMDrT~60V8c7lrpMIlO4xoCyKn5T2p3Ipzq~wYPfr~9FXiLW2u21Ues8IStMtjMwBjAY6yGPWLQTE6YXDE4w7YQSk5T3wD7y2oRFLhdjiExBSrua3fZMzBV77g28zrZFw~nObe50qTDByjURKLsGzO6QlOEJr~LGlF9xyVStaxrfrnjANvVmoXN67-qFAdkj6lrLhKWOJZYJp6RkYXKXgOAdgWFzZQr~t3dASrX6Ba0~RrNtxgc0NBf5~7Q__"
                    );
                  }}
                  className={`border-solid ${selectedIndex === 0 ? "border-[2px] border-[#CBB2FF]" : "border-[1px] border-[#1B1D201A]"} rounded-lg w-[112px] p-[8px] h-[112px]`}
                >
                  <Image
                    src={
                      "https://s3-alpha-sig.figma.com/img/739a/ecd8/76273b43eba237cb8a343eca676c5bff?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iE7Krq675y~OOpH~NuJ8~G-LQ3INvYNWbcjyQX~kRzSYZ0EslS0WvSA9PQDNKQuzCT~aa1ZkFiNe-kdsHXq4kCiaTmzzMDrT~60V8c7lrpMIlO4xoCyKn5T2p3Ipzq~wYPfr~9FXiLW2u21Ues8IStMtjMwBjAY6yGPWLQTE6YXDE4w7YQSk5T3wD7y2oRFLhdjiExBSrua3fZMzBV77g28zrZFw~nObe50qTDByjURKLsGzO6QlOEJr~LGlF9xyVStaxrfrnjANvVmoXN67-qFAdkj6lrLhKWOJZYJp6RkYXKXgOAdgWFzZQr~t3dASrX6Ba0~RrNtxgc0NBf5~7Q__"
                    }
                    width={96}
                    height={96}
                    alt="product"
                    className="cursor-pointer"
                  />
                </div>
                <div
                  onClick={() => {
                    setSelectedIndex(1);
                    setSelectedImage(
                      "https://s3-alpha-sig.figma.com/img/52ae/6852/5123d4ca619bf65125b0963e0e54e661?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJu0UdK9Jc56jtspCYcq-dshhBe-89WbWqoZz~--zl24iDDanDmuvAmYpudVsA7FoYQqPnx5MZ5Qze9rXzmeUohllAeXxgVvNXncg1ynkgHd8Kops2imQu5EtMxuxE2sedmcPVXOrxO3z4KHBMh~OT2Hu8fOVI3Y7~JDIs8WvFd7ycuZJ2eb2CsQm2tBkOFt-~YMI12kk2DLudtJbRzA7hXxHy-HSEu2lzjdvdAb0NqAfXMy5QUhX2rmxZkZooZEojmnxlOF~fIJ1leVqXJetFNaJ85GgrQvVwjKfmecgQZw1qrs98tFe5WUAvU6M2o1clfR7RhnFvjGyLKoQd-Gpw__"
                    );
                  }}
                  className={`border-solid ${selectedIndex === 1 ? "border-[2px] border-[#CBB2FF]" : "border-[1px] border-[#1B1D201A]"} rounded-lg w-[112px] p-[8px] h-[112px]`}
                >
                  <Image
                    src={
                      "https://s3-alpha-sig.figma.com/img/52ae/6852/5123d4ca619bf65125b0963e0e54e661?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJu0UdK9Jc56jtspCYcq-dshhBe-89WbWqoZz~--zl24iDDanDmuvAmYpudVsA7FoYQqPnx5MZ5Qze9rXzmeUohllAeXxgVvNXncg1ynkgHd8Kops2imQu5EtMxuxE2sedmcPVXOrxO3z4KHBMh~OT2Hu8fOVI3Y7~JDIs8WvFd7ycuZJ2eb2CsQm2tBkOFt-~YMI12kk2DLudtJbRzA7hXxHy-HSEu2lzjdvdAb0NqAfXMy5QUhX2rmxZkZooZEojmnxlOF~fIJ1leVqXJetFNaJ85GgrQvVwjKfmecgQZw1qrs98tFe5WUAvU6M2o1clfR7RhnFvjGyLKoQd-Gpw__"
                    }
                    width={96}
                    height={96}
                    alt="product"
                    className="cursor-pointer"
                  />
                </div>
                <div
                  onClick={() => {
                    setSelectedIndex(2);
                    setSelectedImage(
                      "https://s3-alpha-sig.figma.com/img/52ae/6852/5123d4ca619bf65125b0963e0e54e661?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJu0UdK9Jc56jtspCYcq-dshhBe-89WbWqoZz~--zl24iDDanDmuvAmYpudVsA7FoYQqPnx5MZ5Qze9rXzmeUohllAeXxgVvNXncg1ynkgHd8Kops2imQu5EtMxuxE2sedmcPVXOrxO3z4KHBMh~OT2Hu8fOVI3Y7~JDIs8WvFd7ycuZJ2eb2CsQm2tBkOFt-~YMI12kk2DLudtJbRzA7hXxHy-HSEu2lzjdvdAb0NqAfXMy5QUhX2rmxZkZooZEojmnxlOF~fIJ1leVqXJetFNaJ85GgrQvVwjKfmecgQZw1qrs98tFe5WUAvU6M2o1clfR7RhnFvjGyLKoQd-Gpw__"
                    );
                  }}
                  className={`border-solid ${selectedIndex === 2 ? "border-[2px] border-[#CBB2FF]" : "border-[1px] border-[#1B1D201A]"} rounded-lg w-[112px] p-[8px] h-[112px]`}
                >
                  <Image
                    src={
                      "https://s3-alpha-sig.figma.com/img/52ae/6852/5123d4ca619bf65125b0963e0e54e661?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJu0UdK9Jc56jtspCYcq-dshhBe-89WbWqoZz~--zl24iDDanDmuvAmYpudVsA7FoYQqPnx5MZ5Qze9rXzmeUohllAeXxgVvNXncg1ynkgHd8Kops2imQu5EtMxuxE2sedmcPVXOrxO3z4KHBMh~OT2Hu8fOVI3Y7~JDIs8WvFd7ycuZJ2eb2CsQm2tBkOFt-~YMI12kk2DLudtJbRzA7hXxHy-HSEu2lzjdvdAb0NqAfXMy5QUhX2rmxZkZooZEojmnxlOF~fIJ1leVqXJetFNaJ85GgrQvVwjKfmecgQZw1qrs98tFe5WUAvU6M2o1clfR7RhnFvjGyLKoQd-Gpw__"
                    }
                    width={96}
                    height={96}
                    alt="product"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[652px]">
              <h1 className="font-bold text-[32px] leading-[40px] text-[#101840]">
                თმის საღებავი 4/2 3275 ბი ვიზიბალ - Be Visible
              </h1>
              <h3 className="font-bold mt-[8px] text-[#474D66]">#89531_651</h3>
              <h4 className="text-[#474D66] mt-[16px]">
                თმის საღებავი 4/2 ბი ვიზიბალ - Be Visible, წარმოადგენს
                პროფესიონალურ თმის საღებავს.თმის საღებავი 4/2 ბი ვიზიბალ - Be
                Visible, წარმოადგენს პროფესიონალურ თმის საღებავს.თმის საღებავი
                4/2 ბი ვიზიბალ - Be Visible, წარმოადგენს პროფესიონალურ თმის
                საღებავს.
              </h4>
              <h4
                onClick={handleMoveToDescription}
                className="text-[#8255E3] cursor-pointer hover:text-[#7143D1] font-medium mt-[8px]"
              >
                სრული ანოტაცია
              </h4>
              <div className="flex flex-col mt-[8px]">
                <div className="flex border-b-[1px] border-b-[#1B1D201A] border-b-solid">
                  <div className="p-[16px] w-[326px]">
                    <h2 className="font-medium text-[#101840]">ბრენდი</h2>
                  </div>
                  <div className="p-[16px] w-[326px]">
                    <h2 className="text-[#8255E3] cursor-pointer">
                      Be Visible
                    </h2>
                  </div>
                </div>
                <div className="flex border-b-[1px] border-b-[#1B1D201A] border-b-solid">
                  <div className="p-[16px] w-[326px]">
                    <h2 className="font-medium text-[#101840]">სკალპის ტიპი</h2>
                  </div>
                  <div className="p-[16px] w-[326px]">
                    <h2 className="text-[#101840]">ყველა</h2>
                  </div>
                </div>
                <div className="flex border-b-[1px] border-b-[#1B1D201A] border-b-solid">
                  <div className="p-[16px] w-[326px]">
                    <h2 className="font-medium text-[#101840]">ჩვენება</h2>
                  </div>
                  <div className="p-[16px] w-[326px]">
                    <h2 className="text-[#8255E3] cursor-pointer">
                      ჩვილის საფენი
                    </h2>
                  </div>
                </div>
                <div className="flex border-b-[1px] border-b-[#1B1D201A] border-b-solid">
                  <div className="p-[16px] w-[326px]">
                    <h2 className="font-medium text-[#101840]">სკალპის ტიპი</h2>
                  </div>
                  <div className="p-[16px] w-[326px]">
                    <h2 className="text-[#101840]">ყველა</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[40px] max-w-[1180px]">
            <div className="py-[4px] flex items-center justify-between mb-[24px]">
              <h2 className="text-[24px] leading-[32px] text-[#474D66] font-bold">
                რეკომენდირებულია თქვენთვის
              </h2>
              <div className="flex items-center gap-[4px]">
                <div className="cursor-pointer border-[1px] p-[9px] border-[#1B1D2008] flex items-center justify-center rounded-[8px]">
                  <Image
                    src={caretLeft}
                    width={20}
                    height={20}
                    alt="caret-left"
                  />
                </div>
                <div className="cursor-pointer hover:bg-[#1B1D2008] border-[1px] p-[9px] border-[#1B1D201A] flex items-center justify-center rounded-[8px]">
                  <Image
                    src={caretRight}
                    width={20}
                    height={20}
                    alt="caret-right"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px]">
              {weekProducts
                ?.filter((product, index) => index <= 3)
                .map((product, index) => (
                  <Card
                    key={product.id}
                    product={product}
                    index={index}
                    counts={counts}
                    handleCountChange={handleCountChange}
                  />
                ))}
            </div>
            <div className="pt-[40px]" ref={pharmacyRef}>
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                sx={{
                  position: "relative",
                  ".MuiTabs-flexContainer": {
                    gap: "16px",
                    zIndex: 1,
                  },
                }}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#8255E3",
                  },
                }}
              >
                {["აღწერა", "მოიძიე აფთიაქში"].map((label, index) => (
                  <Tab
                    key={label}
                    label={label}
                    sx={{
                      color: tabIndex === index ? "#8255E3" : "#8F95B2", // Active tab color
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "28px",
                      paddingBottom: "9px",
                      "&.Mui-selected": {
                        color: "#8255E3",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -1,
                        left: 0,
                        right: 0,
                        height: "3px",
                        backgroundColor: "#696F8C",
                        transform: "scaleX(0)",
                        transformOrigin: "center",
                      },
                      "&:hover": {
                        color: tabIndex !== index ? "#696F8C" : "#8255E3",
                      },
                      "&:hover::after": {
                        transform:
                          tabIndex !== index ? "scaleX(1)" : "scaleX(0)",
                      },
                    }}
                  />
                ))}
              </Tabs>
              <Divider
                className="w-full"
                sx={{
                  height: "2px",
                  backgroundColor: "#FFFFFF00",
                  position: "relative",
                  top: -2,
                }}
              />
              <div className="mt-[32px]">
                {tabIndex === 0 ? (
                  <div className="flex flex-col">
                    <span className="text-[#474D66] font-medium">
                      თმის საღებავი 4/2 ბი ვიზიბალ - Be Visible 
                    </span>
                    <span className="text-[#474D66] mt-[8px]">
                      BEVISIBLE HAIR COLOR წარმოადგენს პროფესიონალურ თმის
                      საღებავს. ფერთა პალიტრაში წარმოდგენილია 79 ფერადი ნიუანსი,
                      რომელიც 100%-ით ფარავს ჭაღარას, გამოირჩევა ფერის
                      მდგრადობით, თავის კანზე ნაკლები მგრძნობელობითა და
                      გამოყენების სიმარტივით. გააჩნია ამიაკის მინიმალური ( 0.8%
                      ) შემცველობა. საღებავი დამზადებულია ზღვის კოლაგენის
                      ბაზაზე, რომელიც ძლიერი აღმდგენი უნარის წყალობით ღებვის
                      პროცესში თმის ღრმა დატენიანებას უზრუნველყოფს. დამატებითი
                      ინგრედიენტის პანთენოლის წყალობით კი თავის კანზე ყველანაირი
                      უსიამოვნო შეგრძნება მინიმუმამდეა დაყვანილი. სწორედ ეს
                      კომპონენტები ანიჭებენ თმას ბზინვარებასა და ელასტიურობას. 
                    </span>
                    <span className="text-[#474D66] font-medium mt-[8px]">
                      შეღებვის სისტემა
                    </span>
                    <span className="text-[#474D66] mt-[4px]">
                      გახსნის პროპორცია ( საღებავი + გამხსნელი) სტანდარტულად - 1
                      : 1,5 ( 100 მლ. საღებავი + 150 მლ. გამხსნელი ).
                      ულტრაბლონდებთან და სუპერგამაღიავებლებთან - 1 : 2,5 ( 100
                      მლ. საღებავი + 250 მლ. გამხსნელი ). 
                    </span>
                    <span className="text-[#474D66] font-medium mt-[8px]">
                      მოცულობა
                    </span>
                    <span className="text-[#474D66] mt-[4px]">100 მლ. </span>
                    <span className="text-[#474D66] font-medium mt-[8px]">
                      მწარმოებელი ქვეყანა
                    </span>
                    <span className="text-[#474D66] mt-[4px]">იტალია</span>
                    <span className="text-[#474D66] font-medium mt-[8px]">
                      საღებავს არ მოყვება გამხსნელი.
                    </span>
                  </div>
                ) : (
                  <div>
                    <Map hidePagination hideImage />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="rounded-lg border-[1px] border-solid border-[#1B1D201A] p-[24px] w-[364px] sticky top-[0px]">
            <div className="flex justify-between">
              <div className="flex items-center gap-[2px]">
                <Image
                  alt="check icon"
                  src={checkMark}
                  height={20}
                  width={20}
                />

                <span className="text-[#696F8C]">მარაგშია</span>
              </div>
              <span
                className="font-medium cursor-pointer text-[#8255E3]"
                onClick={handleSearchForPharmacy}
              >
                მოიძიე აფთიაქში
              </span>
            </div>
            <div className="flex-1 mt-[24px] items-center justify-between flex text-[16px] leading-[24px] overflow-hidden border-solid border-[1px] border-[#1B1D201A] text-white rounded-[8px]">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (counts === 0) return;
                  setCounts((prevState) => prevState - 1);
                }}
                className="bg-[#1B1D2008] cursor-pointer hover:bg-[#1B1D201F] px-[16px] py-[12px] rounded-tl-[7px] rounded-bl-[7px]"
              >
                <MinusIcon width={24} height={24} />
              </button>
              <div className="text-[#101840] text-[16px] leading-[24px]">
                {counts} შეკვრა
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCounts((prevState) => prevState + 1);
                }}
                className={`bg-[#1B1D2008] cursor-pointer hover:bg-[#1B1D201F] px-[14px] py-[13px] rounded-tr-[7px] rounded-br-[7px] `}
              >
                <PlusIcon width={24} height={24} />
              </button>
            </div>
            <div className="mt-[24px] flex items-center gap-[8px]">
              <div className="text-[#101840] text-[32px] leading-[40px] font-bold">
                29.22₾
              </div>
              <div className="text-[24px] leading-[30px] text-[#696F8C] line-through">
                34.38₾
              </div>
            </div>
            <div className="flex items-center gap-[12px] mt-[24px]">
              <button
                className={`flex justify-center w-[256px] bg-[#EDE3FF] items-center p-[12px] flex-1 text-[16px] leading-[24px] text-white rounded-lg font-medium hover:bg-[#E0D1FF] active:bg-[#CBB2FF]`}
              >
                <Image
                  src={shoppingCartIcon}
                  alt="cart"
                  width={20}
                  height={20}
                  style={{
                    outline: "none",
                    height: "20px",
                    width: "20px",
                  }}
                />
                <div className="ml-[8px] text-[#7143D1] font-normal">
                  დამატება
                </div>
              </button>
              <div
                onClick={() => setFilled((prevState) => !prevState)}
                className="p-[11px] border-[1px] group/svg border-solid border-[#1B1D201A] rounded-[8px] hover:bg-[#1B1D2008]"
              >
                {filled ? (
                  <Image
                    src={filledHeart}
                    style={{ outline: "none", height: "24px", width: "24px" }}
                    alt="heart"
                    width={24}
                    height={24}
                  />
                ) : (
                  <div className="w-[24px] h-[24px]">
                    <HeartIcon />
                  </div>
                )}
              </div>
            </div>
            <button
              className={`flex w-full justify-center items-center p-[12px] text-[16px] leading-[24px] text-white rounded-lg active:bg-[#503095] bg-[#8255E3] hover:bg-[#7143D1] mt-[12px]`}
            >
              ყიდვა
            </button>
            <div className="mt-[24px] flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <Image
                  alt="check icon"
                  src={checkIcon}
                  width={20}
                  height={20}
                />
                <span>მიწოდება სასურველ დროს </span>
              </div>
              <div className="flex items-center gap-[8px]">
                <Image
                  alt="check icon"
                  src={checkIcon}
                  width={20}
                  height={20}
                />
                <span>მიწოდება 1 საათის განმავლობაში;</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <Image
                  alt="check icon"
                  src={checkIcon}
                  width={20}
                  height={20}
                />
                <span>აფთიაქიდან გატანა</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
