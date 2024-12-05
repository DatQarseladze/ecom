import { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import ReusableBadge from "./ReusableBadge";
import { dotIcon, truckIcon } from "./constants";
import MinusIcon from "@/src/icons/MinusIcon";
import PlusIcon from "@/src/icons/PlusIcon";
import HeartIcon from "@/src/icons/HeartIcon";
import shoppingCartIcon from "@/src/assets/images/shopping-cart.svg";
import filledHeart from "@/src/assets/images/filled-heart.svg";

interface Product {
  id: number;
  title: string;
  img: any;
  price: string;
  originalPrice: string;
  discount: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  counts: any;
  handleCountChange: (index: number, delta: number) => void;
}

const Card = ({
  product,
  index,
  counts,
  handleCountChange,
}: ProductCardProps) => {
  const [filled, setFilled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <Box
      key={product.id}
      sx={{ boxShadow: "0px 8px 40px -8px #172B4D14" }}
      className="rounded-lg group p-[16px] cursor-pointer bg-[#FFFFFF] relative"
    >
      <div className="flex items-center flex-end w-full">
        <div className="flex w-full space-x-[4px]">
          <ReusableBadge
            iconSrc={dotIcon}
            bgColor="#1F8951"
            borderColor="#A3E6CD"
            label={
              index === 0
                ? "მხოლოდ ონლაინ"
                : index === 1
                  ? "შეზღუდული მარაგი"
                  : "ორგანული"
            }
          />
          {index === 3 && (
            <ReusableBadge
              iconSrc={truckIcon}
              bgColor="#2F5EEA"
              borderColor="#9DB5FF"
              label="უფასო მიწოდება"
            />
          )}
        </div>
      </div>

      <div className="relative flex rounded-md">
        {/* <Image
          src={product.img}
          alt={product.title}
          width={278.4}
          height={220}
          style={{ objectFit: "cover", height: "220px" }}
          className="w-full transition-transform duration-300 hover:scale-110 hover:origin-top"
        /> */}
        <img
          src={product.img.src}
          className="w-full h-[220px] transition-transform duration-300 hover:scale-110 hover:origin-top"
          alt={product.title}
        />
        <div className="absolute bottom-[-8px] w-[63px] bg-[#9A6DF9] text-white rounded-md py-[2px] px-[8px] text-[20px] leading-[28px] font-bold">
          {product.discount}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center mt-[16px]">
          <span className="text-[#101840] font-bold text-[24px] leading-[32px]">
            {product.price}
          </span>
          <span className="line-through text-[#8F95B2] text-[20px] ml-[8px]">
            {product.originalPrice}
          </span>
        </div>

        <div className="relative mt-[8px]">
          <h3
            className={`text-[#101840] font-medium overflow-hidden text-ellipsis break-words line-clamp-2 group-hover:hidden ${counts[index] ? "hidden" : ""}`}
          >
            {product.title}
          </h3>

          <div
            className={`flex items-center opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-300 ${counts[index] ? "visible opacity-100" : "hidden"}`}
          >
            {!counts[index] ? (
              <button
                onClick={() => {
                  setIsClicked(true);
                  handleCountChange(index, 1);
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className={`flex justify-center items-center p-[12px] flex-1 text-[16px] mr-[12px] leading-[24px] ${isClicked ? "bg-[#503095]" : "bg-[#8255E3] hover:bg-[#7143D1]"}   text-white rounded-lg font-medium`}
              >
                <Image
                  src={shoppingCartIcon}
                  alt="cart"
                  width={20}
                  height={20}
                  style={{ outline: "none", height: "20px", width: "20px" }}
                />
                <div className="ml-[8px] font-normal">დამატება</div>
              </button>
            ) : (
              <div className="flex-1 items-center justify-between flex text-[16px] mr-[12px] leading-[24px] overflow-hidden border-solid border-[1px] border-[#1B1D201A] text-white rounded-[8px]">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCountChange(index, -1);
                    setIsClicked(false);
                  }}
                  className="bg-[#1B1D2008] cursor-pointer hover:bg-[#1B1D201F] px-[14px] py-[13px] rounded-tl-[7px] rounded-bl-[7px]"
                >
                  <MinusIcon />
                </button>
                <div className="text-[#101840] text-[16px] leading-[24px]">
                  {counts[index]} შეკვრა
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCountChange(index, 1);
                  }}
                  disabled={counts[index] === 10}
                  className={`bg-[#1B1D2008] cursor-pointer hover:bg-[#1B1D201F] px-[14px] py-[13px] rounded-tr-[7px] rounded-br-[7px] ${counts[index] === 10 ? "opacity-50" : ""}`}
                >
                  <PlusIcon />
                </button>
              </div>
            )}
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
        </div>
      </div>
    </Box>
  );
};

export default Card;
