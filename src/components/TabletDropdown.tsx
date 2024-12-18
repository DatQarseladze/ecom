import React, { useState, useEffect, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import downArrow from "@/src/assets/images/arrow_down.svg";
import Image from "next/image";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

const TabletDropdown = ({
  onChange,
  attribute,
  value,
  options,
  placeholder,
  multiple = false,
  withFlag = false,
  withPagination = false,
  backgroundColor = "",
  wrapperClassName = "",
  showValue = false,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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

  const handleDecrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (Number(value) !== 0) {
      onChange(Number(value) - 1);
    }
  };

  const index = options?.findIndex((option) => option?.name === value);

  const handleIncrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(Number(value) + 1);
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

  useEffect(() => {
    inputRef?.current?.focus();
  }, [dropdownVisible]);

  return (
    <div
      className={`relative w-full h-[48px] rounded-lg ${wrapperClassName} ${backgroundColor ? `bg-[${backgroundColor}]` : "bg-white"}`}
      ref={dropdownRef}
    >
      <button
        className={`w-full border-solid border-[1px] border-[#1B1D201A] flex items-center h-[48px] rounded-lg text-left`}
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        {dropdownVisible ? (
          <div className="flex relative">
            <input
              className={`pl-[23px] caret-transparent ${
                dropdownVisible && !value
                  ? "text-[#8255E3]"
                  : value
                    ? "text-[#101840]"
                    : "text-[#474D66]"
              } no-arrows`}
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
              type="number"
              ref={inputRef}
              style={{
                width: value
                  ? `${Math.max(value?.toString().length || 1, placeholder.length || 1)}ch`
                  : "100%",
              }}
            />
            {/* Custom caret */}
            {!value && (
              <span
                className={`left-[23px] absolute top-1/2 left-[calc(23px+${inputRef?.current?.selectionStart || 0}ch)] -translate-y-1/2 w-[2px] h-[18px] bg-[#8255E3]`}
                style={{
                  animation: "blink 1s step-start infinite",
                }}
              ></span>
            )}
          </div>
        ) : (
          <span
            className={`pl-[23px] ${
              dropdownVisible && !value
                ? "text-[#8255E3]"
                : value
                  ? "text-[#101840]"
                  : "text-[#474D66]"
            }`}
          >
            {Boolean(dropdownVisible && !value) ? "|" : value || placeholder}
          </span>
        )}

        {Boolean(dropdownVisible || value) && (
          <div className={`absolute right-[6px] flex items-center gap-[12px] `}>
            <button
              onClick={handleDecrement}
              disabled={!index}
              className={`w-[32px] h-[32px] flex items-center justify-center bg-[#1B1D2008] hover:bg-[#1B1D200F] active:bg-[#1B1D201F] rounded-md ${!index ? "opacity-50" : ""}`}
            >
              <MinusIcon width={16} height={16} />
            </button>
            <button
              onClick={handleIncrement}
              disabled={index + 1 === options?.length - 1}
              className={`w-[32px] h-[32px] flex items-center justify-center bg-[#1B1D2008] hover:bg-[#1B1D200F] active:bg-[#1B1D201F] rounded-md ${index + 1 === options?.length - 1 ? "opacity-50" : ""}`}
            >
              <PlusIcon width={16} height={16} />
            </button>
          </div>
        )}
      </button>

      {dropdownVisible && (
        <div
          className={`absolute top-[47px] left-0 w-full mt-[-6px] border border-t-0 rounded-b-[6px] max-h-[300px] overflow-y-auto ${backgroundColor ? `bg-[${backgroundColor}]` : "bg-white"} z-[9999]`}
        >
          <div
            className={`w-full px-[8px] pb-[16px]  ${backgroundColor ? `bg-[${backgroundColor}]` : "bg-red"}`}
          >
            {options.slice(0, optionsPerRow).map((option) => (
              <div
                key={option[attribute]}
                onClick={() => handleChange(option[attribute])}
                className={`flex gap-[8px] rounded-[8px] hover:bg-[#1B1D2008] ${value === option["value"] ? "bg-[#1B1D2008]" : ""} cursor-pointer h-[40px] w-full items-center`}
              >
                <span className="text-[#101840] pl-[15px]">
                  {option["name"]}
                </span>
                <div className="">
                  (
                  <span className="text-[#8255E3] text-[16px] font-medium leading-[24px]">
                    {option.newPrice}
                  </span>
                  <span className="ml-[4px] text-[#696F8C] text-[14px] leading-[22px] line-through">
                    {option.oldPrice}
                  </span>
                  )
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

export default TabletDropdown;
