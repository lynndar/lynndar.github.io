//Javascript Document
//Preston, ID
var townInfo = new XMLHttpRequest();
townInfo.open("GET","https://byui-cit230.github.io/weather/data/towndata.json", true);
townInfo.send();
townInfo.onload = function() {
	
	var cityInfo = JSON.parse(townInfo.responseText);
	console.log(cityInfo);
	
	//document.getElementById("townName").innerHTML = cityInfo.towns["0"].name;
	document.getElementById("founded").innerHTML = cityInfo.towns["0"].yearFounded;
	document.getElementById("motto").innerHTML = cityInfo.towns["0"].motto;
	document.getElementById("population").innerHTML = cityInfo.towns["0"].currentPopulation;
	document.getElementById("rain").innerHTML = cityInfo.towns["0"].averageRainfall;
	
	
	document.getElementById("events").innerHTML = cityInfo.towns["0"].events;

}