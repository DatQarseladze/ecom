import React, { useState, useEffect, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import downArrow from "@/src/assets/images/arrow_down.svg";
import Image from "next/image";
import checkMark from "@/src/assets/images/check-mark.svg";

const CustomDropdown = ({
  onChange,
  attribute,
  value,
  options,
  multiple = false,
  withIcon = false,
  withPagination = false,
  backgroundColor = "",
  wrapperClassName = "",
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [optionsPerRow, setOptionsPerRow] = useState<number>(
    withPagination ? 9 : 1000
  );

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownVisible]);

  const handleChange = (item: string) => {
    if (multiple) {
      onChange(item);
    } else {
      onChange(item, options);
      setDropdownVisible(false);
    }
  };

  const colorValue = withIcon
    ? options.find((option) => option?.name === value)?.color
    : "";

  return (
    <div
      className={`relative w-[326px] ${wrapperClassName} ${backgroundColor ? `bg-[${backgroundColor}]` : "bg-white"}`}
      ref={dropdownRef}
    >
      <button
        className="cursor-pointer flex items-center gap-[4px] w-fit"
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        <div className="flex items-center gap-[8px]">
          {withIcon && (
            <div
              className="w-[24px] h-[24px] rounded-lg"
              style={{ backgroundColor: colorValue || "transparent" }}
            />
          )}

          <h2 className="text-[#101840]">{value}</h2>
        </div>
        <div
          className={`flex w-[32px] h-[32px] items-center justify-center rounded-lg hover:bg-[#1B1D2008] active:bg-[#1B1D200F] ${!dropdownVisible ? "" : "rotate-180"}`}
        >
          <Image alt="down arrow" src={downArrow} width={16} height={16} />
        </div>
      </button>

      {dropdownVisible && (
        <div
          className={`absolute top-[36px] left-[-16px] w-full rounded-lg border border-t-0 rounded-b-[6px] shadow-lg max-h-[300px] overflow-y-auto ${backgroundColor ? `bg-[${backgroundColor}]` : "bg-white"} z-[9999]`}
          style={{
            boxShadow: "0px 3px 5px 0px #1B1D200D",
          }}
        >
          <div
            className={`w-full ${backgroundColor ? `bg-[${backgroundColor}]` : "bg-white"}`}
          >
            {options.slice(0, optionsPerRow).map((option, index) => (
              <div
                key={option[attribute]}
                onClick={() => handleChange(option[attribute])}
                className={`flex hover:bg-[#1B1D2008] ${index !== options?.length - 1 ? "border-b-[1px]" : ""} border-b-[solid] border-[#1B1D200F] ${value.includes(option[attribute]) ? "bg-[#1B1D2008]" : ""} cursor-pointer h-[48px] w-full items-center`}
              >
                {multiple && (
                  <Checkbox
                    key={option[attribute]}
                    checked={value.includes(option[attribute])}
                    onChange={() => handleChange(option[attribute])}
                    color="primary"
                    className="pl-[16px]"
                    size="medium"
                    sx={{
                      borderRadius: "4px",
                      color: "#1B1D201A",
                      height: "20px",
                      marginLeft: "16px",
                      width: "20px",
                      "&.Mui-checked": {
                        color: "#8255E3",
                        border: "1px solid #8255E3",
                      },
                    }}
                  />
                )}
                <div className="flex items-center justify-between w-full">
                  <div className="items-center flex pl-[16px] gap-[16px]">
                    {withIcon && (
                      <div
                        className={`w-[20px] h-[20px] rounded-lg`}
                        style={{ backgroundColor: option?.color }}
                      />
                    )}
                    <span className="text-[#101840]">{option[attribute]}</span>
                  </div>
                  <div className="mr-[16px] flex items-center justify-center w-[20px] h-[24px]">
                    <Image
                      alt="check icon"
                      src={checkMark}
                      height={16.25}
                      width={16.25}
                    />
                  </div>
                </div>
              </div>
            ))}
            {withPagination && (
              <button
                onClick={() => setOptionsPerRow((prevState) => prevState + 10)}
                className="font-medium text-[#8255E3] hover:bg-[#EDE3FF] rounded-[6px] py-[8px] px-[16px]"
              >
                მეტის ნახვა
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
