let forecastRequest = new XMLHttpRequest();
let apiURLforecastString = 'https://api.openweathermap.org/data/2.5/forecast?id=5879400&units=imperial&APPID=cd3872cd815886366b88e86f315579bb';
forecastRequest.open('Get', apiURLforecastString, true);
forecastRequest.send();

/**
 * Called once the forecast request is finished.
 * Creates JSON object - forecastData to be used to gather town information.
 * Creates section in Html for daily forecast to be displayed.
 * Calls function for CreateFiveDayForecast
 */
forecastRequest.onload = function() {
   let forecastData = JSON.parse(forecastRequest.responseText);
   // console.log(forecastData);

   var section = document.getElementById('dailyForecast'); // Name section forecast will be displayed in.
   
}