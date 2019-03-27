var weatherRequest = new XMLHttpRequest();


weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?&id=5585010&units=imperial&APPID=cd3872cd815886366b88e86f315579bb', true);

weatherRequest.send();

weatherRequest.onload = function() {
   var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
    
     document.getElementById('city').innerHTML = weatherInfo.name;
     document.getElementById('current').innerHTML = weatherInfo.main.temp;
     document.getElementById('description').innerHTML = weatherInfo.weather["0"].description;
    document.getElementById('hightemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowtemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;
   
    var icon = '//openweathermap.org/img/w/' + weatherInfo.weather["0"].icon + '.png';
    document.getElementById('weatherimage').src = icon;
   }