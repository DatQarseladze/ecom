import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import productImg1 from "../assets/images/product.png";
import productImg2 from "../assets/images/product.png";
import productImg3 from "../assets/images/product1.png";
import productImg4 from "../assets/images/product2.png";
import caretRight from "../assets/images/caret-right.svg";
import caretLeft from "../assets/images/caret-left.svg";
import heartIcon from "../assets/images/heart.svg";
import leafIcon from "../assets/images/leaf.svg";
import starIcon from "../assets/images/star.svg";

const products = [
  {
    id: 1,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg1,
  },
  {
    id: 2,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg2,
  },
  {
    id: 3,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg3,
  },
  {
    id: 4,
    discount: "-42%",
    title: "La Roche-Posay - ლა როშ-პოზე სკრაბი მგრძნობიარე კანისთვის 50 მლ",
    price: "₾58.48",
    originalPrice: "₾97.47",
    img: productImg4,
  },
];

const ProductList = () => {
  return (
    <div className="xl:mx-[168px] px-auto pt-[64px] pb-[80px]">
      <div className="py-[4px] flex items-center justify-between mb-[48px]">
        <h2 className="text-[24px] leading-[32px] text-[#474D66] font-bold">
          ტოპ გაყიდვადი
        </h2>
        <div className="flex items-center gap-[16px]">
          <h3 className="text-[16px] text-[#101840] leading-[24px]">
            ყველას ნახვა
          </h3>
          <div className="flex items-center">
            <div className="cursor-pointer border-[1px] p-[20px] border-[#1B1D2008] flex items-center justify-center rounded-[8px]">
              <Image src={caretLeft} width={20} height={20} alt="caret-left" />
            </div>
            <div className="cursor-pointer border-[1px] p-[20px] border-[#1B1D201A] flex items-center justify-center rounded-[8px]">
              <Image
                src={caretRight}
                width={20}
                height={20}
                alt="caret-right"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Box
            key={product.id}
            className="rounded-lg p-[24px] cursor-pointer shadow-sm relative bg-[#FFFFFF]"
            sx={{
              "&:hover": { boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
            }}
          >
            <div className="flex items-center justify-between">
              <div className="bg-[#8A2BE2] text-white rounded-lg py-[2px] px-[8px] text-[20px] leading-[28px] font-bold">
                {product.discount}
              </div>
              <div className="flex space-x-2">
                <div className="cursor-pointer bg-[#FFD000] w-[32px] h-[32px] flex items-center justify-center rounded-[8px]">
                  <Image
                    src={starIcon}
                    width={16}
                    height={16}
                    alt="star icon"
                  />
                </div>
                <div className="cursor-pointer bg-[#61BF1A] w-[32px] h-[32px] flex items-center justify-center rounded-[8px]">
                  <Image
                    src={leafIcon}
                    width={16}
                    height={16}
                    alt="heart icon"
                  />
                </div>
              </div>
            </div>

            <Image
              src={product.img}
              alt={product.title}
              width={378}
              height={296}
              style={{ objectFit: "cover", height: "296px" }}
              className="w-full rounded-md"
            />
            <div className="flex flex-col">
              {/* Product Title with Ellipsis */}
              <h3 className="text-[20px] leading-[28px] text-[#101840] font-bold overflow-hidden text-ellipsis line-clamp-2">
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
                <div className="p-[11px] border-[1px] border-solid border-[#1B1D201A] mr-[4px] rounded-[8px] hover:bg-[#1B1D2008]">
                  <Image src={heartIcon} alt="heart" width={24} height={24} />
                </div>
              </div>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
