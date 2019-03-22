function windchill() {
    var tempF = (90 + 66) / 2;
    var speedPower = Math.pow(5, 0.16);
    var chill = 35.74 + (0.6215 * tempF) - (35.75 * speedPower) + (0.4275 * tempF * speedPower);
    chill = Math.round(chill * 10) / 10 + ' &deg F'
    return chill;
}

document.getElementById("windChill").innerHTML = windchill();
