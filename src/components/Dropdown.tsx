import React, { useState, useEffect, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import downArrow from "@/src/assets/images/arrow_down.svg";
import Image from "next/image";

const DropdownSelect = ({
  onChange,
  attribute,
  placeholder,
  value,
  options,
  multiple = false,
  withFlag = false,
  withPagination = false,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [optionsPerRow, setOptionsPerRow] = useState<number>(withPagination ? 9 : 1000)

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
    }
  };

  return (
    <div className="relative w-[436px] h-[56px]" ref={dropdownRef}>
      <button
        className="w-full flex items-center px-[8px] h-[56px] w-[436px] border rounded-[6px] text-left bg-white"
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        <span className="pl-[16px]">{placeholder}</span>
        <div
          className={`absolute right-[7px] p-[10px] rounded-[6px] hover:bg-[#1B1D200F] ${!dropdownVisible ? "" : "rotate-180"}`}
        >
          <Image alt="down arrow" src={downArrow} width={20} height={20} />
        </div>
      </button>

      {dropdownVisible && (
        <div className="absolute left-0 z-10 w-full mt-[-6px] border border-t-0 rounded-b-[6px] bg-white shadow-lg max-h-[300px] overflow-y-auto">
          <div className="w-full px-[8px] pb-[16px]">
            {options.slice(0, optionsPerRow).map((option) => (
              <div
                key={option[attribute]}
                onClick={() => handleChange(option[attribute])}
                className={`flex rounded-[8px] hover:bg-[#1B1D2008] ${value.includes(option[attribute]) ? "bg-[#1B1D2008]" : "bg-[#1B1D2008"} cursor-pointer h-[48px] w-full items-center`}
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
                {withFlag ? (
                  <div className="pl-[16px] flex items-center gap-[8px]">
                    <div>
                      <Image
                        alt="flag"
                        src={option.flag}
                        width="16"
                        height="10.67"
                      />
                    </div>
                    <span className="text-[#101840]">{option[attribute]}</span>
                  </div>
                ) : (
                  <span className="text-[#101840] pl-[16px]">
                    {option[attribute]}
                  </span>
                )}
              </div>
            ))}
            {withPagination && <button onClick={() => setOptionsPerRow(prevState => prevState + 10)} className="font-medium text-[#8255E3] hover:bg-[#EDE3FF] rounded-[6px] py-[8px] px-[16px]">მეტის ნახვა</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
