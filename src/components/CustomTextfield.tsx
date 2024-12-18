import { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@/src/icons/SearchIcon";

const CustomTextField = ({
  placeholder,
  search,
  setSearch,
  className = "",
  focusedPlaceholder = placeholder,
}) => {
  const [fillColor, setFillColor] = useState("white");
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  return (
    <TextField
      fullWidth
      value={search}
      className={className}
      label={isFocused ? focusedPlaceholder || placeholder : placeholder} // Dynamically change label
      InputLabelProps={{
        shrink: !!search || undefined, // Ensure label stays inside on focus or with value
      }}
      onFocus={() => setIsFocused(true)} // Update focus state
      onBlur={() => setIsFocused(false)} // Reset focus state on blur
      onChange={(e) => setSearch(e.target.value)}
      sx={{
        "& legend": {
          display: "none",
        },
        "& .MuiOutlinedInput-root": {
          height: "56px",
          borderRadius: "8px",
          paddingRight: "4px",
          backgroundColor: "#FFFFFF00",
          border: "1px solid #1B1D201A",
          "&.Mui-focused ": {
            border: "2px solid #8255E3",
          },
          "& fieldset": {
            display: "none",
          },
          "&:hover": {
            backgroundColor: "#1B1D2008",
          },
        },
        "& .MuiInputBase-input": {
          height: "100%",
          padding: "16px 14px",
        },
        "& .MuiInputLabel-root": {
          color: "#474D66",
          fontSize: "16px",
          lineHeight: "24px",
          transition: "all 0.2s ease-in-out",
          background: "unset !important",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#696F8C",
        },
        "& .MuiInputLabel-shrink": {
          top: "10px",
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
  );
};

export default CustomTextField;
