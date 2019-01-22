
const tempConversion = () => {

let soort = prompt("Welke conversion?:\n \n0. End of the program\n1. Celsius to Fahrenheit\n2. Celsius to Kelvin\n3. Fahrenheit to Celsius\n4. Fahrenheit to Kelvin\n5. Kelvin to Celsius\n6. Kelvin to Fahrenheit")



switch (soort) {

    case "0":
    break;

    case "1":
     getal = prompt ("welk getal wil je converten? (Celcius to Fahrenheit)")
    alert(`${parseInt(getal)}°C = ${(parseInt(getal)*9/5)+32} °Fahrenheit`);
    break;

    case "2":
     getal = prompt ("welk getal wil je converten? (Celcius to Kelvin)")
    alert(`${parseInt(getal)}°C = ${parseInt(getal)+273.15} Kelvin`);
    break;

    case "3":
     getal = prompt ("welk getal wil je converten? (Fahrenheit to Celcius)")
    alert(`${parseInt(getal)}°Fahrenheit = ${(parseInt(getal)-32) / (9/5)}°C`);
    break;

    case "4":
     getal = prompt ("welk getal wil je converten? (Fahrenheit to Kelvin)")
    alert(`${parseInt(getal)}°Fahrenheit = ${((parseInt(getal)-32) * (5/9)) + 273.15} Kelvin`);
    break;

    case "5":
     getal = prompt ("welk getal wil je converten? (Kelvin to Celcius)")
    alert(`${parseInt(getal)} Kelvin = ${parseInt(getal) - 273.15}°C`);
    break;

    case "6":
     getal = prompt ("welk getal wil je converten? (Kelvin to Fahrenheit)")
    alert(`${parseInt(getal)} Kelvin = ${(parseInt(getal)* 9/5) - 459.67}°Fahrenheit`);
    break;
  }


// [°F] = ([°C] x 9/5) + 32
// [K] = [°C] + 273,15
// [°C] = ([°F] - 32) / (9/5)
// [K] = (([°F] - 32) x (5/9)) + 273,15
// [°C] = [K] - 273,15
// [°F] = ([K] x 9/5) - 459,67

}
