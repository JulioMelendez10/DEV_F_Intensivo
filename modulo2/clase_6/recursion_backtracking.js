// Función recursiva para buscar un regalo en la lista
function buscarRegalo(gifts, giftName, index = 0) {

    // CASO BASE 1:
    // Si el índice es igual al tamaño del arreglo, significa que ya recorrimos todo
    if (index === gifts.length) {
        return `❌ El regalo "${giftName}" no está en la lista`;
    }

    // Mostramos qué elemento estamos revisando
    console.log(`Revisando posición ${index}: ${gifts[index]}`);

    // CASO BASE 2:
    // Si encontramos el regalo en la posición actual
    if (gifts[index] === giftName) {
        return `✅ El regalo "${giftName}" está en la posición ${index}`;
    }

    // LLAMADA RECURSIVA:
    // Llamamos a la misma función aumentando el índice
    return buscarRegalo(gifts, giftName, index + 1);
}


// Lista de regalos
let regalos = [
    "Muñeca",
    "Carro de juguete",
    "Pelota",
    "Videojuego",
    "Rompecabezas",
    "Bicicleta",
    "Patineta",
    "Libro",
    "Audífonos",
    "Tablet",
    "Reloj",
    "Cámara",
    "Laptop",
    "Smartphone",
    "Consola",
    "Drone",
    "Guitarra",
    "Teclado",
    "Micrófono",
    "Silla gamer"
];

// Regalo a buscar
let regaloBuscado = "Laptop";

// Llamamos a la función
let resultado = buscarRegalo(regalos, regaloBuscado);

// Mostramos el resultado final
console.log(resultado);