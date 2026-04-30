console.log('Inicio');

setTimeout(() => {

    console.log('Esto sucede después de 2 segundos');

}, 2000);

console.log('Fin');

// Salida:

/* Inicio

Fin */

/* Esto sucede después de 2 segundos

Aquí, el callback dentro de setTimeout se ejecuta después de 2 segundos, mientras que el resto del código sigue ejecutándose. */