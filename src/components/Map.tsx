import React from "react";
import { useOvermind } from "../overmind";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Tooltip,
  Polyline,
  useMap,
} from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 15);
  return null;
}

const MapComponent = () => {
  const { state } = useOvermind();
  const position: L.LatLngTuple = [state.mapCenter.lat, state.mapCenter.lon];

  return (
    <MapContainer center={position} zoom={15}>
      <ChangeView center={position} />
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={[state.mapCenter.lat, state.mapCenter.lon]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
