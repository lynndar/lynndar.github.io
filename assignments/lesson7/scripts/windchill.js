function computeFactor() {

    // Declare variables & pull values from HTML fields
    var temperature = parseFloat(document.getElementById('temperature').value);
    var windspeed = parseFloat(document.getElementById('windspeed').value);

    // Call the calculateChill() function
    var windchill = calculateChill(temperature, windspeed);

    // Output the value in windchill to the HTML div
    outputDiv.innerHTML = "With the wind chill factor, the air temperature feels like: " + windchill.toFixed(2) + "°";
}

function calculateChill(tempF, speed) {
    var chill = (35.74 + (.6215 * tempF)) - (35.75 * Math.pow(speed, .16)) + (.4275 * (tempF * Math.pow(speed, .16)));
    return chill;
}

// This function resets the form.
function resetFunction() {
    document.getElementById("myForm").reset();
}