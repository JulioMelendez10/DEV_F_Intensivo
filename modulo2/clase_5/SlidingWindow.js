// Función que encuentra la palabra más larga en un texto
function encontrarPalabraMasLarga(texto) {

    // Convertimos el texto en un arreglo de palabras separadas por espacios
    let palabras = texto.split(' ');

    // Variable para guardar la palabra más larga encontrada hasta el momento
    let longestWord = "";

    // Punteros de la ventana (en este caso será de tamaño 1)
    let left = 0;
    let right = 0;

    // Recorremos el arreglo de palabras
    while (right < palabras.length) {

        // Obtenemos la palabra actual dentro de la ventana
        let palabraActual = palabras[right];

        // Mostramos en consola la palabra que estamos evaluando
        console.log(`Evaluando: ${palabraActual} (longitud: ${palabraActual.length})`);

        // Comparamos la longitud de la palabra actual con la más larga encontrada
        if (palabraActual.length > longestWord.length) {
            // Si es más larga, la guardamos
            longestWord = palabraActual;
        }

        // Deslizamos la ventana hacia la derecha
        left++;
        right++;
    }

    // Retornamos la palabra más larga encontrada
    return longestWord;
}


// Texto que el usuario puede cambiar para probar con diferentes entradas
let texto = "JavaScript es un lenguaje de programacion muy poderoso utilizado para desarrollar aplicaciones web modernas y eficientes";

// Llamamos a la función
let resultado = encontrarPalabraMasLarga(texto);

// Mostramos el resultado final
console.log("📌 La palabra más larga es:", resultado);