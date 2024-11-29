"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";

import productImg from "@/src/assets/images/careers_list.svg";
import filterIcon from "@/src/assets/images/filter.svg";
import SearchIcon from "@/src/icons/SearchIcon";
import PaginationComponent from "@/src/components/Pagination";
import JobPost from "@/src/components/JobPost";
import {
  categoryOptions,
  jobs,
  locationOptions,
} from "@/src/components/constants";
import CloseTagIcon from "@/src/icons/CloseTagIcon";
import DropdownSelect from "@/src/components/Dropdown";
import CustomTextField from "@/src/components/CustomTextfield";

const CareersList = () => {
  const [search, setSearch] = useState("");
  const [showData, setShowData] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const dataRef = useRef<any>(null);
  const [fillColor, setFillColor] = useState("white");

  const handleOutsideClick = (e) => {
    if (dataRef.current && !dataRef?.current?.contains(e.target)) {
      setShowData(false);
    }
  };

  useEffect(() => {
    if (showData) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showData]);

  const handleFilter = (filter: string) => {
    if (selectedFilters?.includes(filter)) {
      setSelectedFilters((prevState) =>
        prevState?.filter((prevFilter) => prevFilter !== filter)
      );
    } else {
      setSelectedFilters((prevState) => [...prevState, filter]);
    }
  };

  const handleSingleFilter = useCallback((item, options) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = [...prevFilters];

      if (newFilters.includes(item)) {
        return newFilters.filter((filter) => filter !== item);
      } else {
        const updatedFilters = newFilters.filter(
          (filter) => !options.some((option) => option.name === filter)
        );
        return [...updatedFilters, item];
      }
    });
  }, []);

  return (
    <div>
      <div className="xl:mx-[168px] web-xl:mx-[80px]">
        <div className="pt-[80px] flex flex-col gap-[48px]">
          <div className="flex items-center justify-center w-full flex-col">
            <div className="text-[16px] leading-[24px] py-[1px] px-[8px] mb-[8px] border-[1px] border-solid border-[#1B1D201A] rounded-[6px] w-auto">
              ვაკანსიები
            </div>
            <h1 className="text-[40px] font-bold leading-[48px] text-[#101840]">
              ვეძებთ გუნდის ახალ წევრებს
            </h1>
            <h3 className="text-[16px] leading-[24px] text-[#474D66] mt-[8px]">
              ჩვენთან იპოვი შენთვის სასურველ ვაკანსიას. შემოგვიერთდი!
            </h3>
          </div>

          <div className="w-full">
            <Image
              src={productImg}
              alt="careers list"
              width={0}
              height={464}
              style={{ width: "100%" }}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="relative">
          <div className="flex  mt-[48px] gap-[16px]">
            <div
              className="cursor-pointer w-[127px] filter-button rounded-[8px] border-[1px] flex items-center gap-[8px] p-[15px] pl-[11px] border-solid border-[#1B1D201A] hover:bg-[#1B1D200F]"
              onClick={(e) => {
                e.stopPropagation();
                setShowData((prevState) => !prevState);
              }}
            >
              <Image
                src={filterIcon}
                width={20}
                height={20}
                alt="filter icon"
              />
              <div>ფილტრი</div>
            </div>
            <CustomTextField
              placeholder="მოძებნე სასურველი ვაკანსია"
              search={search}
              setSearch={setSearch}
              width={537}
            />

            <DropdownSelect
              attribute="name"
              multiple
              placeholder="აირჩიე კატეგორია"
              value={selectedFilters}
              options={categoryOptions}
              onChange={handleFilter}
            />
            <DropdownSelect
              attribute="name"
              placeholder="აირჩიე მდებარეობა"
              value={selectedFilters}
              options={locationOptions}
              onChange={handleSingleFilter}
            />
          </div>
          {showData && (
            <div
              ref={dataRef}
              style={{
                boxShadow: "0px 8px 40px -8px #172B4D14",
              }}
              className="absolute flex flex-col z-[30] bg-[#fff] w-[1200px] cursor-pointer rounded-[6px] border-[1px] gap-[24px] p-[24px] border-solid border-[#1B1D201A] top-[64px]"
            >
              <div>
                <h3 className="text-[#474D66] font-medium pl-[4px] mb-[8px]">
                  სამუშაო დროის მიხედვით
                </h3>
                <div className="flex gap-[8px]">
                  {[
                    "სრული განაკვეთი",
                    "ნახევარი განაკვეთი",
                    "მოქნილი გრაფიკი",
                    "დროებითი",
                  ].map((filter) => (
                    <div
                      key={filter}
                      onClick={() => handleFilter(filter)}
                      className={`px-[11px] py-[9px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] ${
                        selectedFilters.includes(filter)
                          ? "bg-[#1B1D200F]"
                          : "hover:bg-[#1B1D200F]"
                      }`}
                    >
                      {filter}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[#474D66] font-medium pl-[4px] mb-[8px]">
                  მდებარეობის მიხედვით
                </h3>
                <div className="flex gap-[8px]">
                  {["ადგილზე", "ჰიბრიდული", "დისტანციური"].map((location) => (
                    <div
                      key={location}
                      onClick={() => handleFilter(location)}
                      className={`px-[11px] py-[9px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] ${
                        selectedFilters.includes(location)
                          ? "bg-[#1B1D200F]"
                          : "hover:bg-[#1B1D200F]"
                      }`}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {!!selectedFilters?.length && (
          <div className="flex gap-[16px] mt-[24px] mb-[32px] items-start">
            <button
              onClick={() => setSelectedFilters([])}
              className="bg-[#1B1D200F] rounded-[4px] cursor-pointer text-[14px] leading-[22px] px-[12px] py-[5px] hover:bg-[#1B1D2033] flex-shrink-0"
            >
              ფილტრის წაშლა
            </button>
            <div className="flex flex-wrap gap-[8px]">
              {selectedFilters?.map((selectedFilter) => (
                <div
                  key={selectedFilter}
                  className="items-center flex gap-[4px] py-[3px] pl-[9px] pr-[3px] bg-[#FFFFFF00] text-[#101840] border-[1px] border-solid border-[#1B1D201A] rounded-[6px]"
                >
                  {selectedFilter}
                  <div
                    onClick={() => handleFilter(selectedFilter)}
                    className="cursor-pointer hover:bg-[#1B1D200F] w-[22px] h-[22px]"
                  >
                    <CloseTagIcon className="fill-white group-hover:fill-[#1B1D200F]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pb-[48px]">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-[24px] mt-[32px]">
            {jobs.map((job, index) => (
              <JobPost key={index} {...job} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[48px] mb-[80px]">
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

export default CareersList;
