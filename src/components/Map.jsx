import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import iconLoc from "../assets/images/icon-location.svg";

const iconLocation = new Icon({
  iconUrl: iconLoc,
  iconSize: [35, 40],
});

function MapComponent(props) {
  const map = useMap();
  map.panTo(props.mapCentre);
  return null;
}

const Map = (props) => {
  const latitude = 51.505;
  const longitude = -0.09;

  return (
    <div className="w-full h-[75vh] flex flex-wrap z-0">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        style={{ height: "100%", width: "100%", flex: 1 }}
        zoomControl={false}
      >
        <MapComponent mapCentre={props.mapCentre} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.mapCentre} icon={iconLocation}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
