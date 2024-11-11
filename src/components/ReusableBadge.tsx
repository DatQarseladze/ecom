import React from "react";
import Image from "next/image";

const ReusableBadge = ({
  iconSrc,
  bgColor,
  borderColor,
  hoverBgColor,
  hoverBorderColor,
  label,
}: any): any => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="flex items-center border h-[32px] px-[7px] rounded-[8px] border-[1px] border-solid transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: isHovered ? hoverBgColor || bgColor : bgColor,
        borderColor: isHovered ? hoverBorderColor || borderColor : borderColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={iconSrc} width={16} height={16} alt={`${label} icon`} />
      </div>
      <div
        className={`leading-[28px] text-white text-[14px] transition-all duration-500 ease-in-out ${
          isHovered
            ? "opacity-100 max-w-xs transform scale-100"
            : "opacity-0 max-w-0"
        }`}
        style={{
          visibility: isHovered ? "visible" : "hidden",
          marginLeft: isHovered ? "8px" : "0",
          overflow: "hidden",
        }}
      >
        <span>{label}</span>
      </div>
    </div>
  );
};

export default ReusableBadge;
