// import { linea10 } from './list.js'
// import { all_lines } from './full-list.js'
import {
	individualLines
} from "./individual-lines.js";

const map = L.map('map', {}).setView([-41.150, -71.320], 13);

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





const busColors = {
	linea_10: "#FF0000", // Red
	linea_20: "#008000", // Green
	linea_30: "#FFFF00", // Yellow
	linea_40: "#0000FF", // Blue
	linea_50: "#FFC0CB", // Pink
	linea_60: "#00FFFF", // Cyan
	linea_70: "#800080", // Purple
	linea_80: "#808080", // Gray
};


function addGeoJSONLayer(bondiNum, bondiColor) {
	(bondiNum, {color: bondiColor}).bindPopup(function (layer) {return layer.feature.properties.name;});

  	addGeoJSONLayer.addTo(map) ;
  console.log(queseyo);
}



// function addGeoJSONLayer(geoJSONData, color) {
// 	let queseyo = `L.geoJSON(${geoJSONData}, {
//     color: ${color}
//   }).bindPopup(function (layer) {
//     return layer.feature.properties.name;
//   });

//   geoJSONLayer.addTo(map) `;
//   console.log(queseyo);
// }
//  console.log("my line", addGeoJSONLayer("b10", busColors.linea_10));
//  console.log(typeof addGeoJSONLayer("b20", busColors.linea_10));




const buttonValues = {
  button0: ["value1", "value2"], // Button 1 is paired with two values
  button1: ["value3"], // Button 2 is paired with one value
  button2: [], // Button 3 has no paired values
};


/* Previous code
const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', function() {
        console.log(`Clicked button: ${this.id}`);

        let buttonIds = [this.id]; // Create an array of button IDs
        for (const buttonId of buttonIds) {
            let myIds = buttonId
			console.log(myIds);
			}
			const values = buttonValues[buttonIds];
			console.log(buttonIds, buttonIds.length);
			if (this.style.color === "white") {
				this.style.color = 'whitesmoke';
				this.style.background = "rgba(0,0,0,0)"
			} else {
				this.style.color = "white";
				this.style.background = "rgba(8, 8, 133, 0.8)"
			}
			//console.log(typeof this.id);

			if (this.id === "button0") {
				let testin = addGeoJSONLayer("b10", busColors.linea_10)
				console.log(testin);
			}
			// console.log("ButtonID", buttonId, "Value:", values);
		}

	);
}
*/


let buttons = document.querySelectorAll(".button")
for (const button of buttons) {
    button.addEventListener('click', function() {
        let ids = this.id.split(' ');
        let selectedLine = ids[0];

        function mySelection() {
            L.geoJSON(individualLines[selectedLine], {
                color: "#dab600"
            }).bindPopup(function(layer) {
                return layer.feature.properties.name;
            }).addTo(map);
        }

        mySelection(selectedLine); // Pass the selectedLine value to the function
        console.log(selectedLine);
    });
}



/*
for (let button of buttons) {
  button.addEventListener('click', function() {
    console.log(`Clicked button: ${this.id}`);
    if (this.style.color === "red") {
      this.style.color = 'whitesmoke';
    } else {
      this.style.color = "red";
    }
  });
}
*/



// Buttons sidenav - Turn on/off liens
// let bus_10
// let switch_0 = 0
// let button = document.querySelector("#button0");
// button.addEventListener("mouseup", (e) => {
// 	if (switch_0 == 0) {
// 		bus_10 = L.geoJSON(individualLines.b10, {
// 			color: "#3bd6c6"
// 		}).bindPopup(function (layer) {
// 			return layer.feature.properties.name
// 		}).addTo(map);
// 		switch_0 = 1
// 	} else {
// 		bus_10 = bus_10.remove(map);
// 		switch_0 = 0
// 	}
// });



/*

let b13
let switch_1 = 0
let button1 = document.querySelector("#button1");
button1.addEventListener("mouseup", (e) => {
	if (switch_1 == 0) {
		b13 = L.geoJSON(individualLines.b13, {
			color: "#43e8d8"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_1 = 1
	} else {
		b13 = b13.remove(map);
		switch_1 = 0
	}
});

let b20
let switch_2 = 0
let button2 = document.querySelector("#button2");
button2.addEventListener("mouseup", (e) => {
	if (switch_2 == 0) {
		b20 = L.geoJSON(individualLines.b20, {
			color: "#004c4c"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_2 = 1
	} else {
		b20 = b20.remove(map);
		switch_2 = 0
	}
});

let b21
let switch_3 = 0
let button3 = document.querySelector("#button3");
button3.addEventListener("mouseup", (e) => {
	if (switch_3 == 0) {
		b21 = L.geoJSON(individualLines.b21, {
			color: "#006666"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_3 = 1
	} else {
		b21 = b21.remove(map);
		switch_3 = 0
	}
});

let b22Ida
let switch_4 = 0
let button4 = document.querySelector("#button4");
button4.addEventListener("mouseup", (e) => {
	if (switch_4 == 0) {
		b22Ida = L.geoJSON(individualLines.b22Ida, {
			color: "#008080"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_4 = 1
	} else {
		b22Ida = b22Ida.remove(map);
		switch_4 = 0
	}
});

let b22Vuelta
let switch_5 = 0
let button5 = document.querySelector("#button4");
button5.addEventListener("mouseup", (e) => {
	if (switch_5 == 0) {
		b22Vuelta = L.geoJSON(individualLines.b22Vuelta, {
			color: "#008080"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_5 = 1
	} else {
		b22Vuelta = b22Vuelta.remove(map);
		switch_5 = 0
	}
});

let b30Ida
let switch_6 = 0
let button6 = document.querySelector("#button5");
button6.addEventListener("mouseup", (e) => {
	if (switch_6 == 0) {
		b30Ida = L.geoJSON(individualLines.b30Ida, {
			color: "	#660066"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_6 = 1
	} else {
		b30Ida = b30Ida.remove(map);
		switch_6 = 0
	}
});

let b30Vuelta
let switch_7 = 0
let button7 = document.querySelector("#button5");
button7.addEventListener("mouseup", (e) => {
	if (switch_7 == 0) {
		b30Vuelta = L.geoJSON(individualLines.b30Vuelta, {
			color: "	#660066"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_7 = 1
	} else {
		b30Vuelta = b30Vuelta.remove(map);
		switch_7 = 0
	}
});

let b31Ida
let switch_8 = 0
let button8 = document.querySelector("#button6");
button8.addEventListener("mouseup", (e) => {
	if (switch_8 == 0) {
		b31Ida = L.geoJSON(individualLines.b31Ida, {
			color: "#800080"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_8 = 1
	} else {
		b31Ida = b31Ida.remove(map);
		switch_8 = 0
	}
});

let b31Vuelta
let switch_9 = 0
let button9 = document.querySelector("#button6");
button9.addEventListener("mouseup", (e) => {
	if (switch_9 == 0) {
		b31Vuelta = L.geoJSON(individualLines.b31Vuelta, {
			color: "#800080"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_9 = 1
	} else {
		b31Vuelta = b31Vuelta.remove(map);
		switch_9 = 0
	}
});

let b40Ida
let switch_10 = 0
let button10 = document.querySelector("#button7");
button10.addEventListener("mouseup", (e) => {
	if (switch_10 == 0) {
		b40Ida = L.geoJSON(individualLines.b40Ida, {
			color: "#a70000"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_10 = 1
	} else {
		b40Ida = b40Ida.remove(map);
		switch_10 = 0
	}
});

let b40Vuelta
let switch_11 = 0
let button11 = document.querySelector("#button7");
button11.addEventListener("mouseup", (e) => {
	if (switch_11 == 0) {
		b40Vuelta = L.geoJSON(individualLines.b40Vuelta, {
			color: "#a70000"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_11 = 1
	} else {
		b40Vuelta = b40Vuelta.remove(map);
		switch_11 = 0
	}
});

let b41Ida
let switch_12 = 0
let button12 = document.querySelector("#button8");
button12.addEventListener("mouseup", (e) => {
	if (switch_12 == 0) {
		b41Ida = L.geoJSON(individualLines.b41Ida, {
			color: "#ff0000"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_12 = 1
	} else {
		b41Ida = b41Ida.remove(map);
		switch_12 = 0
	}
});

let b41Vuelta
let switch_13 = 0
let button13 = document.querySelector("#button8");
button13.addEventListener("mouseup", (e) => {
	if (switch_13 == 0) {
		b41Vuelta = L.geoJSON(individualLines.b41Vuelta, {
			color: "#ff0000"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_13 = 1
	} else {
		b41Vuelta = b41Vuelta.remove(map);
		switch_13 = 0
	}
});

let b50Ida
let switch_14 = 0
let button14 = document.querySelector("#button9");
button14.addEventListener("mouseup", (e) => {
	if (switch_14 == 0) {
		b50Ida = L.geoJSON(individualLines.b50Ida, {
			color: "#006203"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_14 = 1
	} else {
		b50Ida = b50Ida.remove(map);
		switch_14 = 0
	}
});

let b50Vuelta
let switch_15 = 0
let button15 = document.querySelector("#button9");
button15.addEventListener("mouseup", (e) => {
	if (switch_15 == 0) {
		b50Vuelta = L.geoJSON(individualLines.b50Vuelta, {
			color: "#006203"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_15 = 1
	} else {
		b50Vuelta = b50Vuelta.remove(map);
		switch_15 = 0
	}
});

let b51Ida
let switch_16 = 0
let button16 = document.querySelector("#button10");
button16.addEventListener("mouseup", (e) => {
	if (switch_16 == 0) {
		b51Ida = L.geoJSON(individualLines.b51Ida, {
			color: "#0f9200"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_16 = 1
	} else {
		b51Ida = b51Ida.remove(map);
		switch_16 = 0
	}
});

let b51Vuelta
let switch_17 = 0
let button17 = document.querySelector("#button10");
button17.addEventListener("mouseup", (e) => {
	if (switch_17 == 0) {
		b51Vuelta = L.geoJSON(individualLines.b51Vuelta, {
			color: "#0f9200"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)


		switch_17 = 1
	} else {
		b51Vuelta = b51Vuelta.remove(map);
		switch_17 = 0
	}
});

let b55Ida
let switch_18 = 0
let button18 = document.querySelector("#button11");
button18.addEventListener("mouseup", (e) => {
	if (switch_18 == 0) {
		b55Ida = L.geoJSON(individualLines.b55Ida, {
			color: "#30cb00"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_18 = 1
	} else {
		b55Ida = b55Ida.remove(map);
		switch_18 = 0
	}
});

let b55Vuelta
let switch_19 = 0
let button19 = document.querySelector("#button11");
button19.addEventListener("mouseup", (e) => {
	if (switch_19 == 0) {
		b55Vuelta = L.geoJSON(individualLines.b55Vuelta, {
			color: "#30cb00"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_19 = 1
	} else {
		b55Vuelta = b55Vuelta.remove(map);
		switch_19 = 0
	}
});

let b55bIda
let switch_20 = 0
let button20 = document.querySelector("#button12");
button20.addEventListener("mouseup", (e) => {
	if (switch_20 == 0) {
		b55bIda = L.geoJSON(individualLines.b55bIda, {
			color: "#4ae54a"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_20 = 1
	} else {
		b55bIda = b55bIda.remove(map);
		switch_20 = 0
	}
});

let b55bVuelta
let switch_21 = 0
let button21 = document.querySelector("#button12");
button21.addEventListener("mouseup", (e) => {
	if (switch_21 == 0) {
		b55bVuelta = L.geoJSON(individualLines.b55bVuelta, {
			color: "#4ae54a"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_21 = 1
	} else {
		b55bVuelta = b55bVuelta.remove(map);
		switch_21 = 0
	}
});

let b60Ida
let switch_22 = 0
let button22 = document.querySelector("#button13");
button22.addEventListener("mouseup", (e) => {
	if (switch_22 == 0) {
		b60Ida = L.geoJSON(individualLines.b60Ida, {
			color: "#c76706"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_22 = 1
	} else {
		b60Ida = b60Ida.remove(map);
		switch_22 = 0
	}
});

let b60Vuelta
let switch_23 = 0
let button23 = document.querySelector("#button13");
button23.addEventListener("mouseup", (e) => {
	if (switch_23 == 0) {
		b60Vuelta = L.geoJSON(individualLines.b60Vuelta, {
			color: "#c76706"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_23 = 1
	} else {
		b60Vuelta = b60Vuelta.remove(map);
		switch_23 = 0
	}
});

let b61Ida
let switch_24 = 0
let button24 = document.querySelector("#button14");
button24.addEventListener("mouseup", (e) => {
	if (switch_24 == 0) {
		b61Ida = L.geoJSON(individualLines.b61Ida, {
			color: "#c76706"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_24 = 1
	} else {
		b61Ida = b61Ida.remove(map);
		switch_24 = 0
	}
});

let b61Vuelta
let switch_25 = 0
let button25 = document.querySelector("#button14");
button25.addEventListener("mouseup", (e) => {
	if (switch_25 == 0) {
		b61Vuelta = L.geoJSON(individualLines.b61Vuelta, {
			color: "#c76706"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_25 = 1
	} else {
		b61Vuelta = b61Vuelta.remove(map);
		switch_25 = 0
	}
});

let b70Ida
let switch_26 = 0
let button26 = document.querySelector("#button15");
button26.addEventListener("mouseup", (e) => {
	if (switch_26 == 0) {
		b70Ida = L.geoJSON(individualLines.b70Ida, {
			color: "#a98600"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_26 = 1
	} else {
		b70Ida = b70Ida.remove(map);
		switch_26 = 0
	}
});

let b70Vuelta
let switch_27 = 0
let button27 = document.querySelector("#button15");
button27.addEventListener("mouseup", (e) => {
	if (switch_27 == 0) {
		b70Vuelta = L.geoJSON(individualLines.b70Vuelta, {
			color: "#a98600"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_27 = 1
	} else {
		b70Vuelta = b70Vuelta.remove(map);
		switch_27 = 0
	}
});

let b71Ida
let switch_28 = 0
let button28 = document.querySelector("#button16");
button28.addEventListener("mouseup", (e) => {
	if (switch_28 == 0) {
		b71Ida = L.geoJSON(individualLines.b71Ida, {
			color: "#dab600"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)


		switch_28 = 1
	} else {
		b71Ida = b71Ida.remove(map);
		switch_28 = 0
	}
});

let b71Vuelta
let switch_29 = 0
let button29 = document.querySelector("#button16");
button29.addEventListener("mouseup", (e) => {
	if (switch_29 == 0) {
		b71Vuelta = L.geoJSON(individualLines.b71Vuelta, {
			color: "#dab600"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_29 = 1
	} else {
		b71Vuelta = b71Vuelta.remove(map);
		switch_29 = 0
	}
});

let b72Ida
let switch_30 = 0
let button30 = document.querySelector("#button17");
button30.addEventListener("mouseup", (e) => {
	if (switch_30 == 0) {
		b72Ida = L.geoJSON(individualLines.b72Ida, {
			color: "#e9d700"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_30 = 1
	} else {
		b72Ida = b72Ida.remove(map);
		switch_30 = 0
	}
});

let b72Vuelta
let switch_31 = 0
let button31 = document.querySelector("#button17");
button31.addEventListener("mouseup", (e) => {
	if (switch_31 == 0) {
		b72Vuelta = L.geoJSON(individualLines.b72Vuelta, {
			color: "#e9d700"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_31 = 1
	} else {
		b72Vuelta = b72Vuelta.remove(map);
		switch_31 = 0
	}
});

let b80Ida
let switch_32 = 0
let button32 = document.querySelector("#button18");
button32.addEventListener("mouseup", (e) => {
	if (switch_32 == 0) {
		b80Ida = L.geoJSON(individualLines.b80Ida, {
			color: "#f20b97"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_32 = 1
	} else {
		b80Ida = b80Ida.remove(map);
		switch_32 = 0
	}
});

let b80Vuelta
let switch_33 = 0
let button33 = document.querySelector("#button18");
button33.addEventListener("mouseup", (e) => {
	if (switch_33 == 0) {
		b80Vuelta = L.geoJSON(individualLines.b80Vuelta, {
			color: "#f20b97"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_33 = 1
	} else {
		b80Vuelta = b80Vuelta.remove(map);
		switch_33 = 0
	}
});

let b81Ida
let switch_34 = 0
let button34 = document.querySelector("#button19");
button34.addEventListener("mouseup", (e) => {
	if (switch_34 == 0) {
		b81Ida = L.geoJSON(individualLines.b81Ida, {
			color: "	#f453ad"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_34 = 1
	} else {
		b81Ida = b81Ida.remove(map);
		switch_34 = 0
	}
});

let b81Vuelta
let switch_35 = 0
let button35 = document.querySelector("#button19");
button35.addEventListener("mouseup", (e) => {
	if (switch_35 == 0) {
		b81Vuelta = L.geoJSON(individualLines.b81Vuelta, {
			color: "	#f453ad"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_35 = 1
	} else {
		b81Vuelta = b81Vuelta.remove(map);
		switch_35 = 0
	}
});

let b82Ida
let switch_36 = 0
let button36 = document.querySelector("#button20");
button36.addEventListener("mouseup", (e) => {
	if (switch_36 == 0) {
		b82Ida = L.geoJSON(individualLines.b82Ida, {
			color: "#ee73c4"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_36 = 1
	} else {
		b82Ida = b82Ida.remove(map);
		switch_36 = 0
	}
});

let b82Vuelta
let switch_37 = 0
let button37 = document.querySelector("#button20");
button37.addEventListener("mouseup", (e) => {
	if (switch_37 == 0) {
		b82Vuelta = L.geoJSON(individualLines.b82Vuelta, {
			color: "#ee73c4"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_37 = 1
	} else {
		b82Vuelta = b82Vuelta.remove(map);
		switch_37 = 0
	}
});

let b84Ida
let switch_38 = 0
let button38 = document.querySelector("#button21");
button38.addEventListener("mouseup", (e) => {
	if (switch_38 == 0) {
		b84Ida = L.geoJSON(individualLines.b84Ida, {
			color: "#f29ec8"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)
		button38.style.color = "red"
		switch_38 = 1
	} else {
		b84Ida = b84Ida.remove(map);
		switch_38 = 0
		button38.style.color = "whitesmoke"

	}
});

let b84Vuelta
let switch_39 = 0
let button39 = document.querySelector("#button21");
button39.addEventListener("mouseup", (e) => {
	if (switch_39 == 0) {
		b84Vuelta = L.geoJSON(individualLines.b84Vuelta, {
			color: "#f29ec8"
		}).bindPopup(function (layer) {
			return layer.feature.properties.name
		}).addTo(map)

		switch_39 = 1
	} else {
		b84Vuelta = b84Vuelta.remove(map);
		switch_39 = 0
	}
});





// let display = 0

// const hideShow = () => {
// 	if (display == 1) {
// 		bus_10.style.display = 'block'
// 		display = 0
// 	}
// 	else {
// 		bus_10.style.display = 'none'
// 		display = 1
// 	}
// }
// ---------------- Lineas -------------------

*/


/*
// Linea 10
L.geoJSON(individualLines.b10, {color: "#3bd6c6"}).bindPopup(function(layer){
	return layer.feature.properties.name
}).addTo(map)

// Linea 13
L.geoJSON(individualLines.b13, {
	color: "#43e8d8"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)
*/

/*
// Linea 20
const trying_20 = {
	on: L.geoJSON(individualLines.b20, {
		color: "#004c4c"
	}).bindPopup(function (layer) {
		return layer.feature.properties.name
	}),

	off: L.geoJSON(individualLines.b20, {
		color: "#004c4c"
	}).bindPopup(function (layer) {
		return layer.feature.properties.name
	}).remove(map)
}

// console.log(trying_20.off)
*/

/*
// Linea 21
L.geoJSON(individualLines.b21, {
	color: "#006666"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 22 ida
L.geoJSON(individualLines.b22Ida, {
	color: "#008080"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 22 vuelta
L.geoJSON(individualLines.b22Vuelta, {
	color: "#008080"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 30 ida
L.geoJSON(individualLines.b30Ida, {
	color: "	#660066"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 30 vuelta
L.geoJSON(individualLines.b30Vuelta, {
	color: "	#660066"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 31 ida
L.geoJSON(individualLines.b31Ida, {
	color: "#800080"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 31 vuelta
L.geoJSON(individualLines.b31Vuelta, {
	color: "#800080"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 40 ida
L.geoJSON(individualLines.b40Ida, {
	color: "#a70000"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 40 vuelta
L.geoJSON(individualLines.b40Vuelta, {
	color: "#a70000"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 41 ida
L.geoJSON(individualLines.b41Ida, {
	color: "#ff0000"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 41 vuelta
L.geoJSON(individualLines.b41Vuelta, {
	color: "#ff0000"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)
*
// Linea 50 ida
L.geoJSON(individualLines.b50Ida, {
	color: "#006203",
	weight: 3.5
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)
/*
// Linea 50 vuelta
const bus50v = L.geoJSON(individualLines.b50Vuelta, {
	color: "#006203"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 51 ida
L.geoJSON(individualLines.b51Ida, {
	color: "#0f9200"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 51 vuelta
L.geoJSON(individualLines.b51Vuelta, {
	color: "#0f9200"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 55 ida
L.geoJSON(individualLines.b55Ida, {
	color: "#30cb00"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 55 vuelta
L.geoJSON(individualLines.b55Vuelta, {
	color: "#30cb00"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 55b ida
L.geoJSON(individualLines.b55bIda, {
	color: "#4ae54a"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 55b vuelta
L.geoJSON(individualLines.b55bVuelta, {
	color: "#4ae54a"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 60 ida
L.geoJSON(individualLines.b60Ida, {
	color: "#c76706"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 60 vuelta
L.geoJSON(individualLines.b60Vuelta, {
	color: "#c76706"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 61 ida
L.geoJSON(individualLines.b61Ida, {
	color: "#c76706"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 61 vuelta
L.geoJSON(individualLines.b61Vuelta, {
	color: "#c76706"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 70 ida
L.geoJSON(individualLines.b70Ida, {
	color: "#a98600"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 70 vuelta
L.geoJSON(individualLines.b70Vuelta, {
	color: "#a98600"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 71 ida
L.geoJSON(individualLines.b71Ida, {
	color: "#dab600"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 71 vuelta
L.geoJSON(individualLines.b71Vuelta, {
	color: "#dab600"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 72 ida
L.geoJSON(individualLines.b72Ida, {
	color: "#e9d700"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 72 vuelta
L.geoJSON(individualLines.b72Vuelta, {
	color: "#e9d700"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 80 ida
L.geoJSON(individualLines.b80Ida, {
	color: "#f20b97"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 80 vuelta
L.geoJSON(individualLines.b80Vuelta, {
	color: "#f20b97"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 81 ida
L.geoJSON(individualLines.b81Ida, {
	color: "	#f453ad"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 81 vuelta
L.geoJSON(individualLines.b81Vuelta, {
	color: "	#f453ad"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 82 ida
L.geoJSON(individualLines.b82Ida, {
	color: "#ee73c4"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 82 vuelta
L.geoJSON(individualLines.b82Vuelta, {
	color: "#ee73c4"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 84 ida
L.geoJSON(individualLines.b84Ida, {
	color: "#f29ec8"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)

// Linea 84 vuelta
L.geoJSON(individualLines.b84Vuelta, {
	color: "#f29ec8"
}).bindPopup(function (layer) {
	return layer.feature.properties.name
}).addTo(map)
*/
