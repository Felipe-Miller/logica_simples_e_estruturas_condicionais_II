let input = prompt("Digite um número:");
let number = +input; 

if (isNaN(number)) {
            alert("Digite um valor válido!.");
        } else {
            if (number > 0) {
                alert("O número é positivo.");
            } else if (number < 0) {
                alert("O número é negativo.");
            } else {
                alert("O número é zero.");
            }
        }
