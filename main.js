var getPlanets = document.getElementById('showPlanets');
var planetHolderDiv = document.getElementById('planetHolder');

var planets = [ 
	{
		name: "Mercury",
		url: "https://www.nasa.gov/sites/default/files/mercury_1.jpg"	
	},
	{
		name: "Venus",
		url: "http://s.glbimg.com/jo/g1/f/original/2012/02/10/nasavenus1.jpg"
	},
	{
		name: "Earth",
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcA8Bh1Mq20sT-0IHlMVMg5qL0P-hBOHktJN4z6dBr3CCCWNqv9I"
	},
	{
		name: "Mars",
		url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMiXmYCJV9oU3LXhUOKD4eGKG9zqK8tGunWus8KYPwcEC3hOE6y8Y"
	},
	{
		name: "Jupiter",
		url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR6baoUFckIq_INibQ0_htBY8CBz85qltaE1x3U4D9S6Ktj_mKA458"
	},
	{
		name: "Saturn",
		url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTctoXv7ZRCwvvofTL3vmmf6z0OPeY3ZTvgl0qkpgndA_M7Y3gRvhfheor3BLx-Sfrrx4E"
	},
	{
		name: "Uranus",
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Uranus_clouds.jpg/170px-Uranus_clouds.jpg"
	},
	{
		name: "Neptune",
		url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSb4yAGQyZqC9rkBIymG1aR1f983geu0J8STUyuQzZtsgEn3r_17XE"
	},
	{
		name: "???",
		url: "data:image/jpeg;base64,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"
	},
];


function writeToDom() {
	planetHolderDiv.innerHTML = ""; //wipes clean the DOM each time btn is hit
	for (var i = 0; i < planets.length; i++) {
		var newPlanet=""; //empty string

		newPlanet += `<div class="planetBox" id="planetBox-${i}">` //use i since it's a counter and the id will increase numerical value (view in inspect elements)
			//$ tells the browser that the code is js inside the html

		newPlanet += `<div class="planetName hidden"> ${planets[i].name} </div>`; //string templating	
		newPlanet += `<img class="planetImage" src="${planets[i].url}">`
		newPlanet += `</div>`
	planetHolderDiv.innerHTML += newPlanet;
	}
}	

function showMeTheMoney(event){
	if(event.target.className === 'planetImage'){
	console.log("event worked", event);
	// console.log("event worked", event.target.parentNode.id); //unique identifier affected by js (line 49)
	console.log("text?", event.target.previousSibling);
	event.target.previousSibling.classList.remove('hidden');
	}	
}

getPlanets.addEventListener("mouseenter", writeToDom);

// console.log("planetBoxes", planetBoxes)

document.body.addEventListener("click", showMeTheMoney);


//second click should make 'hidden' hidden again
//click btn to make 'hidden' hidden again














