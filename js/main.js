import { linea10 } from './list.js'
import { all_lines } from './full-list.js'

const map = L.map('map', {
	
	// maxZoom: 13,
}).setView([-41.133, -71.312], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var corner1 = L.latLng(-41.0286, -71.0977),
corner2 = L.latLng(-41.2022, -71.5890),
bounds = L.latLngBounds(corner1, corner2);


L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJSON(linea10, ).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)
console.log(linea10);

L.geoJSON(all_lines, {color: "red"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)
console.log(all_lines);

console.log("Test:\n", map.getBounds(), getNorth(), getEast(), getSouth(), getWest());

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