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
  Polygon,
  useMap,
} from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { colors } from "@material-ui/core";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 14);
  return null;
}

function selectColor(){

  var color = "yellow";
  var x = Math.floor((Math.random() * 5) + 1);
  if (x == 1){
    color = "magenta";
  }

  if (x == 2){
    color = "yellow";
  }

  if (x == 3){
    color = "cyan";
  }

  if (x == 4){
    color = "white";
  }

  if (x == 5){
    color = "purple";
  }

  return color;
}

const MapComponent = () => {
  const { state } = useOvermind();
  const position: L.LatLngTuple = [state.mapCenter.lat, state.mapCenter.lon];
    const fieldPolygon: [number, number][] = state.field;
    const progressPolygon: [number, number][] = state.progressPolygon;
    const polygonColor = selectColor();
    return (
        <MapContainer center={position} zoom={14}>
            <ChangeView center={position} />
            <TileLayer
                attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            <Polygon pathOptions={{ color: polygonColor }} positions={fieldPolygon} />
            <Polygon pathOptions={{ color: polygonColor, fillOpacity: 1 }} positions={progressPolygon} />

        </MapContainer>
    );
};

export default MapComponent;
