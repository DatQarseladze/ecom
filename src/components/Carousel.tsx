"use client";

import { items } from "../Items.json";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/carousel.css";
import carouselImg from "../assets/images/carousel.png";
import styles from "../app/[locale]/(routes)/profile/Bootstrap.module.css"; // Your CSS module
import Image from "next/image";
import "../app/[locale]/(routes)/profile/Bootstrap.module.css";
import rightArrow from "../assets/images/right-arrow.png";
// import "./test.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./styles.css";

const images = [
  {
    original: "https://mdbcdn.b-cdn.net/img/new/slides/040.webp",
    thumbnail: "https://mdbcdn.b-cdn.net/img/new/slides/040.webp",
  },
  {
    original: "https://mdbcdn.b-cdn.net/img/new/slides/040.webp",
    thumbnail: "https://mdbcdn.b-cdn.net/img/new/slides/040.webp",
  },
  {
    original: "https://mdbcdn.b-cdn.net/img/new/slides/040.webp",
    thumbnail: "https://mdbcdn.b-cdn.net/img/new/slides/040.webp",
  },
];

const Page = () => {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ height: "500px", position: "relative" }}>
      <div className="swiper-button mr-[10px] image-swiper-button-next">
        <Image src={rightArrow} alt="right arrow" width={24} height={44} />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <Image src={rightArrow} alt="right arrow" />
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
        {/* {images?.map(() => {
        <SwiperSlide>Slide 1</SwiperSlide>

        })} */}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {/* <button className="arrow-left arrow">Prwwwwev</button> */}
        {/* <button className="arrow-right arrow">next</button> */}
      </Swiper>
    </div>
  );
};

export default Page;
