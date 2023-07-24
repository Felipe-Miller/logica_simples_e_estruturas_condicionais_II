function diaSemanal(diaescolhido) {
    document.write(diaescolhido + "<br>");
}

let num = parseInt(prompt("Escolha um número de 1 a 7:"));

let diadaSemana;

switch (num) {
    case 1:
        diadaSemana = "Domingo";
        break;
    case 2:
        diadaSemana = "Segunda";
        break;
    case 3:
        diadaSemana = "Terça";
        break;
    case 4:
        diadaSemana = "Quarta";
        break;
    case 5:
        diadaSemana = "Quinta";
        break;
    case 6:
        diadaSemana = "Sexta";
        break;
    case 7:
        diadaSemana = "Sábado";
        break;
    default:
        diadaSemana = "Opção inválida! Escolha um número de 1 a 7!";
}

diaSemanal("Dia da semana: " + diadaSemana);