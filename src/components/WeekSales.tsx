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
import caretRight from "../assets/images/caret-right.svg";
import caretLeft from "../assets/images/caret-left.svg";
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
    img: productImg8
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
                <div className="bg-[#8A2BE2] text-white rounded-lg py-[2px] px-[8px] text-[20px] leading-[28px] font-bold">
                  {product.discount}
                </div>
                <div className="flex space-x-2">
                  {index === 0 ? (
                    <OrganButton />
                  ) : index === 1 ? (
                    <WastingTimeButton />
                  ) : index === 2 ? (
                    <DotButton />
                  ) : (
                    <StarButton />
                  )}
                  {index === 0 ? (
                    <RatingButton />
                  ) : index === 1 ? (
                    <BestsellerButton />
                  ) : index === 2 ? (
                    <VoltButton />
                  ) : (
                    <VeganButton />
                  )}
                  {index === 3 && <TruckButton />}
                  {index === 2 && <ClockButton />}
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

const VoltButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center border-[1px] bg-[#9A6DF9] border-solid border-[#CBB2FF] h-[32px] px-[8px] rounded-[8px] transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={voltIcon} width={16} height={16} alt="star icon" />
      </div>
      <div
        className={`text-[16px] leading-[28px] text-white transition-all duration-500 ease-in-out ${
          isHovered
            ? "opacity-100 max-w-xs transform scale-100"
            : "opacity-0 max-w-0 transform scale-0"
        }`}
        style={{
          visibility: isHovered ? "visible" : "hidden",
          marginLeft: isHovered ? "8px" : "0",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <span>სიახლე</span>
      </div>
    </div>
  );
};

const BestsellerButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center border-[1px] bg-[#ED55C2] border-solid border-[#F499DA] h-[32px] px-[8px] rounded-[8px] transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={bestsellerIcon} width={16} height={16} alt="star icon" />
      </div>
      <div
        className={`text-[16px] leading-[28px] text-white transition-all duration-500 ease-in-out ${
          isHovered
            ? "opacity-100 max-w-xs transform scale-100"
            : "opacity-0 max-w-0 transform scale-0"
        }`}
        style={{
          visibility: isHovered ? "visible" : "hidden",
          marginLeft: isHovered ? "8px" : "0",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <span>ბესტსელერი</span>
      </div>
    </div>
  );
};

const WastingTimeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center border-[1px] bg-[#D14343] border-solid border-[#EE9191] h-[32px] px-[8px] rounded-[8px] transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={wastingTimeIcon} width={16} height={16} alt="star icon" />
      </div>
      <div
        className={`text-[16px] leading-[28px] text-white transition-all duration-500 ease-in-out ${
          isHovered
            ? "opacity-100 max-w-xs transform scale-100"
            : "opacity-0 max-w-0 transform scale-0"
        }`}
        style={{
          visibility: isHovered ? "visible" : "hidden",
          marginLeft: isHovered ? "8px" : "0",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <span>შეზღუდული მარაგი</span>
      </div>
    </div>
  );
};

const TruckButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center border-[1px] bg-[#3366FF] border-solid border-[#9DB5FF] h-[32px] px-[8px] rounded-[8px] transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={truckIcon} width={16} height={16} alt="star icon" />
      </div>
      <div
        className={`text-[16px] leading-[28px] text-white transition-all duration-500 ease-in-out ${
          isHovered
            ? "opacity-100 max-w-xs transform scale-100"
            : "opacity-0 max-w-0 transform scale-0"
        }`}
        style={{
          visibility: isHovered ? "visible" : "hidden",
          marginLeft: isHovered ? "8px" : "0",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <span>უფასო მიწოდება</span>
      </div>
    </div>
  );
};

const DotButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center border-[1px] bg-[#219653] border-solid border-[#A3E6CD] h-[32px] px-[8px] rounded-[8px] transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={dotIcon} width={16} height={16} alt="star icon" />
      </div>
      <div
        className={`text-[16px] leading-[28px] text-white transition-all duration-500 ease-in-out ${
          isHovered
            ? "opacity-100 max-w-xs transform scale-100"
            : "opacity-0 max-w-0 transform scale-0"
        }`}
        style={{
          visibility: isHovered ? "visible" : "hidden",
          marginLeft: isHovered ? "8px" : "0",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <span>მხოლოდ ონლაინ</span>
      </div>
    </div>
  );
};
const RatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center border-[1px] bg-[#F18D13] border-solid border-[#FAA53D] h-[32px] px-[8px] rounded-[8px] transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={ratingIcon} width={16} height={16} alt="star icon" />
      </div>
      <div
        className={`text-[16px] leading-[28px] text-white transition-all duration-500 ease-in-out ${
          isHovered
            ? "opacity-100 max-w-xs transform scale-100"
            : "opacity-0 max-w-0 transform scale-0"
        }`}
        style={{
          visibility: isHovered ? "visible" : "hidden",
          marginLeft: isHovered ? "8px" : "0",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <span>ყველას რეიტინგული</span>
      </div>
    </div>
  );
};

const OrganButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center border-[1px] bg-[#01B21E] border-solid border-[#A3E6CD] h-[32px] px-[8px] transition-all duration-500 ease-in-out rounded-[8px] bg-[#FFD000] overflow-hidden ${
        isHovered ? "max-w-[150px]" : "max-w-[32px]"
      }
          `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={organIcon} width={16} height={16} alt="star icon" />
      </div>
      {isHovered && (
        <div
          className={`ml-[4px] text-[16px] leading-[28px] text-white transition-transform duration-500 ${
            isHovered ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          ორგანული
        </div>
      )}
    </div>
  );
};

const ClockButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center border-[1px] border-solid border-[#ffd000] h-[32px] px-[8px] transition-all duration-500 ease-in-out rounded-[8px] bg-[#FFD000] overflow-hidden ${
        isHovered
          ? "max-w-[150px] bg-[#E4AA16] border-[#e4aa16]"
          : "max-w-[32px]"
      }
          `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={clockIcon} width={16} height={16} alt="star icon" />
      </div>
      {isHovered && (
        <div
          className={`ml-[4px] text-[16px] leading-[28px] text-white transition-transform duration-500 ${
            isHovered ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          21 ოქტ - 30 ოქტ
        </div>
      )}
    </div>
  );
};

const StarButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center border-[1px] border-solid border-[#ffd000] h-[32px] px-[8px] transition-all duration-500 ease-in-out rounded-[8px] bg-[#FFD000] overflow-hidden ${
        isHovered
          ? "max-w-[150px] bg-[#E4AA16] border-[#e4aa16]"
          : "max-w-[32px]"
      }
          `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={starIcon} width={16} height={16} alt="star icon" />
      </div>
      {isHovered && (
        <div
          className={`ml-[4px] text-[16px] leading-[28px] text-white transition-transform duration-500 ${
            isHovered ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          ექსკლუზივი
        </div>
      )}
    </div>
  );
};

const VeganButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center border-[1px] border-solid border-[#94C748] h-[32px] px-[8px] transition-all duration-500 ease-in-out rounded-[8px] bg-[#82B536] overflow-hidden ${
        isHovered ? "max-w-[150px]" : "max-w-[32px]"
      }
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={leafIcon} width={16} height={16} alt="leaf icon" />
      </div>
      {isHovered && (
        <div
          className={`ml-[4px] text-[16px] leading-[28px] text-white transition-transform duration-500 ${
            isHovered ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          ვეგანური
        </div>
      )}
    </div>
  );
};

export default ProductList;
