const fs = require('fs');

fs.readFile('datos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    console.log('Datos del archivo:', data);
});

/* Cuando trabajas con datos almacenados en archivos, como leer un archivo JSON */