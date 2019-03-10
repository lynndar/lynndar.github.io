//Javascript Document
//Preston, ID
var townInfo = new XMLHttpRequest();
townInfo.open("GET","https://byui-cit230.github.io/weather/data/towndata.json", true);
townInfo.send();
townInfo.onload = function() {
	
	var prestoninfo = JSON.parse(townInfo.responseText);
	console.log(prestoninfo);
	
	//document.getElementById("townName").innerHTML = cityInfo.towns["0"].name;
	document.getElementById("founded").innerHTML = prestoninfo.towns["0"].yearFounded;
	document.getElementById("moto").innerHTML = prestoninfo.towns["0"].motto;
	document.getElementById("population").innerHTML = prestoninfo.towns["0"].currentPopulation;
	document.getElementById("rain").innerHTML = prestoninfo.towns["0"].averageRainfall;
	
	
	document.getElementById("events").innerHTML = prestoninfo.towns["0"].events;

}