var weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=cd3872cd815886366b88e86f315579bb';
weatherRequest.open("Get",apiURLstring, true);
weatherRequest.send ();

weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);
    document.getElementById("cc-temp").innerHTML = weatherData.main.temp;
}


