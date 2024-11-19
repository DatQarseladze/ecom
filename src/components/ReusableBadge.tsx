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
      className="flex relative z-40 items-center border h-[32px] w-[32px] px-[7px] pr-[0] rounded-[8px] border-[1px] border-solid transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: isHovered ? hoverBgColor || bgColor : bgColor,
        borderColor: isHovered ? hoverBorderColor || borderColor : borderColor,
        whiteSpace: 'nowrap'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Image src={iconSrc} width={16} height={16} alt={`${label} icon`} />
      </div>
      <p
        className={`leading-[28px] text-white text-[14px]`}
        style={{
          overflow: "hidden",
          // padding: isHovered ? "8px" : "0",
          marginLeft: "8px",
          marginRight: isHovered ? "8px" : "0",
          maxWidth: isHovered ? "300px" : "0px",
          transition: "0.5s ease-in-out",
        }}
      >
        <span>{label}</span>
      </p>
    </div>
  );
};

export default ReusableBadge;
