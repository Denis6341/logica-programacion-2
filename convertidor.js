let validation;

function reset() {
    clearInput();
    document.getElementById("kelvin--temperature--pharagraph").textContent = "";
    document.getElementById("fahrenheit--temperature--pharagraph").textContent = "";
}

function clearInput() {
    return document.getElementById("celsius--temperature").value = "";
}

function validateTemperature(input) {
    const inputTemperature = /^[0-9]*\.?[0.9]*$/;
    if (!inputTemperature.test(input)) { //Evaluate input vs inputTemperature and returns true if are equals. The ! niega the expresion, so its executes if the block doesnt matches.
        alert("Please, enter a valid temperature");
        clearInput();
        return false;
    }
    return true;
}

function convertToFahrenheit(celsiusTemperature) {
    return (1.8 * celsiusTemperature + 32);
}

function convertToKelvin(celsiusTemperature) {
    return (celsiusTemperature + 273.15);
}

function printKelvin(celsiusTemperature) {
    let kelvinTemperature = convertToKelvin(celsiusTemperature);
    kelvinTemperature = kelvinTemperature.toFixed(2); //Round to two decimals

    let text = `${celsiusTemperature} °C is equivalent to ${kelvinTemperature} K`

    if (validation == true) {
        document.getElementById("kelvin--temperature--pharagraph").textContent = text;
    } else {
        clearInput();
    }
    
}

function printFahrenheit(celsiusTemperature) {
    let fahrenheitTemperature = convertToFahrenheit(celsiusTemperature); 
    fahrenheitTemperature = fahrenheitTemperature.toFixed(2);//two decimals

    let text = `${celsiusTemperature} °C is equivalent to ${fahrenheitTemperature} °F`

    if (validation == true) {
        document.getElementById("fahrenheit--temperature--pharagraph").textContent = text;
    } else {
        clearInput();
    }
    
}

function main() {
    let celsiusTemperature = parseFloat(document.getElementById("celsius--temperature").value);
    validation = validateTemperature(celsiusTemperature);

    printKelvin(celsiusTemperature);
    printFahrenheit(celsiusTemperature);
    clearInput();
}