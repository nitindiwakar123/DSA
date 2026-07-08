function convertTemperature(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.80 + 32.00;

    return [kelvin, fahrenheit];
}

// Test Cases
// console.log(convertTemperature(0));
// console.log(convertTemperature(36.50));
// console.log(convertTemperature(122.11));
