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

		// Toggle ida-vuelta button
		const mySelector = returnLine.textContent // Tells the content of the element
		if (mySelector === "Ida") {
			returnLine.style.background = "rgba(240, 248, 255, 0.219)"
			returnButton[1].style.background = "rgba(240, 248, 255, 0)";
			// Change the background color nav
			displayLineText.textContent = "Buses ida"

			for (const sNavContainer of changeBackground) {
				sNavContainer.style.background = "var(--ACCENT)";
				// sNavContainer.offsetHeight; // Trigger animation for each sNavContainer
			}
			onOffReturn--;

		} else {
			returnLine.style.background = "rgba(240, 248, 255, 0.219)"
			returnButton[0].style.background = "rgba(240, 248, 255, 0)";
			// Change the background color nav
			displayLineText.textContent = "Buses vuelta"
			for (const sNavContainer of changeBackground) {
				sNavContainer.style.background = "var(--ACCENT-RETURN)";
				// sNavContainer.offsetHeight; // Trigger animation for each sNavContainer
			}
			onOffReturn++;

		}
	})
}

// Schedule images
const horarios = {
	b10: {
		week: "imgs-horarios/10-LV.png"
	},
	b13: {
		week: "imgs-horarios/13-22-IDK.png"
	},
	b20: {
		week: "imgs-horarios/20-LV.png"
	},
	b21: {
		week: "imgs-horarios/21-LV.png"
	},
	b22Ida: {
		week: "imgs-horarios/13-22IDK.png",
		weekend: "imgs-horarios/.png"
	},
	b30Ida: {
		week: "imgs-horarios/30-LS.png",
		weekend: "imgs-horarios/.png"
	},
	b31Ida: {
		week: "imgs-horarios/31-.png",
		weekend: "imgs-horarios/.png"
	},
	b40Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b41Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b50Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b51Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b55Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b55bIda: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b60Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b61Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b70Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b71Ida: {
		week: "imgs-horarios/71-81-HABIL.png",
		weekend: "imgs-horarios/"
	},
	b72Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b80Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b81Ida: {
		week: "imgs-horarios/71-81-HABIL.png",
		weekend: "imgs-horarios/"
	},
	b82Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
	b84Ida: {
		week: "imgs-horarios/.png",
		weekend: "imgs-horarios/.png"
	},
}

fetch('./servicios.html')
	.then(response => response.text())
	.then(htmlContent => {
		const parser = new DOMParser();
		const tableDocument = parser.parseFromString(htmlContent, 'text/html');
		const tableElement = tableDocument.querySelector('table');

		const targetLocation = document.querySelector('#horarios');
		const clonedTableElement = tableElement.cloneNode(true);

		targetLocation.appendChild(clonedTableElement);
	});







// Button stuff
let displayLine;
let whoIsOn = null; // Track the currently active button ID
let buttons = document.querySelectorAll(".button");
for (const button of buttons) {
	button.addEventListener('click', function () {
		let trayectory = this.id.split(' ');
		let departure = trayectory[0]; // I'm using this to display the schedule(horarios)
		let returnLine = trayectory[1];
		// console.log(departure);
		let newDisplayLine
		const selectedButtonName = button.textContent;
		let displayLineText = document.querySelector(".display-line");

		const image = document.getElementById('horarios');

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

		// Update active lines based on the clicked button :
		if (this.id.endsWith(' off')) {
			const newId = this.id.replace(' off', ' on');
			button.id = newId;
			const showThisHorario = horarios[departure]["week"] //Returns the content, the string that goes into src=""
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

			// console.log(showThisHorario);
			image.src = showThisHorario

			// When there's no line selected :
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