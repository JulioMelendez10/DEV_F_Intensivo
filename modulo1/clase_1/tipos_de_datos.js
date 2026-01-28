//TIPOS DE DATOS//

// Ejemplos básicos solicitados
console.log(typeof 42);             // number
console.log(typeof 'Veinticinco');  // string
console.log(typeof -666);           // number
console.log(typeof true);           // boolean
console.log(typeof 0);              // number
console.log(typeof '');             // string
console.log(typeof null);           // object (esto es una "rareza" histórica de JS)
console.log(typeof undefined);      // undefined

// Caso especial: FALSE (en mayúsculas)
// Esto NO es un booleano, es una variable no definida
try {
    console.log(typeof FALSE);
} catch (error) {
    console.log("FALSE no está definido -> ReferenceError");
}

// Ejemplos adicionales
console.log(typeof false);          // boolean
console.log(typeof 3.14);           // number
console.log(typeof NaN);            // number (aunque no sea un número válido)
console.log(typeof []);             // object (arreglos)
console.log(typeof {});             // object
console.log(typeof function () {}); // function
console.log(typeof Symbol('id'));   // symbol
