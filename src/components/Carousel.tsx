"use client";

import { items } from "../Items.json";
import { useEffect, useState } from "react";
import carouselImg from "../assets/images/carousel.jpg";
import styles from "../app/[locale]/(routes)/profile/Bootstrap.module.css"; // Your CSS module
import Image from "next/image";
import rightArrow from "../assets/images/right-arrow.png";
import leftArrow from "../assets/images/left-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "./styles.css";

const Page = () => {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mt-[24px]" style={{ height: "552px", position: "relative" }}>
      <div className="swiper-button image-swiper-button-next">
        <Image src={rightArrow} alt="right arrow" width={24} height={44} style={{height: '44px'}} />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <Image src={leftArrow} alt="left arrow" width={24} height={44} style={{height: '44px'}} />
      </div>
      <Swiper
        autoplay={{
          delay: 4000, // Slide transition interval in milliseconds
          disableOnInteraction: false, // Keeps autoplay active even after interactions
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
        className="mySwiper"
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)} // Update index on slide change
      >
        {bootstrap.map((item, slideIndex) => (
          <SwiperSlide key={slideIndex}> {/* Unique key for each slide */}
            <Image
              className={styles.image}
              src={carouselImg}
              alt="slides"
              fill // Use fill or any other appropriate layout prop
              style={{ objectFit: 'cover' }} // Adjust how the image fits
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Page;
