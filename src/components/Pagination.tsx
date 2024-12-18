import React from "react";
import { Pagination, PaginationItem } from "@mui/material";

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (event, value) => {
    onPageChange(value); // Make sure onPageChange handles value correctly
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      variant="outlined"
      sx={{
        backgroundColor: "transparent", // No background for root container
        "& .MuiPaginationItem-root": {
          backgroundColor: "#FFFFFF00", // Transparent background for page items
          border: "none", // Remove borders
        },

        // Numeric page buttons: Set default width, height, font size, and line height
        "& .MuiPaginationItem-root:not(.MuiPaginationItem-previousNext)": {
          width: "48px", // Default width for numeric page items
          height: "48px", // Default height for numeric page items
          borderRadius: '8px',
          display: "flex", // Flexbox for centering content
          alignItems: "center", // Vertically center content
          justifyContent: "center", // Horizontally center content
          fontSize: "20px", // Set font size
          lineHeight: "28px", // Set line height (leading)
          transition: "background-color 0.3s ease", // Smooth transition for hover effect
          color: "#696F8C",
        },

        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "#8255E3 !important", // Active page background color
          color: "white", // White text color for active page
          width: "48px", // Increased width for active page
          borderRadius: '8px',

          height: "48px", // Increased height for active page
          borderColor: "#8255E3",
          // Hover effect for active page
          "&:hover": {
            backgroundColor: "#7143D1 !important", // Hover background for active page
          },
          "&:active": {
            boxShadow: '0px 0px 0px 4px #B692F62B, 0px 1px 2px 0px #7268C20D'
          }
        },

        // Previous/Next buttons: Adjust height only (width will remain auto)
        "& .MuiPaginationItem-previousNext": {
          backgroundColor: "transparent", // No background for prev/next buttons
          border: "none", // Remove border
          minWidth: "auto", // Allow buttons to grow based on content width
          padding: "0 8px", // Add some padding for better spacing
          textAlign: "center", // Center text
          transition: "background-color 0.3s ease", // Smooth transition for background change
          height: "40px", // Set height for previous/next buttons only
          display: "flex", // Flexbox for centering content
          alignItems: "center", // Vertically center content
          justifyContent: "center", // Horizontally center content
          fontSize: "16px", // Set font size for previous/next buttons
        },

        // Hover effect on all page buttons
        "& .MuiPaginationItem-root:hover": {
          backgroundColor: "#1B1D200F", // Hover background color
        },

        // Hover effect on previous/next buttons
        "& .MuiPaginationItem-previousNext:hover": {
          backgroundColor: "#1B1D200F", // Hover background color
        },
      }}
      renderItem={(item) => (
        <PaginationItem
          components={{
            last: (props) => (
              <button
                className="text-[16px] leading-[24px] text-[#1018404F] py-[8px] px-[16px] border-none"
                {...props}
                style={{
                  border: "none", // Remove border
                  minWidth: "auto", // Let it grow based on content
                  padding: "8px 16px", // Add padding for better layout
                }}
              >
                Last
              </button>
            ),
            next: (props) => (
              <button
                {...props}
                className="text-[16px] leading-[24px] rounded-[8px] text-[#101840] py-[8px] border-none"
                style={{
                  minWidth: "auto",
                }}
              >
                შემდეგი გვერდი
              </button>
            ),

            previous: (props) => (
              <button
                {...props}
                className="text-[16px] leading-[24px] rounded-[8px] text-[#101840] py-[8px] border-none "
                style={{
                  minWidth: "auto",
                }}
              >
                წინა გვერდი
              </button>
            ),
          }}
          {...item}
        />
      )}
      color="primary"
      size="small"
    />
  );
};

export default PaginationComponent;
