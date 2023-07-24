let idade = parseInt(prompt("Digite a idade do atleta:"));

let peso = parseFloat(prompt("Digite o peso do atleta (em kg):"));

let categoria;
if (idade <= 12) {
    categoria = "Infantil";
} else if (idade >= 13 && idade <= 16) {
    if (peso <= 40) {
        categoria = "Juvenil leve";
    } else {
        categoria = "Juvenil pesado";
    }
} else if (idade >= 17 && idade <= 24) {
    if (peso <= 45) {
        categoria = "Sênior leve";
    } else if (peso <= 60) {
        categoria = "Sênior médio";
    } else {
        categoria = "Sênior pesado";
    }
} else {
    categoria = "Veterano";
}

alert("Categoria: " + categoria);