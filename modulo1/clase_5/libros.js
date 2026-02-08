// Crea un objeto literal llamado 'libro' que contiene toda la información del libro
const libro = {
    // Propiedad 'titulo': almacena el nombre del libro como string
    titulo: "Cien años de soledad",
    // Propiedad 'autor': almacena el nombre del autor como string
    autor: "Gabriel García Márquez",
    // Propiedad 'anio': almacena el año de publicación como número entero
    anio: 1967,
    // Propiedad 'estado': indica si está disponible o prestado ('disponible'/'prestado')
    estado: "disponible",
    
    // Método 'describirLibro': función que imprime la info completa del libro
    describirLibro: function() {
        // console.log: imprime mensaje formateado en la consola del navegador
        // Template literal con ${}: inserta valores de las propiedades usando 'this'
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
};

// Llama al método describirLibro del objeto 'libro' para ejecutar la función
// 'libro.describirLibro()': accede al método usando notación de punto
libro.describirLibro();
