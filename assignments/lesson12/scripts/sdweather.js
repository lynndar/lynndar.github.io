let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5391811&units=imperial&APPID=59b1ff61506312611db0e403529362fb";
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById('currently').innerHTML = weatherData.list[0].weather[0].description;    
    document.getElementById('high').innerHTML = weatherData.list[0].main.temp_max.toFixed(0);
    document.getElementById('humidity').innerHTML = weatherData.list[0].main.humidity;
    document.getElementById('wind').innerHTML = weatherData.list[0].wind.speed;
}



