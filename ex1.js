function somarMatrizes(matrizA, matrizB) {
    let resultado = [];
   
    for (let i = 0; i < 3; i++) {
        resultado[i] = [];
        for (let j = 0; j < 3; j++) {
            resultado[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }
   
    return resultado;
}
 
let matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
 
let matrizB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
];
 
let matrizResultado = somarMatrizes(matrizA, matrizB);
console.log(matrizResultado);