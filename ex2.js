function transporMatriz(matriz) {
    let transposta = [];

    for (let i = 0; i < 3; i++) {
        transposta[i] = [];
        for (let j = 0; j < 3; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }

    return transposta;
}

// matriz original
let matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// chamando a função
let matrizTransposta = transporMatriz(matrizOriginal);

// mostrando resultado
console.log("Matriz original:");
console.log(matrizOriginal);
console.log("Matriz transposta:");
console.log(matrizTransposta);
