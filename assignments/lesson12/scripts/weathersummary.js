/*Weather for Alaska*/
var weatherRequest = new XMLHttpRequest();
var apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5879348&APPID= cd3872cd815886366b88e86f315579bb&units=imperial";

weatherRequest.open('GET',apiURL,true);
weatherRequest.responseType = "text";
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.response);
    console.log(weatherData);
    document.getElementById("deg").innerHTML = weatherData.main.temp;
    document.getElementById("current-condition").innerHTML = weatherData.weather[0].main;
    document.getElementById("hum").innerHTML = weatherData.main.humidity;

    var iconcode = weatherData.weather[0].icon;
    var icon_path = "https://openweathermap.org/img/w/"+ iconcode + ".png";
};

/*Weather for San Diego*/
var weatherRequest4 = new XMLHttpRequest();
var apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5735724&APPID=cd3872cd815886366b88e86f315579bb&units=imperial";

weatherRequest4.open('GET',apiURL,true);
weatherRequest4.responseType = "text";
weatherRequest4.send();

weatherRequest4.onload = function() {
    var weatherData = JSON.parse(weatherRequest4.response);
    console.log(weatherData);
    document.getElementById("deg2").innerHTML = weatherData.main.temp;
    document.getElementById("current-condition2").innerHTML = weatherData.weather[0].main;
    document.getElementById("hum2").innerHTML = weatherData.main.humidity;

    var iconcode = weatherData.weather[0].icon;
    var icon_path = "https://openweathermap.org/img/w/"+ iconcode + ".png";
};

/*Weather for St. George*/
var weatherRequest5 = new XMLHttpRequest();
var apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5780026&APPID=cd3872cd815886366b88e86f315579bb&units=imperial";

weatherRequest5.open('GET',apiURL,true);
weatherRequest5.responseType = "text";
weatherRequest5.send();

weatherRequest5.onload = function() {
    var weatherData = JSON.parse(weatherRequest5.response);
    console.log(weatherData);
    document.getElementById("deg3").innerHTML = weatherData.main.temp;
    document.getElementById("current-condition3").innerHTML = weatherData.weather[0].main;
    document.getElementById("hum3").innerHTML = weatherData.main.humidity;

    var iconcode = weatherData.weather[0].icon;
    var icon_path = "https://openweathermap.org/img/w/"+ iconcode + ".png";
}

/*Weather for Hawaii */
var weatherRequest6 = new XMLHttpRequest();
var apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5780993&APPID=cd3872cd815886366b88e86f315579bb&units=imperial";

weatherRequest6.open('GET',apiURL,true);
weatherRequest6.responseType = "text";
weatherRequest6.send();

weatherRequest6.onload = function() {
    var weatherData = JSON.parse(weatherRequest6.response);
    console.log(weatherData);
    document.getElementById("deg4").innerHTML = weatherData.main.temp;
    document.getElementById("current-condition4").innerHTML = weatherData.weather[0].main;
    document.getElementById("hum4").innerHTML = weatherData.main.humidity;

    var iconcode = weatherData.weather[0].icon;
    var icon_path = "https://openweathermap.org/img/w/"+ iconcode + ".png";
}
