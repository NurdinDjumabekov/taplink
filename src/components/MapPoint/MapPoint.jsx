import React from "react";
import { YMaps, Map, Placemark, Panorama } from "@pbe/react-yandex-maps";
import { load } from "@2gis/mapgl";
import "./MapPoint.scss";

const MapPoint = () => {
  const placemarks = [
    { id: 1, geometry: [42.8746, 74.6] },
    { id: 2, geometry: [42.8776, 74.605] },
    { id: 2, geometry: [42.8766, 74.625] },
  ];

  return (
    <div className="mapPoint">
      <YMaps>
        <Map
          defaultState={{ center: [42.8746, 74.5998], zoom: 14 }}
          width={"100%"}
          height={"100%"}
        >
          {placemarks.map((placemark) => (
            <Placemark
              key={placemark.id}
              defaultGeometry={placemark.geometry}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};

export default MapPoint;
