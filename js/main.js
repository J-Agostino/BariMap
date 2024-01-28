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

var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	// attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
		if (mySelector === "Ida" || mySelector === "Out") {
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


// Button stuff
let displayLine;
let whoIsOn = null; // Track the currently active button ID
let buttons = document.querySelectorAll(".button");
for (const button of buttons) {
	button.addEventListener('click', function () {

		let trayectory = this.id.split(' ');
		let departure = trayectory[0]; // I'm using this to display the schedule(horarios)
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

		// Display horarios
		const targetLocation = document.querySelector(".horarios-img-container");
		targetLocation.innerHTML = '' // Clear the div space for next horario
		fetch('./servicios.html')
			.then(response => response.text())
			.then(htmlContent => {
				const parser = new DOMParser();
				const sourceDocument = parser.parseFromString(htmlContent, 'text/html');
				let targetElement = sourceDocument.querySelectorAll(`#${departure} `); // Grab by button id

				if (targetElement.length === 0) {
					if (departure === 'b22Ida') {
						targetElement = sourceDocument.querySelectorAll('#b13')
					} else if (departure === "b81Ida") {
						targetElement = sourceDocument.querySelectorAll('#b71Ida')
					} else if (departure === "b55bIda") {
						targetElement = sourceDocument.querySelectorAll('#b55Ida')
					}
				}
				targetElement.forEach(element => {
					const clonedElement = element.cloneNode(true);
					targetLocation.appendChild(clonedElement);
				});
			});

		// Update active lines based on the clicked button :
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

//Translation
const translateButton = document.querySelector("#translate-button")
let whichLanguage = "english"

translateButton.addEventListener('click', function () {
	const translatedWords = ["Project", "Contact", "Bus Lines", "Out", "Return", "Showing:", "Outbound bus", "Aprox freq:", "-- minutes", "See full schedule"]
	let translatedCounter = 0
	const translate = document.querySelectorAll("#translate")
	const spanishText = ['Proyecto', 'Contacto','Líneas', 'Ida', 'Vuelta', 'Mostrando: ', 'Buses ida', 'Frecuencia aprox:', '-- minutos', 'Más info horaria']
	//translate to english
	if (whichLanguage === "english") {

		//Change the words for me please
		translate.forEach((text) => {
			const actTranslation = translatedWords[translatedCounter]
			text.textContent = actTranslation
			translatedCounter++
		})
		whichLanguage = "spanish"
		translatedCounter = 0
		translateButton.textContent = "Traducir"
		//translate to spanish
	} else if (whichLanguage === "spanish") {
		translate.forEach((text) => {
			const actTranslation = spanishText[translatedCounter]
			text.textContent = actTranslation
			translatedCounter++
		})
		whichLanguage = "english"
		translatedCounter = 0
		translateButton.textContent = "Translate"
	}
})