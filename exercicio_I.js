function temperaturaConvertida(temperatura) {
     document.write(temperatura + "<br>");
    }    

let tempCelsius = parseFloat(prompt("Digite a temperatura e graus Célsius:"));

let tempFahrenheit = (tempCelsius * 9/5) + 32;
temperaturaConvertida("Equivalente em graus Fahrenheit: " + tempFahrenheit.toFixed(2));