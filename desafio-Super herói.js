// Solicita o nome e a experiência (XP) do herói ao usuário
const nomeHeroi = prompt("Digite o nome do herói:");
const xpHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Variável para armazenar o nível do herói
let nivelHeroi;

// Verifica o valor de XP e define o nível do herói
if (xpHeroi < 1000) {
    nivelHeroi = "Ferr";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Exibe a mensagem com o nome e o nível do herói
console.log(`O herói de nome ${nomeHeroi}
