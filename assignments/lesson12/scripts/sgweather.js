let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&APPID=59b1ff61506312611db0e403529362fb';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
document.getElementById('windspeed').innerHTML = weatherData.wind.speed;
document.getElementById('humidity').innerHTML = weatherData.main.humidity;



let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

let desc = weatherData.weather[0].description;
}