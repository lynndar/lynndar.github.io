/**
 * Function that starts on load and requests information from the town JSON file - creates weatherData JSON object.
 */
weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText); // Create JSON weatherData object.
    //console.log(weatherData); // Used for testing.

    document.getElementById('highTemp').innerHTML = weatherData.main.temp_max; // Add temperature value to Html element id 'highTemp' on town homepage.

    document.getElementById('current').innerHTML = weatherData.weather[0].description; // Add current weather description to Html element id 'current' on town homepage.

    document.getElementById('speed').innerHTML = weatherData.wind.speed; // Add wind speed value to Html element id 'speed' on town homepage.

    document.getElementById('humidity').innerHTML = weatherData.main.humidity; // Add humidity value to Html element id 'humidity' on town homepage.

    document.getElementById('windchill').innerHTML = ConvertWindChill(weatherData.main.temp, weatherData.wind.speed); // Call function ConvertWindChill and add returned value to Html element id "windChill".
}


