//Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.
//Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
//Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

const librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros que has leído:");
    librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro}`);
    });
}

// Ejemplo de uso:
agregarLibro("Cien años de soledad");
agregarLibro("Don Quijote de la Mancha");
agregarLibro("El amor en los tiempos del cólera");
mostrarLibrosLeidos();

