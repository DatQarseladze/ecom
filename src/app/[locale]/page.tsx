"use client";
import { Button, Typography, Container } from "@mui/material";
import i18n, { useTranslation } from "@/src/i18n";
import {
  GithubSignInButton,
  GoogleSignInButton,
  SignOutButton,
} from "../../components/authButtons";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import BrandList from "@/src/components/BrandList";
import PromotionsList from "@/src/components/PromotionsList";

import { items } from "../../Items.json";
// import { Carousel } from "react-bootstrap";
import Carousel from "../../components/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import carouselImg from "../../assets/images/carousel.png";
import styles from "../[locale]/(routes)/profile/Bootstrap.module.css"; // Your CSS module
import Image from "next/image";
import "../[locale]/(routes)/profile/Bootstrap.module.css";
import TopSales from "@/src/components/TopSales";
import rightArrow from "../../assets/images/right-arrow.png";
// Define the Office interface
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
  height: "500px",
};

const center = {
  lat: 41.72669982910156,
  lng: 44.72,
};

// Example office locations with some info
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

const Page = () => {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const { t } = useTranslation();
  const { data } = useSession();
  const [selectedMarker, setSelectedMarker] = useState<Office | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCN9z63mq21nLn8zCiqs_TS5nRtZfw17uM",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#fbfbfd]">
      <Carousel />
      <BrandList />
      <PromotionsList />
      <TopSales />
    </div>
  );
};

export default Page;
