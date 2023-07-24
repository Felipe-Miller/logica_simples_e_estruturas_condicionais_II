let velocidadeCarro = parseFloat(prompt("Insira a velocidade do veículo (em km/h):"));

if (velocidadeCarro > 80) {
    let valorMulta = (velocidadeCarro - 80) * 5;
    alert("Você foi multado! O valor estipulado foi de R$ " + valorMulta.toFixed(2));

} else {
    alert("Parabéns! você está dentro do limite de velocidade.");
}