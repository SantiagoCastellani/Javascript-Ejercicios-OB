// Factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

const num = 10
var resultado = 1

for (let i = 1 ; i <= 1000; i++){
    if (i<=num) {
        resultado = resultado*i
        continue
    }
    if (i>10) {
        break;
    }
}

console.log(resultado)