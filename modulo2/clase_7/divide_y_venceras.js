// Función que encuentra el número máximo usando Divide and Conquer
function findMax(arr) {

    // CASO BASE:
    // Si el arreglo tiene un solo elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // DIVIDIR:
    // Calculamos el punto medio del arreglo
    const mid = Math.floor(arr.length / 2);

    // Dividimos el arreglo en dos mitades
    const left = arr.slice(0, mid);   // Primera mitad
    const right = arr.slice(mid);     // Segunda mitad

    // CONQUISTAR (recursión):
    // Buscamos el máximo en cada mitad
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // COMBINAR:
    // Comparamos ambos máximos y devolvemos el mayor
    return leftMax > rightMax ? leftMax : rightMax;
}


// Arreglo
const numbers = [3, 8, 2, 10, 5, 7, 15, 1, 20, 6];

// Llamamos a la función
const resultado = findMax(numbers);

// Mostramos el resultado
console.log(" El número máximo es:", resultado);