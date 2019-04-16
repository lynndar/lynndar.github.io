let weatherRequest = new XMLHttpRequest();

let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=5850027&units=imperial&APPID=59b1ff61506312611db0e403529362fb';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

document.getElementById('temp').innerHTML = weatherData.main.temp;
document.getElementById('current').innerHTML = weatherData.main.temp;
document.getElementById('humid').innerHTML = weatherData.main.humidity;
}