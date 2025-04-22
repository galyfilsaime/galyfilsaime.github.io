// Function to append output to the HTML page and log to console
const outputDiv = document.getElementById('output');
const appendOutput = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    outputDiv.appendChild(p);
    console.log(text); // Log to console for debugging
};

// Function to add section header
const addSectionHeader = (title) => {
    const h3 = document.createElement('h3');
    h3.textContent = title;
    outputDiv.appendChild(h3);
    console.log(`\n=== ${title} ===\n`); // Log section header for console
};

// Part A: BMI Comparison
addSectionHeader('A.');
const lucasMass = 78; // kg
const lucasHeight = 1.69; // meters
const peterMass = 92; // kg
const peterHeight = 1.95; // meters

const lucasBMI = lucasMass / (lucasHeight * lucasHeight);
const peterBMI = peterMass / (peterHeight * peterHeight);
const lucasHigherBMI = lucasBMI > peterBMI;

appendOutput(`The BMI of Peter is ${peterBMI.toFixed(1)}. The BMI of Lucas is ${lucasBMI.toFixed(1)}, Peter's BMI is higher than Lucas's BMI that is ${!lucasHigherBMI}`);

// Part B: Temperature Converter
addSectionHeader('B.');
const celsiusTemp = 25; // Example Celsius temperature
const fahrenheitTemp = 77; // Example Fahrenheit temperature

const celsiusToFahrenheit = (celsiusTemp * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheitTemp - 32) * 5/9;

appendOutput(`${celsiusTemp}°C is ${celsiusToFahrenheit}°F`);
appendOutput(`${fahrenheitTemp}°F is ${fahrenheitToCelsius}°C`);

// Part C: Improved BMI Output
addSectionHeader('C.');
if (lucasHigherBMI) {
    appendOutput(`Lucas' BMI (${lucasBMI.toFixed(1)}) is higher than Peter's (${peterBMI.toFixed(1)})!`);
} else {
    appendOutput(`Peter's BMI (${peterBMI.toFixed(1)}) is higher than Lucas' (${peterBMI.toFixed(1)})!`);
}

// Part D: Temperature Conversion Functions
addSectionHeader('D.');
const ConvertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    appendOutput(`${celsius}°C is ${fahrenheit}°F`);
};

// Test Data for Celsius to Fahrenheit
ConvertCelsiusToFahrenheit(100);
ConvertCelsiusToFahrenheit(0);
ConvertCelsiusToFahrenheit(10);

const ConvertFahrenheitToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5/9;
    appendOutput(`${fahrenheit}°F is ${celsius}°C`);
};

// Test Data for Fahrenheit to Celsius
ConvertFahrenheitToCelsius(32);
ConvertFahrenheitToCelsius(10);
ConvertFahrenheitToCelsius(102);