var getPlanets = document.getElementById('showPlanets');
var planetHolderDiv = document.getElementById('planetHolder');

var planets = [ 
	{
		name: "Mercury",
		url: "https://goo.gl/images/R9crwr"	
	},
	{
		name: "Venus",
		url: "https://goo.gl/images/QgeuUu"
	},
	{
		name: "Earth",
		url: "https://goo.gl/images/sRLhj9"
	},
	{
		name: "Mars",
		url: "https://goo.gl/images/njL3r4"
	},
	{
		name: "Jupiter",
		url: "https://goo.gl/images/ufh31q"
	},
	{
		name: "Saturn",
		url: "https://goo.gl/images/YnKkPR"
	},
	{
		name: "Uranus",
		url: "https://goo.gl/images/4mNpCF"
	},
	{
		name: "Neptune",
		url: "https://goo.gl/images/VwyUYM"
	},
	{
		name: "???",
		url: "https://goo.gl/images/44ygZB"
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