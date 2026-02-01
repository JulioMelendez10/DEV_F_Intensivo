// Declara la variable nota con un valor numérico entre 0 y 100

let nota = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100

// Verifica que nota sea un número positivo (truthy)
if (nota > 0) {
    let mensaje;

    // Evalúa la nota y asigna el mensaje según el rango
    if (nota >= 90) {
        mensaje = "El estudiante aprueba con Excelente.";
    } else if (nota >= 75) {
        mensaje = "El estudiante aprueba con Bien.";
    } else if (nota >= 60) {
        mensaje = "El estudiante aprueba con Suficiente.";
    } else {
        mensaje = "El estudiante no aprueba.";
    }

    // Imprime en consola la nota y el mensaje
    console.log("Nota obtenida: " + nota);
    console.log(mensaje);
    } else {
    console.log("Nota no válida. La nota debe ser un número mayor que 0.");
    }
