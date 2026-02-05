//ciclo for de 10 a 1
for (let contador = 10; contador >= 1; contador--) {
    console.log(contador);
}   
console.log("¡Despegue!");

//imprimir la suma de numeros pares del 1 al 20
let suma = 0;
for (let numero = 1; numero <= 20; numero++) {
    if (numero % 2 === 0) {
        suma += numero;
    }
}
console.log("La suma de los números pares del 1 al 20 es: " + suma);
