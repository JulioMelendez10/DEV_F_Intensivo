const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Ruta del archivo JSON
const filePath = path.join(__dirname, 'notas.json');

// Middleware
app.use(express.json());
app.use(express.static('public'));

// ===============================
// 📌 FUNCIONES
// ===============================
function leerNotas() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
}

function guardarNotas(notas) {
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
}

// ===============================
// 🚀 RUTAS
// ===============================

// Obtener notas
app.get('/notas', (req, res) => {
    const notas = leerNotas();
    res.json(notas);
});

// Agregar nota (evita duplicados)
app.post('/notas', (req, res) => {
    const { titulo, contenido } = req.body;
    let notas = leerNotas();

    if (notas.some(nota => nota.titulo === titulo)) {
        return res.status(400).json({ mensaje: '⚠️ Ya existe una nota con ese título' });
    }

    notas.push({ titulo, contenido });
    guardarNotas(notas);

    res.json({ mensaje: '✅ Nota agregada correctamente' });
});

// Eliminar nota
app.delete('/notas/:titulo', (req, res) => {
    const titulo = req.params.titulo;
    let notas = leerNotas();

    const nuevasNotas = notas.filter(nota => nota.titulo !== titulo);
    guardarNotas(nuevasNotas);

    res.json({ mensaje: '🗑️ Nota eliminada' });
});

// ===============================
// 🌐 SERVIDOR
// ===============================
app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
});