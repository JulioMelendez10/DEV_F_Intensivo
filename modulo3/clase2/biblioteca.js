// ===============================
// 📚 DATOS INICIALES (JSON)
// ===============================
let biblioteca = {
    libros: [
        {
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            genero: "Realismo mágico",
            disponible: true
        },
        {
            titulo: "1984",
            autor: "George Orwell",
            genero: "Distopía",
            disponible: true
        }
    ]
};

// ===============================
// 📖 FUNCIÓN: LEER DATOS (SIMULADA)
// ===============================
// Esta función simula leer un archivo JSON con retraso
function leerDatos(callback) {
    setTimeout(() => {
        console.log("\n⏳ Leyendo datos...");
        callback(biblioteca); // ejecuta el callback con los datos
    }, 1000);
}

// ===============================
// 💾 FUNCIÓN: ESCRIBIR DATOS (SIMULADA)
// ===============================
// Simula guardar cambios en el "archivo"
function escribirDatos(nuevosDatos, callback) {
    setTimeout(() => {
        console.log("💾 Guardando cambios...");
        biblioteca = nuevosDatos; // actualizamos el objeto
        callback(); // ejecutamos el callback cuando termina
    }, 1000);
}

// ===============================
// 📋 FUNCIÓN: MOSTRAR LIBROS
// ===============================
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("\n📚 Inventario de libros:");

        datos.libros.forEach((libro, index) => {
            console.log(
                `${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`
            );
        });
    });
}

// ===============================
// ➕ FUNCIÓN: AGREGAR LIBRO
// ===============================
function agregarLibro(titulo, autor, genero, disponible) {
    leerDatos((datos) => {
        const nuevoLibro = { titulo, autor, genero, disponible };

        // Agregamos el libro al arreglo
        datos.libros.push(nuevoLibro);

        // Guardamos los cambios
        escribirDatos(datos, () => {
            console.log(`\n✅ Libro agregado: ${titulo}`);
        });
    });
}

// ===============================
// 🔄 FUNCIÓN: ACTUALIZAR DISPONIBILIDAD
// ===============================
function actualizarDisponibilidad(titulo, nuevoEstado) {
    leerDatos((datos) => {

        // Buscamos el libro por título
        const libro = datos.libros.find(lib => lib.titulo === titulo);

        if (libro) {
            libro.disponible = nuevoEstado;

            // Guardamos los cambios
            escribirDatos(datos, () => {
                console.log(`\n🔄 Estado actualizado: ${titulo} ahora está ${nuevoEstado ? 'Disponible' : 'Prestado'}`);
            });

        } else {
            console.log(`\n❌ Libro no encontrado: ${titulo}`);
        }
    });
}

// ===============================
// 🚀 EJECUCIÓN DE PRUEBA
// ===============================

// Mostrar libros iniciales
mostrarLibros();

// Agregar un libro nuevo
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);

// Actualizar disponibilidad
actualizarDisponibilidad("1984", false);

// Mostrar nuevamente para ver cambios
setTimeout(() => {
    mostrarLibros();
}, 4000);