let altura = parseFloat(prompt("Digite o número de sua altura:"));

let peso = parseFloat(prompt("Digite o número do seu peso:"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
            document.write("Você está abaixo do nível ideal.");
        } else if (imc > 24.99) {
            document.write("Você está acima do nível ideal.");
        } else {
            document.write("Parabéns! Você está na média.");
        }