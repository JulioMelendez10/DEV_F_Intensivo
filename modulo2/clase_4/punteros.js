// Función que busca el primer par de invitados consecutivos
// cuyos nombres comienzan con la misma letra
function encontrarPar(invitados) {
    // Puntero 1: inicia en la primera posición
    let i = 0;

    // Puntero 2: inicia en la siguiente posición
    let j = 1;

    // Recorremos la lista mientras j no se salga del arreglo
    while (j < invitados.length) {

        // Obtenemos la primera letra de cada nombre
        let inicial1 = invitados[i][0];
        let inicial2 = invitados[j][0];

        // Mostramos en consola lo que estamos comparando
        console.log(`Comparando: ${invitados[i]} (${inicial1}) - ${invitados[j]} (${inicial2})`);

        // Si las iniciales coinciden
        if (inicial1 === inicial2) {
            // Mostramos mensaje y retornamos el par encontrado
            console.log("✅ Par encontrado");
            return [invitados[i], invitados[j]];
        }

        // Si no coinciden, avanzamos ambos punteros
        i++;
        j++;
    }

    // Si no se encontró ningún par
    console.log("❌ No se encontró ningún par");
    return null;
}

// Lista de invitados
let invitados = [
    "Ana",
    "Beatriz",
    "Carlos",
    "Cecilia",
    "Daniel",
    "Diego",
    "Elena",
    "Esteban",
    "Fernando",
    "Gabriela",
    "Hugo",
    "Isabel",
    "Andrés",
    "Javier",
    "Karla",
    "Luis",
    "María",
    "Natalia",
    "Oscar",
    "Pablo",
    "Ricardo",
    "Sofía",
    "Teresa",
    "Valeria",
    "Zoe"
];

// Llamamos a la función
let resultado = encontrarPar(invitados);

// Mostramos el resultado final
if (resultado) {
    console.log("🎉 Invitados que pueden sentarse juntos:", resultado);
} else {
    console.log("⚠️ No hay invitados con la misma inicial consecutiva.");
}