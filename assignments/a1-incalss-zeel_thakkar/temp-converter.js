
"use strict";

const tempFahrenheit= parseInt(prompt("Enter Fahrenheit temperature:"));

const tempCelsius=parseFloat((5/9)*(tempFahrenheit-32));

const temp = `Fahrenheit Temperature= ${tempFahrenheit}
Celsius Temperature= ${tempCelsius.toFixed(3)}`;

alert(temp);
            