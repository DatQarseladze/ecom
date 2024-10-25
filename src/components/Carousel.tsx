"use client";

import { items } from "../Items.json";
import { useEffect, useState } from "react";
import carouselImg from "../assets/images/carousel.png";
import styles from "../app/[locale]/(routes)/profile/Bootstrap.module.css"; // Your CSS module
import Image from "next/image";
import "../app/[locale]/(routes)/profile/Bootstrap.module.css";
import rightArrow from "../assets/images/right-arrow.png";
import leftArrow from "../assets/images/left-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./styles.css";


const Page = () => {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mt-[24px]" style={{ height: "500px", position: "relative" }}>
      <div className="swiper-button mr-[10px] image-swiper-button-next">
        <Image src={rightArrow} alt="right arrow" width={24} height={44} />
      </div>
      <div className="swiper-button ml-[10px] image-swiper-button-prev">
        <Image src={leftArrow} alt="left arrow" width={24} height={44} />
      </div>
      <Swiper
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {bootstrap.map((item) => (
          <SwiperSlide>
            <Image
              className={styles.image}
              src={carouselImg}
              alt="slides"
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Page;
