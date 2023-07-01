import React from "react";
import "../css/map.css";
import "animate.css";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

export default function Map() {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  };

  const center = {
    lat: 30.0592497, // Update with your default center latitude
    lng: 31.1939503, // Update with your default center longitude
  };


  const markers = [
    {
      lat: 30.049842,
      lng: 31.202018,
    },
    {
      lat: 30.047177,
      lng: 31.204014,
    },
    {
      lat: 30.029511,
      lng: 31.023174,
    },
    {
      lat: 30.019284,
      lng: 31.007478,
    },
    {
      lat: 30.032395,
      lng: 31.028716,
    },
  ];

  const mapStyles = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#263c3f",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6b9a76",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#38414e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212a37",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9ca5b3",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#1f2835",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f3d19c",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#2f3948",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#515c6d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
  ];

  return (
    <div className="map">
      <h1 className="mapTitle animate__animated animate__fadeInLeft">Map</h1>
      <div className="mapCont animate__animated animate__fadeInUpBig">
        <LoadScript googleMapsApiKey="AIzaSyDGOUHi37cQSHRh2hMBFI9L3Lx1aahnYpw">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={13}
            options={{ styles: mapStyles }}
          >
            {markers.map(marker => {
              return (
                <MarkerF
                  onLoad={(marker) => {
                    console.log("marker: ", marker);
                  }}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  icon={{
                    url:
                      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                  }}
                />
              );
            })}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

