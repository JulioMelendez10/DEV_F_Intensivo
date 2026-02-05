// Declara el arreglo con varios tipos de frutas
const frutas = [
    'manzana', 'banana', 'manzana', 'naranja', 
    'banana', 'pera', 'manzana', 'kiwi', 'naranja'
];

// Crea un objeto para almacenar la cantidad de cada tipo
const conteo = {};

// Usa un ciclo for...of para recorrer y contar
for (const fruta of frutas) {
    if (conteo[fruta]) {
        conteo[fruta]++;
    } else {
        conteo[fruta] = 1;
    }
}

// Imprime en consola la cantidad de cada tipo
console.log('Cantidad de cada tipo de fruta:');
for (const [fruta, cantidad] of Object.entries(conteo)) {
    console.log(`${fruta}: ${cantidad}`);
}
