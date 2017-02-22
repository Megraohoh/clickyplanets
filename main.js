var getPlanets = document.getElementById('showPlanets');
var planetHolderDiv = document.getElementById('planetHolder');

var planets = [ 
	{
		name: "Mercury",
		url: ""	
	},
	{
		name: "Venus",
		url: ""
	},
	{
		name: "Earth",
		url: ""
	},
	{
		name: "Mars",
		url: ""
	},
	{
		name: "Saturn",
		url: ""
	},
	{
		name: "Uranus",
		url: ""
	},
	{
		name: "Neptune",
		url: ""
	},
	{
		name: "Jupiter",
		url: ""
	},
	{
		name: "???",
		url: ""
	},
];


function writeToDom() {
	planetHolderDiv.innerHTML = ""; //wipes clean the DOM each time btn is hit
	for (var i = 0; i < planets.length; i++) {
		var newPlanet=""; //empty string

		newPlanet += `<div class="planetBox" id="planetBox-${i}">` //use i since it's a counter and the id will increase numerical value (view in inspect elements)
			//$ tells the browser that the code is js inside the html

		newPlanet += `<div class="planetName"> ${planets[i].name} </div>`; //string templating	
		
		newPlanet += `</div>`
	planetHolderDiv.innerHTML += newPlanet;
	}
}	

getPlanets.addEventListener("click", writeToDom)