// Imports
import {
	individualLines
} from "./individual-lines.js";


// Creating the map, CyclOSM theme
const map = L.map('map', {}).setView([-41.150, -71.320], 13);
L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Departure-return button
let returnButton = document.querySelectorAll(".side-button");
let onOffReturn = 0
let displayLineText = document.querySelector(".display-line")
for (const returnLine of returnButton) {
	returnLine.addEventListener('click', function () {


		if (displayLine) {
			displayLine.remove(); // Remove the existing line before adding the new one
			for (const button of buttons) {
				if (button.id.endsWith(' on')) {
					const newId = button.id.replace(' on', ' off');
					button.id = newId;
					whoIsOn = null
				};
			}
		}
		let changeBackground = document.querySelectorAll(".side-nav, .info-display");
		displayLineText.style.fontWeight = "200"
		if (onOffReturn === 0) {
			returnLine.textContent = "Vuelta";
			displayLineText.textContent = "Buses vuelta"
			onOffReturn++;
			for (const element of changeBackground) {
				element.style.background = "rgba(255, 0, 0, 0.8)";
				element.offsetHeight; // Trigger animation for each element
			}
		} else {
			returnLine.textContent = "Ida";
			displayLineText.textContent = "Buses ida"

			for (const element of changeBackground) {
				element.style.background = "rgba(0, 0, 255, 0.8)";
				element.offsetHeight; // Trigger animation for each element
			}
			onOffReturn--;
		}

	})
}


// Button stuff
let displayLine;
let whoIsOn = null; // Track the currently active button ID
let buttons = document.querySelectorAll(".button");
for (const button of buttons) {
	button.addEventListener('click', function () {
		let trayectory = this.id.split(' ');
		let departure = trayectory[0];
		let returnLine = trayectory[1];
		let newDisplayLine
		const selectedButtonName = button.textContent;
		let displayLineText = document.querySelector(".display-line");

		if (onOffReturn === 1) {
			newDisplayLine = L.geoJSON(individualLines[returnLine], {
				style: function (feature) {
					return {
						color: feature.properties.stroke,
						weight: 5
					};
				}
			}).bindPopup(function (layer) {
				return layer.feature.properties.name;
			})
		} else {
			newDisplayLine = L.geoJSON(individualLines[departure], {
				style: function (feature) {
					return {
						color: feature.properties.stroke,
						weight: 5
					};
				}
			}).bindPopup(function (layer) {
				return layer.feature.properties.name;
			});
		}

		// Update active lines based on the clicked button
		if (this.id.endsWith(' off')) {
			const newId = this.id.replace(' off', ' on');
			button.id = newId;

			// Toggle the previously active button's state if there is one
			if (whoIsOn !== null) {
				const previousButtonId = whoIsOn;
				const previousButton = document.getElementById(previousButtonId);
				previousButton.id = previousButtonId.replace(' on', ' off');
			}

			// Update the currently active button ID
			whoIsOn = button.id;

			if (displayLine) {
				displayLine.remove(); // Remove the existing line before adding the new one
			}

			displayLine = newDisplayLine;
			displayLine.addTo(map);
			displayLineText.style.fontWeight = "400"
			displayLineText.textContent = `Bus ${selectedButtonName}`;


		} else if (this.id.endsWith(' on')) {
			const newId = this.id.replace(' on', ' off');
			button.id = newId;
			// Clear the currently active button ID
			whoIsOn = null;
			displayLine.remove();
			displayLine = null; // Clear reference to the removed line
			displayLineText.style.fontWeight = "200"
			displayLineText.textContent = "Ninguno";
		}
	});
}