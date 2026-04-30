function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() {
    console.log('Adios!');
}

saludar('María', despedirse);

// Salida:

/* Hola, María!

Adios! */

/* En este ejemplo, la función despedirse se pasa como callback y se ejecuta después de que saludar imprime el mensaje. */