// import { linea10 } from './list.js'
// import { all_lines } from './full-list.js'
import { individualLines } from "./individual-lines.js";

const map = L.map('map', {
}).setView([-41.150, -71.320], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//      maxZoom: 19,
//      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

/* trying to set the map limit
var corner1 = L.latLng(-41.0286, -71.0977),
corner2 = L.latLng(-41.2022, -71.5890),
bounds = L.latLngBounds(corner1, corner2);
*/

L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// ---------------- Lineas -------------------


// Linea 10
L.geoJSON(individualLines.b10, {color: "#3bd6c6"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 13
L.geoJSON(individualLines.b13, {color: "#43e8d8"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)


// Linea 20
L.geoJSON(individualLines.b20, {color: "#004c4c"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 21
L.geoJSON(individualLines.b21, {color: "#006666"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 22 ida
L.geoJSON(individualLines.b22Ida, {color: "#008080"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 22 vuelta
L.geoJSON(individualLines.b22Vuelta, {color: "#008080"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 30 ida
L.geoJSON(individualLines.b30Ida, {color: "	#660066"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 30 vuelta
L.geoJSON(individualLines.b30Vuelta, {color: "	#660066"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 31 ida
L.geoJSON(individualLines.b31Ida, {color: "#800080"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 31 vuelta
L.geoJSON(individualLines.b31Vuelta, {color: "#800080"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 40 ida
L.geoJSON(individualLines.b40Ida, {color: "#a70000"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 40 vuelta
L.geoJSON(individualLines.b40Vuelta, {color: "#a70000"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 41 ida
L.geoJSON(individualLines.b41Ida, {color: "#ff0000"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 41 vuelta
L.geoJSON(individualLines.b41Vuelta, {color: "#ff0000"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 50 ida
L.geoJSON(individualLines.b50Ida, {color: "#006203"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 50 vuelta
L.geoJSON(individualLines.b50Vuelta, {color: "#006203"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 51 ida
L.geoJSON(individualLines.b51Ida, {color: "#0f9200"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 51 vuelta
L.geoJSON(individualLines.b51Vuelta, {color: "#0f9200"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 55 ida
L.geoJSON(individualLines.b55Ida, {color: "#30cb00"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 55 vuelta
L.geoJSON(individualLines.b55Vuelta, {color: "#30cb00"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 55b ida
L.geoJSON(individualLines.b55bIda, {color: "#4ae54a"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 55b vuelta
L.geoJSON(individualLines.b55bVuelta, {color: "#4ae54a"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 60 ida
L.geoJSON(individualLines.b60Ida, {color: "#c76706"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 60 vuelta
L.geoJSON(individualLines.b60Vuelta, {color: "#c76706"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 61 ida
L.geoJSON(individualLines.b61Ida, {color: "#c76706"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 61 vuelta 
L.geoJSON(individualLines.b61Vuelta, {color: "#c76706"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 70 ida
L.geoJSON(individualLines.b70Ida, {color: "#a98600"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 70 vuelta
L.geoJSON(individualLines.b70Vuelta, {color: "#a98600"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 71 ida
L.geoJSON(individualLines.b71Ida, {color: "#dab600"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 71 vuelta
L.geoJSON(individualLines.b71Vuelta, {color: "#dab600"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 72 ida
L.geoJSON(individualLines.b72Ida, {color: "#e9d700"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 72 vuelta
L.geoJSON(individualLines.b72Vuelta, {color: "#e9d700"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 80 ida
L.geoJSON(individualLines.b80Ida, {color: "#f20b97"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 80 vuelta
L.geoJSON(individualLines.b80Vuelta, {color: "#f20b97"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 81 ida
L.geoJSON(individualLines.b81Ida, {color: "	#f453ad"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 81 vuelta
L.geoJSON(individualLines.b81Vuelta, {color: "	#f453ad"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 82 ida
L.geoJSON(individualLines.b82Ida, {color: "#ee73c4"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 82 vuelta
L.geoJSON(individualLines.b82Vuelta, {color: "#ee73c4"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 84 ida
L.geoJSON(individualLines.b84Ida, {color: "#f29ec8"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 84 vuelta
L.geoJSON(individualLines.b84Vuelta, {color: "#f29ec8"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)




/*
// All lines single color...
L.geoJSON(all_lines, {color: "red"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)
*/

console.log(individualLines);


// -41.133159, -71.312599

// npm leaflet 
// npm react-leaflet


// const limitA = L.latLng(-41.0286, -71.0977) //top. right
// const limitB = L.latLng(-41.2022, -71.5890) // bottom. left

/*
CREATE A FUNCTION TO CHANGE COLOR:
MAKE AN ARRAY WITH 21 COLORS
LINK EACH BUS WITH A COLOR
*/