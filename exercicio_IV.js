let custodeFabrica = parseFloat(prompt("Digite o custo de fábrica do veículo:"));

let custoDistribuidor = custodeFabrica * 0.28;

let custoLogistica = custodeFabrica * 0.45;

let custoFinal = custodeFabrica + custoDistribuidor + custoLogistica;

document.write("O custo final ao consumidor é: R$ " + custoFinal.toFixed(3) + "<br>");