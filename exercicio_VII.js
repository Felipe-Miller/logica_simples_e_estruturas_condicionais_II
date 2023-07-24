let saldo = 500;

let valordoSaque = parseFloat(prompt("Quanto deseja sacar?"));

if (valordoSaque <= 0 || valordoSaque % 5 !== 0 || valordoSaque > saldo) {
    alert("Valor inválido!");
} else {

    let taxaSaque = valordoSaque + 4.50;

    if (taxaSaque > saldo) {
        alert("Saldo insuficiente para efetuar operação!");
    } else {
        saldo -= taxaSaque;
        alert("Operação concluída! Seu saldo ficou: R$ " + saldo.toFixed(2));
    }
}