/* Funcionalidad Boton Agregar Comentario */

/* 1️⃣ Obtener Elementos del DOM */
const formulario = document.getElementById("formComentario");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const tituloLibroInput = document.getElementById("titulo_libro");
const textarea = document.getElementById("textoComentario");
const lista = document.getElementById("listaComentarios");


/* 2️⃣ Escuchar el evento submit */
formulario.addEventListener("submit", function(event) {

    // Evita recarga de página
    event.preventDefault();

    // Obtener valores
    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();
    const tituloLibro = tituloLibroInput.value.trim();
    const comentario = textarea.value.trim();

    // Validación simple
    if (nombre === "" || correo === "" || tituloLibro === "" || comentario === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    /* 3️⃣ Crear contenedor del comentario */
    const comentarioDiv = document.createElement("div");

    // Crear elementos
    const nombreElemento = document.createElement("h3");
    nombreElemento.textContent = nombre;

    const correoElemento = document.createElement("p");
    correoElemento.textContent = "Correo: " + correo;

    const tituloLibroElemento = document.createElement("h4");
    tituloLibroElemento.textContent = "Título del Libro: " + tituloLibro;

    const comentarioElemento = document.createElement("p");
    comentarioElemento.textContent = comentario;

    const fechaElemento = document.createElement("small");
    fechaElemento.textContent = "Publicado el: " + new Date().toLocaleString();

    /* 4️⃣ Botón eliminar */
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function() {
        lista.removeChild(comentarioDiv);
    });

    /* 5️⃣ Agregar todo al contenedor */
    comentarioDiv.appendChild(nombreElemento);
    comentarioDiv.appendChild(correoElemento);
    comentarioDiv.appendChild(tituloLibroElemento);
    comentarioDiv.appendChild(comentarioElemento);
    comentarioDiv.appendChild(fechaElemento);
    comentarioDiv.appendChild(document.createElement("br"));
    comentarioDiv.appendChild(botonEliminar);

    lista.appendChild(comentarioDiv);

    /* 6️⃣ Limpiar formulario */
    formulario.reset();
});