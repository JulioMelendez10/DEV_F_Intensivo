const readline = require("readline");

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    const productos = [
    { nombre: "Laptop", precio: 15000, categoria: "Electrónica" },
    { nombre: "Mouse", precio: 200, categoria: "Electrónica" },
    { nombre: "Teclado", precio: 80, categoria: "Electrónica" },
    { nombre: "Libreta", precio: 50, categoria: "Papelería" },
    { nombre: "Pluma", precio: 20, categoria: "Papelería" },
    { nombre: "Audífonos", precio: 90, categoria: "Electrónica" }
    ];

    const mostrarMenu = () => {
    console.log("\n--- MENÚ ---");
    console.log("1. Ver productos < $100");
    console.log("2. Ver nombres ordenados");
    console.log("3. Total de productos baratos");
    console.log("4. Salir");

    rl.question("Elige una opción: ", opcion => {
        ejecutarOpcion(opcion);
    });
    };

    const ejecutarOpcion = (opcion) => {
    const baratos = productos.filter(p => p.precio < 100);

    switch (opcion) {
        case "1":
        console.log("\nProductos baratos:");
        console.log(baratos);
        break;

        case "2":
        const ordenados = [...baratos].sort((a, b) =>
            a.nombre.localeCompare(b.nombre)
        );
        const nombres = ordenados.map(p => p.nombre);
        console.log("\nNombres ordenados:");
        console.log(nombres);
        break;

        case "3":
        const total = baratos.reduce((acc, p) => acc + p.precio, 0);
        console.log("\nTotal:", total);
        break;

        case "4":
        console.log("Adiós 👋");
        rl.close();
        return;

        default:
        console.log("Opción inválida");
    }

    mostrarMenu();
    };

    mostrarMenu();