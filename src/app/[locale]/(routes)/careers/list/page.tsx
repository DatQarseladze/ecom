"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";

import productImg from "../../../../../assets/images/careers_list.svg";
import filterIcon from "../../../../../assets/images/filter.svg";
import closeTag from "../../../../../assets/images/close_tag.svg";
import SearchIcon from "@/src/icons/SearchIcon";
import PaginationComponent from "@/src/components/Pagination";
import JobPost from "@/src/components/JobPost";
import { jobs } from "@/src/components/constants";
import CloseTagIcon from "@/src/icons/CloseTagIcon";

const CareersList = () => {
  const [activeTab, setActiveTab] = useState<string>("ongoing"); // Initial active tab
  const [search, setSearch] = useState("");
  const [showData, setShowData] = useState(false); // State to toggle visibility of the data
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const dataRef = useRef<any>(null); // Reference for the element to detect outside clicks
  const [fillColor, setFillColor] = useState("white");

  console.log(showData, "SHOW DATA");

  const handleOutsideClick = (e) => {
    // Check if the click is outside the data element
    if (dataRef.current && !dataRef?.current?.contains(e.target)) {
      setShowData(false); // Close the data when clicking outside
    }
  };

  useEffect(() => {
    if (showData) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Clean up the event listener on component unmount
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
            {/* Filter Button */}
            <div
              className="cursor-pointer w-[127px] filter-button rounded-[8px] border-[1px] flex items-center gap-[8px] p-[15px] pl-[11px] border-solid border-[#1B1D201A] hover:bg-[#1B1D200F]"
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click from propagating to the outside click handler
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
            <TextField
              fullWidth
              value={search}
              label="მოძებნე სასურველი ვაკანსია"
              placeholder="მოძებნე სასურველი ვაკანსია"
              InputLabelProps={{ shrink: false }}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                width: 537,
                "& .MuiOutlinedInput-root": {
                  height: "56px", // Fix the input height to match the container
                  borderRadius: "8px", // Add border radius
                  paddingRight: "4px",
                  "& fieldset": {
                    border: "1px solid #1B1D201A", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#1B1D201A", // Border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#8255E3", // Focus border color
                  },
                  // Add hover background color for the input root
                  "&:hover": {
                    backgroundColor: "#1B1D2008", // Background color on hover
                  },
                },
                "& .MuiInputBase-input": {
                  height: "100%", // Ensure input takes full height
                  padding: "16px 14px",
                },
                "& .MuiInputLabel-root": {
                  color: "#474D66",
                  fontSize: "16px",
                  lineHeight: "24px",
                  transition: "all 0.2s ease-in-out",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  transform: "translate(14px, 4px) scale(0.85)", // Keep label inside borders on focus
                  color: "#696F8C", // Change color on focus
                },
                "& .MuiInputLabel-shrink": {
                  backgroundColor: "#fff", // Keep background consistent
                },
              }}
              InputProps={{
                endAdornment: (
                  <div
                    className="cursor-pointer"
                    onMouseEnter={() => setFillColor("#1B1D200F")}
                    onMouseLeave={() => setFillColor("white")}
                  >
                    <SearchIcon fillColor={fillColor} />
                  </div>
                ),
              }}
            />
          </div>

          {/* Tooltip-like Data Element */}
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
                  <div
                    onClick={() => handleFilter("სრული განაკვეთი")}
                    className={`px-[11px] py-[9px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] ${
                      selectedFilters?.includes("სრული განაკვეთი")
                        ? "bg-[#1B1D200F]"
                        : "hover:bg-[#1B1D200F]"
                    }`}
                  >
                    სრული განაკვეთი
                  </div>
                  <div
                    onClick={() => handleFilter("ნახევარი განაკვეთი")}
                    className={`px-[11px] py-[9px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] ${
                      selectedFilters?.includes("ნახევარი განაკვეთი")
                        ? "bg-[#1B1D200F]"
                        : "hover:bg-[#1B1D200F]"
                    }`}
                  >
                    ნახევარი განაკვეთი
                  </div>
                  <div
                    onClick={() => handleFilter("მოქნილი გრაფიკი")}
                    className={`px-[11px] py-[9px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] ${
                      selectedFilters?.includes("მოქნილი გრაფიკი")
                        ? "bg-[#1B1D200F]"
                        : "hover:bg-[#1B1D200F]"
                    }`}
                  >
                    მოქნილი გრაფიკი
                  </div>
                  <div
                    onClick={() => handleFilter("დროებითი")}
                    className={`px-[11px] py-[9px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] ${
                      selectedFilters?.includes("დროებითი")
                        ? "bg-[#1B1D200F]"
                        : "hover:bg-[#1B1D200F]"
                    }`}
                  >
                    დროებითი
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[#474D66] font-medium pl-[4px] mb-[8px]">
                  მდებარეობის მიხედვით
                </h3>
                <div className="flex gap-[8px]">
                  <div
                    onClick={() => handleFilter("ადგილზე")}
                    className={`px-[11px] py-[9px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] ${
                      selectedFilters?.includes("ადგილზე")
                        ? "bg-[#1B1D200F]"
                        : "hover:bg-[#1B1D200F]"
                    }`}
                  >
                    ადგილზე
                  </div>
                  <div
                    onClick={() => handleFilter("ჰიბრიდული")}
                    className={`px-[11px] py-[9px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] ${
                      selectedFilters?.includes("ჰიბრიდული")
                        ? "bg-[#1B1D200F]"
                        : "hover:bg-[#1B1D200F]"
                    }`}
                  >
                    ჰიბრიდული
                  </div>
                  <div
                    onClick={() => handleFilter("დისტანციური")}
                    className={`px-[11px] py-[9px] border-[1px] border-solid border-[#1B1D201A] rounded-[8px] text-[20px] leading-[28px] text-[#696F8C] ${
                      selectedFilters?.includes("დისტანციური")
                        ? "bg-[#1B1D200F]"
                        : "hover:bg-[#1B1D200F]"
                    }`}
                  >
                    დისტანციური
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {selectedFilters?.length ? (
          <div className="flex gap-[16px] mt-[24px] mb-[32px]">
            <button
              onClick={() => setSelectedFilters([])}
              className="bg-[#1B1D200F] rounded-[4px] cursor-pointer text-[14px] leading-[22px] px-[12px] py-[5px] hover:bg-[#1B1D2033]"
            >
              ფილტრის წაშლა
            </button>
            <div className="flex gap-[8px]">
              {selectedFilters?.map((selectedFilter) => (
                <div className="items-center flex gap-[4px] py-[3px] pl-[9px] pr-[3px] bg-[#FFFFFF00] text-[#101840] border-[1px] border-solid border-[#1B1D201A] rounded-[6px]">
                  {selectedFilter}
                  <div className="cursor-pointer hover:bg-[#1B1D200F] w-[22px] h-[22px]">
                    <CloseTagIcon className="fill-white group-hover:fill-[#1B1D200F]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
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
