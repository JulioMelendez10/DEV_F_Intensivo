// Cargar notas
async function cargarNotas() {
    const res = await fetch('/notas');
    const notas = await res.json();

    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    notas.forEach(nota => {
        const div = document.createElement('div');
        div.className = 'nota';

        div.innerHTML = `
            <strong>${nota.titulo}</strong>
            <p>${nota.contenido}</p>
            <button onclick="eliminarNota('${nota.titulo}')">Eliminar</button>
        `;

        lista.appendChild(div);
    });
}

// Agregar nota
async function agregarNota() {
    const titulo = document.getElementById('titulo').value.trim();
    const contenido = document.getElementById('contenido').value.trim();

    if (!titulo || !contenido) {
        alert('⚠️ Completa todos los campos');
        return;
    }

    const res = await fetch('/notas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, contenido })
    });

    const data = await res.json();
    alert(data.mensaje);

    cargarNotas();
}

// Eliminar nota
async function eliminarNota(titulo) {
    await fetch(`/notas/${titulo}`, { method: 'DELETE' });
    cargarNotas();
}

// Inicializar
cargarNotas();