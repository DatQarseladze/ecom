"use client";
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import {} from "@/src/components/constants";

import {
  brands,
  brandlogos,
  countries,
  brandCategoryOptions,
  countriesOptions,
} from "@/src/components/constants";
import CloseTagIcon from "@/src/icons/CloseTagIcon";

import CustomTextField from "@/src/components/CustomTextfield";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");

import PaginationComponent from "@/src/components/Pagination";
import DropdownSelect from "@/src/components/Dropdown";

const Events = () => {
  const [search, setSearch] = useState("");
  const [showData, setShowData] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const dataRef = useRef<any>(null);

  const handleOutsideClick = (e) => {
    if (dataRef.current && !dataRef?.current?.contains(e.target)) {
      setShowData(false);
    }
  };

  const handleFilter = (filter: string) => {
    if (selectedFilters?.includes(filter)) {
      setSelectedFilters((prevState) =>
        prevState?.filter((prevFilter) => prevFilter !== filter)
      );
    } else {
      setSelectedFilters((prevState) => [...prevState, filter]);
    }
  };

  const handleSingleFilter = (item, options) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = [...prevFilters];

      if (newFilters.includes(item)) {
        return newFilters.filter((filter) => filter !== item);
      } else {
        const updatedFilters = newFilters.filter(
          (filter) => !options.some((option) => option === filter)
        );
        return [...updatedFilters, item];
      }
    });
  };

  useEffect(() => {
    if (showData) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showData]);

  return (
    <div className="2xl:px-[168px] max-2xl:px-[168px] bg-[#FBFBFD]">
      <div className="pt-[80px] pb-[24px]">
        <h1 className="text-[40px] leading-[48px] text-[#101840] font-bold text-center">
          ბრენდები
        </h1>
        <div className="mt-[80px] mb-[80px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-[24px]">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex rounded-[8px] bg-[#fff] w-[378px] items-center justify-center py-[30px] px-[65px] h-[140px] overflow-visible"
              style={{
                boxShadow: "0px 8px 40px -8px #172B4D14",
              }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                height={80}
                width={247}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="relative pt-[48px]">
          <div className="flex gap-[16px]">
            <CustomTextField
              placeholder={"ჩაწერე სასურველი ბრენდი"}
              search={search}
              setSearch={setSearch}
            />
            <DropdownSelect
              attribute="name"
              multiple
              placeholder="კატეგორიები"
              value={selectedFilters}
              options={brandCategoryOptions}
              onChange={handleFilter}
              backgroundColor="#FFFFFF00"
            />
            <DropdownSelect
              attribute="name"
              multiple
              placeholder="ქვეყანა"
              value={selectedFilters}
              options={countriesOptions}
              onChange={handleFilter}
              withFlag
              withPagination
              backgroundColor="#FFFFFF00"
            />
          </div>
        </div>
        {selectedFilters?.length ? (
          <div className="flex gap-[16px] mt-[24px] mb-[48px] items-start">
            <button
              onClick={() => setSelectedFilters([])}
              className="bg-[#1B1D200F] rounded-[4px] cursor-pointer text-[14px] leading-[22px] px-[12px] py-[5px] hover:bg-[#1B1D2033] h-[34px] whitespace-nowrap"
            >
              ფილტრის წაშლა
            </button>
            <div className="flex flex-wrap gap-[8px]">
              {selectedFilters?.map((selectedFilter) => {
                const flag = countries?.find(
                  (country) => country.name === selectedFilter
                )?.flag;

                return (
                  <div className="items-center flex gap-[4px] py-[3px] pl-[9px] pr-[3px] bg-[#FFFFFF00] text-[#101840] border-[1px] border-solid border-[#1B1D201A] rounded-[6px]">
                    {flag ? (
                      <Image src={flag} width={24} height={16} alt="flag" />
                    ) : null}
                    {selectedFilter}
                    <div
                      onClick={() => handleFilter(selectedFilter)}
                      className="cursor-pointer hover:bg-[#1B1D200F] w-[22px] h-[22px]"
                    >
                      <CloseTagIcon className="fill-white group-hover:fill-[#1B1D200F]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        <div className="flex gap-[4px] my-[48px]">
          {alphabet.map((letter) => (
            <span
              key={letter}
              onClick={() => {
                handleSingleFilter(letter, alphabet);
              }}
              className={`flex justify-center items-center rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] hover:bg-[#1B1D200F] cursor-pointer w-[48px] h-[48px]
                 ${selectedFilters?.includes(letter) ? `bg-[#1B1D200F]` : ""}`}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="">
          <Box
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[24px]"
            sx={{
              width: "100%",
              flexWrap: "wrap",
              "@media (max-width: 768px)": {
                justifyContent: "center",
              },
            }}
          >
            {brandlogos.map((brand, index) => (
              <Box
                key={brand.name}
                style={{
                  boxShadow: "box-shadow: 0px 8px 40px -8px #172B4D14",
                }}
                className="hover:bg-[#1B1D2008] border-solid hover:border-[1px] hover:border-[#1B1D201A] active:bg[#1B1D200F] active:border-[#1B1D203D] bg-[#fff] rounded-[8px]"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "16px",
                  height: "104px",
                  boxSizing: "border-box",
                  width: "297.6px",
                  cursor: "pointer",
                  filter: "grayscale(100%)",
                  transition: "filter 0.3s ease",
                  "&:hover": {
                    filter: "none",
                  },
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={148}
                  height={48}
                  layout="fixed"
                  style={{
                    objectFit: "contain",
                    width: "148px",
                    height: "48px",
                  }}
                />
              </Box>
            ))}
          </Box>
        </div>
        <div className="flex justify-center mt-[48px] mb-[56px]">
          <PaginationComponent
            totalPages={10}
            currentPage={1}
            onPageChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
