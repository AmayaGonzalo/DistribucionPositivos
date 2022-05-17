let numeroIngresado: number;
let numPositivos: number = 0;
let numNegativos: number = 0;
let cantNumeros: number = 0;
let porcentaje: number;

while (numeroIngresado !== 0) {
  numeroIngresado = Number(prompt("Ingrese un número: "));
  if (numeroIngresado === 0) {
    break;
  } else if (numeroIngresado > 0) {
    numPositivos = numPositivos + 1;
  } else {
    numNegativos = numNegativos + 1;
  }
}
cantNumeros = numPositivos + numNegativos;
porcentaje = (numPositivos / cantNumeros) * 100;
console.log(numPositivos + " Positivos " + porcentaje + "% del total.");
