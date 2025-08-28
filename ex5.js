// Exercicio 5 - busca em matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function buscarNumero(m, numero) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (m[i][j] === numero) {
                return [i, j]; // achei o número, devolvo linha e coluna
            }
        }
    }
    return null; // se não achar
}

// ---- testes ----
console.log("Buscando o número 5:");
console.log(buscarNumero(matriz, 5)); // deve dar [1,1]

console.log("Buscando o número 8:");
console.log(buscarNumero(matriz, 8)); // deve dar [2,1]

console.log("Buscando o número 20:");
console.log(buscarNumero(matriz, 20)); // não tem, dá null
