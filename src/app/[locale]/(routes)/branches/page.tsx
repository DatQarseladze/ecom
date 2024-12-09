"use client";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import BranchCard from "@/src/components/BranchCard";
import DropdownSelect from "@/src/components/Dropdown";
import { Switch, TextField } from "@mui/material";
import gpsIcon from "@/src/assets/images/gps.svg";
import {
  branches,
  cityOptions,
  regionOptions,
} from "@/src/components/constants";
import Image from "next/image";
import SearchIcon from "@/src/icons/SearchIcon";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";

import PaginationComponent from "@/src/components/Pagination";

interface Office {
  id: number;
  position: {
    lat: number;
    lng: number;
  };
  name: string;
  info: string;
}

const containerStyle = {
  width: "100%",
  height: "704px",
};

const center = {
  lat: 41.72669982910156,
  lng: 44.72,
};

const offices: Office[] = [
  {
    id: 1,
    position: { lat: 41.72562829536133, lng: 44.76167826503837 },
    name: "Office 1",
    info: "This is Office 1",
  },
  {
    id: 2,
    position: { lat: 41.726442, lng: 44.7549162 },
    name: "Office 2",
    info: "This is Office 2",
  },
  {
    id: 3,
    position: { lat: 41.7195921, lng: 44.7593418 },
    name: "Office 3",
    info: "This is Office 3",
  },
];

const Branches = () => {
  const [selectedMarker, setSelectedMarker] = useState<Office | null>(null);

   useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCN9z63mq21nLn8zCiqs_TS5nRtZfw17uM",
    libraries: ["places"], // Use your API key
  });

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [values, setValues] = useState({
    24: false,
    openNow: false,
    checked: false,
  });
  const [search, setSearch] = useState("");
  const [fillColor, setFillColor] = useState("white");

  return (
    <div className="xl:px-[168px] web-xl:px-[80px] bg-[#FBFBFD]">
      <h1 className="mt-[80px] mb-[48px] text-[40px] leading-[48px] text-center font-bold">
        ფილიალები
      </h1>
      <div className="flex flex-col gap-[16px]">
        <div className="flex gap-[16px]">
          <div className="inline-flex border-[1px] border-solid border-[#1B1D201A] gap-[8px] rounded-md py-[15px] pl-[15px] pr-[23px] bg-[#fff] items-center">
            <Image
              src={gpsIcon}
              alt="location"
              className="w-[18px] h-[18px] mb-[3px] object-cover rounded-md"
            />
            <span>ჩემთან ახლოს</span>
          </div>
          <div className="flex-1">
            <TextField
              variant="outlined"
              placeholder="მოძებნე აფთიაქი"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-[1153px] min-w-[300px] h-[56px] 2xl:max-w-[1532px]"
              sx={{
                borderRadius: "8px",
                border: "transparent",
                "&:hover": {
                  backgroundColor: "#ffff",
                },
                "& .MuiOutlinedInput-root": {
                  background: "#fff",
                  "& fieldset": {
                    border: "1px solid #1B1D201A",
                  },
                  "&:hover fieldset": { borderColor: "#1B1D201A" },
                  "&.Mui-focused fieldset": {
                    borderColor: "#8255E3",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#fff",
                  },
                },
                "& .MuiInputBase-root": {
                  height: "100%",
                  paddingRight: "3px",
                },
                "& input::placeholder": {
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "left",
                  color: "#474D66",
                  opacity: 1,
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
          </div>
          <div className="border-[1px] border-solid border-[#1B1D201A] bg-[#fff] p-[15px] flex gap-[12px] rounded-lg items-center">
            <div>
              <Switch
                checked={values.checked}
                onChange={() =>
                  setValues((prevState) => ({
                    ...prevState,
                    checked: !prevState["checked"],
                  }))
                }
                sx={{
                  width: 44, // Track width
                  height: 24, // Track height
                  padding: 0, // Remove extra padding

                  // Styling for the track
                  "& .MuiSwitch-track": {
                    borderRadius: 12, // Rounded track corners
                    backgroundColor: "#E0E0E0", // Track background color when unchecked
                    opacity: 1,
                    transition: "background-color 0.2s ease", // Smooth background color transition
                  },

                  // Styling for the thumb (the circular part)
                  "& .MuiSwitch-thumb": {
                    width: 20, // Thumb size
                    height: 20, // Thumb size
                    backgroundColor: "#fff", // Thumb color
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)", // Optional shadow effect
                    position: "absolute", // To ensure absolute positioning on the track
                    top: 2, // Positions the thumb vertically
                    left: 3, // Default left position when unchecked
                    transition: "transform 0.3s ease", // Smooth movement when toggling
                  },

                  // When the switch is in the checked state
                  "&.Mui-checked": {
                    "& .MuiSwitch-thumb": {
                      transform: "translateX(20px)", // Move thumb to the right on check (20px offset)
                      backgroundColor: "#8255E3", // Thumb color when checked
                    },
                    "& .MuiSwitch-track": {
                      backgroundColor: "#8255E3", // Track color when checked
                    },
                  },
                }}
              />
            </div>

            <span className="text-[#474D66]">რუკაზე ჩვენება</span>
          </div>
        </div>
        <div className="flex col gap-[8px]">
          <DropdownSelect
            attribute="name"
            placeholder="აირჩიე თბილისი/რეგიონი"
            value={selectedFilters}
            options={regionOptions}
            onChange={() => console.log("ew")}
            wrapperClassName="w-[638px]"
          />
          <DropdownSelect
            attribute="name"
            placeholder="აირჩიე ქალაქი/რაიონი"
            value={selectedFilters}
            options={cityOptions}
            onChange={() => console.log("wqe")}
            wrapperClassName="w-[638px]"
          />
          <div className="py-[15px] px-[15px] flex gap-[22px] bg-[#fff] items-center border-[1px] border-solid border-[#1B1D201A] rounded-lg">
            <div className="flex items-center gap-[8px]">
              <Checkbox
                checked={values[24]}
                onChange={() =>
                  setValues((prevState) => ({
                    ...prevState,
                    24: !prevState[24],
                  }))
                }
                sx={{
                  color: "#1B1D201A",
                  height: "20px",
                  width: "20px",
                  "&.Mui-checked": {
                    color: "#8255E3",
                  },
                }}
              />
              <span className="text-[#474D66]"> 24 საათიანი</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <Checkbox
                checked={values["openNow"]}
                onChange={() =>
                  setValues((prevState) => ({
                    ...prevState,
                    openNow: !prevState["openNow"],
                  }))
                }
                sx={{
                  color: "#1B1D201A",
                  height: "20px",
                  width: "20px",
                  "&.Mui-checked": {
                    color: "#8255E3",
                  },
                }}
              />
              <span className="text-[#474D66]">ღიაა ახლა</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="pb-[80px]">
        {values?.checked ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13} // Zoom level to fit multiple locations
          >
            {offices.map((office) => (
              <Marker
                key={office.id}
                icon={{
                  url: "https://i.ibb.co/b5RHMzp/impex-branded-map-pin.png", // Correct path to the icon
                  scaledSize: new window.google.maps.Size(40, 40), // You can scale it if needed
                  origin: new window.google.maps.Point(0, 0), // Adjust if necessary
                  anchor: new window.google.maps.Point(20, 40), // Anchor at the bottom of the icon
                }}
                position={office.position}
                onClick={() => setSelectedMarker(office)} // Set selected marker on click
              />
            ))}

            {selectedMarker && (
              <InfoWindow
                position={selectedMarker.position}
                onCloseClick={() => setSelectedMarker(null)} // Clear selection on close
              >
                <div>
                  <h3>{selectedMarker.name}</h3>
                  <p>{selectedMarker.info}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <div>
            <div className="mt-[8x] flex flex-col border border-solid border-[#1B1D201A] rounded-lg">
              {branches?.map((branch) => (
                <BranchCard
                  image={branch.image}
                  city={branch.city}
                  district={branch.district}
                  address={branch.address}
                  time={branch.time}
                  isOpen={true}
                  onPhoneClick={() => console.log("s")}
                />
              ))}
            </div>
            <div className="mt-[24px] flex justify-center">
              <button className="hover:bg-[#1B1D201F] active:bg-[#1B1D2033] bg-[#1B1D200F] rounded-lg text-[#101840] px-[24px] py-[16px]">
                იხილეთ მეტი
              </button>
            </div>
            <div className="mt-[24px] flex justify-center">
              <PaginationComponent
                totalPages={10}
                currentPage={1}
                onPageChange={() => {}}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Branches;
