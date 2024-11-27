import React from "react";
import { Box, TextField } from "@mui/material";
import { Field } from "formik";

const PhoneNumberInput = ({ name }: { name: string }) => {
  return (
    <Field name={name} validateOnBlur={true} validateOnChange={true}>
      {({ field, form }: any) => (
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
            <div className="hover:bg-[#1B1D2008] w-[57px] mb-[7px] ml-[16px] py-[8px] mr-[4px] px-[12px] rounded-[8px]">
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
            id="phoneNumber"
            type="number"
            {...field}
            onChange={(e) => form.setFieldValue(name, e.target.value)} // Update formik state
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
      )}
    </Field>
  );
};

export default PhoneNumberInput;
