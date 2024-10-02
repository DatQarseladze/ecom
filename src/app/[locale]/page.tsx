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
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from "@react-google-maps/api";

// function highlightMarker(marker, highlight) {
//   var color = "#FE7569";
//   if (highlight) {
//     color = "#0000FF";
//   }
//   marker.setImage(getIcon(color).image);
// }

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 41.72669982910156, // Default center point (e.g., New York)
  lng: 44.72,
};

// Example office locations with some info
const offices = [
  { id: 1, position: { lat: 41.72562829536133, lng: 44.76167826503837 }, name: "", info: "This is Office 1" },
  { id: 2, position: { lat: 41.726442, lng: 44.7549162 }, name: "", info: "This is Office 2" },
  { id: 3, position: { lat: 41.7195921, lng: 44.7593418 }, name: "", info: "This is Office 3" },
];

const Page = () => {
  const { t } = useTranslation();
  const { data } = useSession();
  const [selectedMarker, setSelectedMarker] = useState(null); // State for selected marker

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCN9z63mq21nLn8zCiqs_TS5nRtZfw17uM", // Use your API key
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13} // Zoom level to fit multiple locations
      >
        {offices.map((office) => (
          <Marker
            key={office.id}
            position={office.position}
            label={office.name ?? ""}
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
      <GoogleSignInButton />
      <GithubSignInButton />
      {data && <SignOutButton />}

      <Typography variant="h3" component="h3">
        {t("title")}
      </Typography>
      <Button onClick={() => i18n.changeLanguage("ge")}>
        Switch to Georgian
      </Button>
      <Button onClick={() => i18n.changeLanguage("en")}>
        Switch to English
      </Button>
    </Container>
  );
};

export default Page;
