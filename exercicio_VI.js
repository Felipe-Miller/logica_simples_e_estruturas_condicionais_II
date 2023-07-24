let num1 = parseFloat(prompt("Digite um número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let calculo = prompt("Escolha uma operação matemática (+, -, *, /):");

let operador;
        if (calculo === "+") {
            resultado = num1 + num2;
        } else if (calculo === "-") {
            resultado = num1 - num2;
        } else if (calculo === "*") {
            resultado = num1 * num2;
        } else if (calculo === "/") {
            resultado = num1 / num2;
        } else {
            alert("Resposta inválida!");
        }
        
document.write("Resultado: " + resultado);