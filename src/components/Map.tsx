import React from "react";
import { withStyles } from "@material-ui/core/styles";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Tooltip,
  Polyline,
} from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

//const styles = (theme) => ();

const MapComponent = () => {
  // Example
  const lat = 40.77884287;
  const lng = -102.084164;

  return (
    <div
      className="map"
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "1000px",
      }}
    >
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        maxZoom={18}
        style={{ height: "100%", width: "100%", position: "relative" }}
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
