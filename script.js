
// Grabbing Input Fields
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');
const rankine = document.getElementById('rankine');

// Celsius Conversion
celsius.oninput = () => {
    const c = parseFloat(celsius.value);
    fahrenheit.value = (c * 9) / 5 + 32 || '';
    kelvin.value = c + 273.15 || '';
    rankine.value = (c + 273.15) * 9 / 5 || '';
};

// Fahrenheit Conversion
fahrenheit.oninput = () => {
    const f = parseFloat(fahrenheit.value);
    celsius.value = ((f - 32) * 5) / 9 || '';
    kelvin.value = ((f - 32) * 5) / 9 + 273.15 || '';
    rankine.value = f + 459.67 || '';
};

// Kelvin Conversion
kelvin.oninput = () => {
    const k = parseFloat(kelvin.value);
    celsius.value = k - 273.15 || '';
    fahrenheit.value = ((k - 273.15) * 9) / 5 + 32 || '';
    rankine.value = k * 9 / 5 || '';
};

// Rankine Conversion
rankine.oninput = () => {
    const r = parseFloat(rankine.value);
    celsius.value = ((r - 491.67) * 5) / 9 || '';
    fahrenheit.value = r - 459.67 || '';
    kelvin.value = r * 5 / 9 || '';
};
