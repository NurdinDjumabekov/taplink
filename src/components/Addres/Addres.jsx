import React from "react";
import { listAdres } from "../../helpers/dataArr";
import "./Addres.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useNavigate } from "react-router-dom";

const Addres = () => {
  const navigate = useNavigate();
  return (
    <div className="addres">
      <div className="container">
        <div className="addres__inner">
          <YMaps>
            {listAdres?.map((point) => (
              <div key={point.codeid} className="map">
                <div className="map__inner">
                  <Map
                    defaultState={{
                      center: [point?.coordinates?.x, point?.coordinates?.y],
                      zoom: 14,
                    }}
                    style={{
                      borderRadius: "8px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {point?.listPoint?.map((placemark) => (
                      <Placemark
                        key={placemark.id}
                        defaultGeometry={placemark.geometry}
                      />
                    ))}
                  </Map>
                </div>
                <div className="map__contects">
                  <h3>{point?.addres}</h3>
                  <p>
                    График работы: <span>{point?.schedule}</span>
                  </p>
                  <p>
                    Контакты:{" "}
                    {point?.contacts?.map((con, ind) => (
                      <span key={ind}>
                        {con}
                        {ind !== point.contacts.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                  <button onClick={() => navigate(`/det/${point?.codeid}`)}>
                    Перейти
                  </button>
                </div>
              </div>
            ))}
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default Addres;

// import { YMaps, Map, Placemark, Panorama } from '@pbe/react-yandex-maps';

// const Addres = () => {
//   const placemarks = [
//     { id: 1, geometry: [42.8746, 74.6] },
//     { id: 2, geometry: [42.8776, 74.605] },
//     { id: 2, geometry: [42.8766, 74.625] },
//   ];

//   return (
//     <YMaps>
//       <div className="map">
//         <Map
//           defaultState={{ center: [42.8746, 74.5998], zoom: 14 }}
//           width={'100%'}
//           height={'100%'}
//         >
//           {placemarks.map((placemark) => (
//             <Placemark
//               key={placemark.id}
//               defaultGeometry={placemark.geometry}
//             />
//           ))}
//         </Map>
//       </div>
//     </YMaps>
//   );
// };

// export default Addres;
