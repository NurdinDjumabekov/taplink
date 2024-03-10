import React from "react";
import "./Addres.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { takeFilials } from "../../store/reducers/requestSlice";
import arrow from "../../assets/icons/arrowGray.svg";
import {
  changeListBtns,
  changeTemporaryIdFilial,
  changeTypeLookSevices,
} from "../../store/reducers/saveDataSlice";

const Addres = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listFilials } = useSelector((state) => state.requestSlice);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(takeFilials());
  }, []);

  const clickAddres = (codeid) => {
    navigate(`/choice/${codeid}`);
    dispatch(changeTemporaryIdFilial(codeid)); // для временного хранения id филиала, т.к. при откате с корзины надо нужен id филиала, где есть мастер мастера
  };

  return (
    <div className="addres">
      <div className="container">
        <div className="addres__inner">
          {listFilials?.length === 0 ? (
            <p className="noneDataa">Филиалы отсутствуют</p>
          ) : (
            <YMaps>
              {listFilials?.map((point) => (
                <div key={point.codeid} className="map">
                  <div className="map__inner">
                    <Map
                      defaultState={{
                        center: [point?.coordinatesX, point?.coordinatesY],
                        zoom: 14,
                      }}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Placemark
                        defaultGeometry={[
                          point?.coordinatesX,
                          point?.coordinatesY,
                        ]}
                      />
                    </Map>
                  </div>
                  <div
                    className="map__contects"
                    onClick={() => clickAddres(point?.codeid)}
                  >
                    <div className="texts">
                      <h3>{point?.name}</h3>
                      <p>
                        Адрес: <span>{point?.addres}</span>
                      </p>
                    </div>
                    {/* <p>
                      График работы: <span>{point?.schedule}</span>
                    </p> */}
                    {/* <p>
                      Контакты: <span>{point?.contacts1}</span>,{" "}
                      <span>{point?.contacts2}</span>
                    </p> */}
                    <div className="actionLink">
                      <button>
                        <img src={arrow} alt=">" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </YMaps>
          )}
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
