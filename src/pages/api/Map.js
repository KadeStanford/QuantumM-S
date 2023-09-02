import { useState, useEffect } from "react";
import loader from "@/pages/api/googleMapsLoader";

const Map = ({ address }) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
          const mapOptions = {
            center: { lat: 30.37944, lng: -91.13826 },
            zoom: 16,
            mapTypeId: "roadmap",
            mapTypeControl: false,
            streetViewControl: false,
          };
          const newMap = new window.google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          const marker = new window.google.maps.Marker({
            position: { lat: 30.37944, lng: -91.13826 },
            map: newMap,
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);
  return (
    <div
      id="map"
      style={{ height: "40vh", width: "40%", border: "#733b8f solid 5px" }}
    ></div>
  );
};
export default Map;
