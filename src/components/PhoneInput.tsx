import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const PhoneNumberInput = () => {
  const [value, setValue] = useState(""); // State to track input value

  return (
    <Box
      className="w-full"
      sx={{
        display: "flex",
        alignItems: "flex-end",
        borderBottom: "1px solid #1B1D201A", // Add bottom border
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#172B4D",
          cursor: "pointer",
        }}
      >
        <div className="hover:bg-[#1B1D2008] mb-[7px] ml-[16px] py-[8px] mr-[4px] px-[12px] rounded-[8px]">
          +995
        </div>
        <div
          className="mb-[7px] self-center"
          aria-hidden="true"
          style={{
            width: "1px",
            height: "24px",
            backgroundColor: "#0000000D",
          }}
        ></div>
      </Box>
      <TextField
        label="მობილურის ნომერი"
        id="standard-adornment-password"
        type={"number"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-[55px]"
        variant="standard"
        sx={{
          marginLeft: "12px",
          marginBottom: '2px',
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputLabel-root": {
            color: "#474D66",
            marginBottom: '50px'
            // marginLeft: "12px",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#8255E3",
          },
          "& .MuiInputBase-input": {
            padding: "unset",
            height: "24px",
          },
          "& input[type='number']::-webkit-outer-spin-button, & input[type='number']::-webkit-inner-spin-button":
            {
              WebkitAppearance: "none",
              margin: 0,
            },
          "& input[type='number']": {
            MozAppearance: "textfield",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "red", // Set placeholder color to red
          },
        }}
      />
    </Box>
  );
};

export default PhoneNumberInput;
