document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(tempInput)) {
        document.getElementById('result').textContent = 'Please enter a valid number';
        return;
    }

    let temp = parseFloat(tempInput);
    let convertedTemp;

    // Convert input temperature to Celsius first
    if (inputUnit === 'fahrenheit') {
        temp = (temp - 32) * 5 / 9;
    } else if (inputUnit === 'kelvin') {
        temp = temp - 273.15;
    }

    // Convert from Celsius to desired output unit
    if (outputUnit === 'fahrenheit') {
        convertedTemp = (temp * 9 / 5) + 32;
    } else if (outputUnit === 'kelvin') {
        convertedTemp = temp + 273.15;
    } else {
        convertedTemp = temp;
    }

    document.getElementById('result').textContent = `Converted Temperature = ${convertedTemp.toFixed(2)}° ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
}
