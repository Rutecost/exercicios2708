// Exercicio 6 - matriz identidade

function matrizIdentidade(n){
 let matriz = [];

   for (let i=0;i<n;i++){
 matriz[i] = [];
     for (let j=0;j<n;j++){
if(i==j){
   matriz[i][j]=1;
} else {
 matriz[i][j]=0;
}
 }
   }

return matriz;
}

// ---- testes ----
console.log("Matriz identidade 3x3:")
console.log(matrizIdentidade(3))

console.log("Matriz identidade 5x5:")
console.log(matrizIdentidade(5))
