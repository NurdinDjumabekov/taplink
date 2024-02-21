import React from "react";
import "./LookAction.scss";
import { load } from "@2gis/mapgl";
import MapWrapper from "../../components/MapWrapper/MapWrapper";
import Addres from "../../components/Addres/Addres";

const LookAction = () => {
  // React.useEffect(() => {
  //   let map;
  //   load().then((mapglAPI) => {
  //     map = new mapglAPI.Map('map-container', {
  //       center: [74.606598, 42.87246],
  //       zoom: 14,
  //       key: 'fb4759e7-7ad7-47a9-bb79-30ababe26d74',
  //     });
  //   });
  //   return () => map && map.destroy();
  // }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="lookAction">
      <Addres />
      {/* <div style={{ width: '80%', height: '80vh', margin: '0px auto' }}>
        <MapWrapper />
      </div> */}
    </div>
  );
};

export default LookAction;
