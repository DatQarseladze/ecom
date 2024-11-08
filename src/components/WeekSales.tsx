import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import productImg4 from "../assets/images/product_img_container.png";
import productImg2 from "../assets/images/product_img_container_2.png";
import productImg3 from "../assets/images/product_img_container_3.png";
import productImg6 from "../assets/images/product_img_container_4.png";
import productImg from "../assets/images/product_img_container_6.png";
import productImg5 from "../assets/images/product_img_container_5.png";
import productImg7 from "../assets/images/product_img_container_7.png";
import productImg8 from "../assets/images/product_img_container_8.png";
import heartIcon from "../assets/images/heart.svg";
import leafIcon from "../assets/images/leaf.svg";
import starIcon from "../assets/images/star.svg";
import clockIcon from "../assets/images/clock.svg";
import organIcon from "../assets/images/organ.svg";
import ratingIcon from "../assets/images/rating.svg";
import bestsellerIcon from "../assets/images/bestseller.svg";
import dotIcon from "../assets/images/dot.svg";
import voltIcon from "../assets/images/volt.svg";
import truckIcon from "../assets/images/truck.svg";
import wastingTimeIcon from "../assets/images/wasting-time.svg";
import filledHeart from "../assets/images/filled-heart.svg";
import ReusableBadge from "./ReusableBadge";

const products = [
  {
    id: 1,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg,
  },
  {
    id: 2,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg4,
  },
  {
    id: 3,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg2,
    // img: "https://s3-alpha-sig.figma.com/img/2588/fd0c/d8dc0d6771382686d844189da17c77d0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwEiACW7rJMBGznYAHUo1Q0U03809XsZJvt8onn6j~Ayms2Eg7SCHDJosKMc9uUExb4yOII9pwhFuupTobGPg1Vdw9uuj44A6RKIGKeZ64gqrPsUiwDht2u5RNF0Fw5UeDC0cVifOUyRs6~lTIWpofLGL2PU0cIG1w7i4tMGTCV-oh3TTiAj0OmZKs0CwhEug8pWAn~RRlSLyRQ5lu~aEL8bRRIFhVEau468YKVD4TR0AK5mCTig7rQGYXNv-Bo8ig6SHF67DAdgF7HiapxBwqFxV0NsDwRybURF4W52IJzjamlxYNSx0SPG8j81BkjHOSkCwvbxKDiY-1EEtkFgtw__",
  },
  {
    id: 4,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg7,
  },
  {
    id: 5,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg6,
  },
  {
    id: 6,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg5,
  },
  {
    id: 7,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg8,
  },
  {
    id: 7,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg3,
  },
];

const ProductList = () => {
  return (
    <div className="xl:mx-[168px] bg-[#FBFBFD] px-auto pt-[64px] pb-[80px]">
      <div className="py-[4px] flex items-center justify-between mb-[48px]">
        <h2 className="text-[24px] leading-[32px] text-[#474D66] font-bold">
          კვირის ფასდაკლებები
        </h2>
        <div className="flex items-center gap-[16px]">
          <h3 className="text-[16px] text-[#101840] leading-[24px]">
            ყველას ნახვა
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => {
          const [filled, setFilled] = useState(false);
          return (
            <Box
              key={product.id}
              className="rounded-lg p-[24px] cursor-pointer shadow-sm relative bg-[#FFFFFF]"
              sx={{
                "&:hover": { boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
              }}
            >
              <div className="flex items-center justify-between w-full">
                <div className="bg-[#8255E3] w-[63px] border-[1px] border-solid border-[#8255E3] text-white rounded-lg px-[6px] text-[20px] leading-[28px] font-bold">
                  {product.discount}
                </div>
                <div className="flex space-x-2">
                  {index === 0 ? (
                    <ReusableBadge
                      iconSrc={organIcon}
                      bgColor={"#01B21E"}
                      borderColor={"#A3E6CD"}
                      label={"ორგანული"}
                    />
                  ) : index === 1 ? (
                    <ReusableBadge
                      iconSrc={wastingTimeIcon}
                      bgColor={"#D14343"}
                      borderColor={"#EE9191"}
                      label={"შეზღუდული მარაგი"}
                    />
                  ) : index === 2 ? (
                    <ReusableBadge
                      iconSrc={dotIcon}
                      bgColor={"#219653"}
                      borderColor={"#A3E6CD"}
                      label={"მხოლოდ ონლაინ"}
                    />
                  ) : (
                    <ReusableBadge
                      iconSrc={starIcon}
                      bgColor={"#FFD000"}
                      borderColor={"#ffd000"}
                      hoverBorderColor={"#E4AA16"}
                      hoverBgColor={"#D8A219"}
                      label={"ექსკლუზივი"}
                    />
                  )}
                  {index === 0 ? (
                    <ReusableBadge
                      iconSrc={ratingIcon}
                      bgColor={"#F18D13"}
                      borderColor={"#FAA53D"}
                      label={"ყველაზე რეიტინგული"}
                    />
                  ) : index === 1 ? (
                    <ReusableBadge
                      iconSrc={bestsellerIcon}
                      bgColor={"#ED55C2"}
                      borderColor={"#F499DA"}
                      label={"ბესტსელერი"}
                    />
                  ) : index === 2 ? (
                    <ReusableBadge
                      iconSrc={voltIcon}
                      bgColor={"#9A6DF9"}
                      borderColor={"#CBB2FF"}
                      label={"სიახლე"}
                    />
                  ) : (
                    <ReusableBadge
                      iconSrc={leafIcon}
                      bgColor={"#82B536"}
                      borderColor={"#94C748"}
                      label={"ვეგანური"}
                    />
                  )}
                  {index === 3 && (
                    <ReusableBadge
                      iconSrc={truckIcon}
                      bgColor={"#3366FF"}
                      borderColor={"#9DB5FF"}
                      label={"უფასო მიწოდება"}
                    />
                  )}
                  {index === 2 && (
                    <ReusableBadge
                      iconSrc={clockIcon}
                      bgColor={"#FFD000"}
                      borderColor={"#FFD000"}
                      hoverBorderColor={"#E4AA16"}
                      hoverBgColor={"#D8A219"}
                      label={"21 ოქტ - 30 ოქტ"}
                    />
                  )}
                </div>
              </div>

              <div className="overflow-hidden rounded-md">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={378}
                  height={296}
                  style={{ objectFit: "cover", height: "296px" }}
                  className="w-full transition-transform duration-300 hover:scale-150 hover:origin-top" // Adjust scale and set origin to top
                />
              </div>
              <div className="flex flex-col">
                {/* Product Title with Ellipsis */}
                <h3 className="text-[20px] leading-[28px] text-[#101840] font-bold overflow-hidden text-ellipsis break-all line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center mt-[8px] ">
                  <span className="text-[#101840] font-bold text-[24px] leading-[32px]">
                    {product.price}
                  </span>
                  <span className="line-through text-[#8F95B2] text-[20px] ml-[8px]">
                    {product.originalPrice}
                  </span>
                </div>
                <div className="flex mt-[16px] items-center py-[4px]">
                  <button className="p-[12px] flex-1 text-[16px] mr-[12px] leading-[24px] bg-[#8255E3] text-white rounded-lg font-medium">
                    კალათაში დამატება
                  </button>
                  <div
                    onClick={() => setFilled((prevState) => !prevState)}
                    className="p-[11px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] hover:bg-[#1B1D2008]"
                  >
                    {filled ? (
                      <Image
                        src={filledHeart}
                        style={{
                          outline: "none",
                          height: "24px",
                          width: "24px",
                        }}
                        alt="heart"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={heartIcon}
                        style={{
                          outline: "none",
                          height: "24px",
                          width: "24px",
                        }}
                        alt="heart"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
