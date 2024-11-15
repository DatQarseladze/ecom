"use client";
import { useState } from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import Image from "next/image";

import productImg from "../../../../../assets/images/careers_list.svg";
import { jobs } from "@/src/components/constants";
import rightArrow from "../../../../assets/images/right-arrow.svg";
import caretLeft from "../../../../assets/images/caret-left.svg";
import InfoCard from "@/src/components/InfoCard";

import PaginationComponent from "@/src/components/Pagination";
import JobPost from "@/src/components/JobPost";

const Events = () => {
  const [activeTab, setActiveTab] = useState<string>("ongoing"); // Initial active tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Update active tab on click
  };

  return (
    <div>
      <div className="xl:mx-[168px] web-xl:mx-[80px]">
        <div className="pt-[80px] pb-[64px] flex flex-col gap-[48px]">
          <div className="flex items-center justify-center w-full flex-col">
            <button className="text-[16px] leading-[24px] py-[1px] px-[8px] mb-[8px] border-[1px] border-solid border-[#1B1D201A] rounded-[6px] w-auto">
              ვაკანსიები
            </button>
            <h1 className="text-[40px] font-bold leading-[48px] text-[#101840]">
              ვეძებთ გუნდის ახალ წევრებს
            </h1>
            <h3 className="text-[16px] font-bold leading-[24px] text-[#474D66] mt-[8px] mb-[24px]">
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
        <div className="pt-[64px] pb-[96px] flex gap-[64px]">
          <div className=""></div>
          <div className="flex justify-center flex-col">
            <h1 className="text-[32px] font-bold leading-[40px] text-[#101840]">
              რატომ უნდა იმუშაოთ ჩვენთან
            </h1>

            <h4 className="text-[16px] leading-[24px] text-[#474D66]">
              ჩვენ ვთვლით, რომ თანამშრომლები ყველაზე მნიშვნელოვანი აქტივია.
              ვქმნით თანაბარ შესაძლებლობებს, სადაც სხვადასხვა კულტურისა და
              ღირებულებების მქონე ადამიანებისთვის მუშაობა საინტერესო და
              გამოწვევებით სავსეა. <br />
              ჩვენ ერთად ვსწავლობთ, ვმოქმედებთ და ვვითარდებით. არასდროს
              ვკმაყოფილდებით მიღწეული შედეგებით და ყოველთვის ვცდილობთ ვიყოთ
              იმაზე უკეთესი, ვიდრე დღეს ვართ. ამაში მუდმივი სწავლა, ერთმანეთის
              მხარდაჭერა და მიზნის მიღწევაზე ორიენტირებული გარემო გვეხმარება.
            </h4>
          </div>
        </div>
        <div className="py-[96px]">
          <h1 className="text-[32px] text-center leading-[40px] text-[#101840] font-bold mb-[16px]">
            ჩვენთან მუშაობის უპირატესობები
          </h1>
          <h3 className="text-[16px] text-center leading-[24px] text-[#474D66]">
            ჩვენთან იპოვი შენთვის სასურველ ვაკანსიას. შემოგვიერთდი!
          </h3>
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

export default Events;
