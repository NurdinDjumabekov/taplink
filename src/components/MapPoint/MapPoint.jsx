import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./MapPoint.scss";
import { useSelector } from "react-redux";

const MapPoint = () => {
  const { listFilials } = useSelector((state) => state.requestSlice);

  const placemarks = listFilials.map((filial) => ({
    id: filial.codeid, // Идентификатор метки, можно использовать любое уникальное значение
    geometry: [filial.coordinatesX, filial.coordinatesY], // Координаты местоположения метки
  }));

  console.log(placemarks);

  return (
    <div className="mapPoint">
      <YMaps>
        <Map
          defaultState={{ center: [42.8746, 74.5998], zoom: 12 }}
          width={"100%"}
          height={"100%"}
        >
          {placemarks?.map((placemark) => (
            <Placemark
              key={placemark.id}
              defaultGeometry={placemark.geometry || [42.8746, 74.5998]}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};

export default MapPoint;
