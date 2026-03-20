// 1. Crear arreglo vacío
let listaDeCompras = [];

// 2. Función para agregar producto (sin duplicados)
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`"${producto}" agregado a la lista.`);
  } else {
    console.log(`"${producto}" ya está en la lista.`);
  }
};

// 3. Función para eliminar producto
const eliminarProducto = (producto) => {
  const indice = listaDeCompras.indexOf(producto);

  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`"${producto}" eliminado de la lista.`);
  } else {
    console.log(`"${producto}" no se encontró en la lista.`);
  }
};

// 4. Función para mostrar la lista
const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
  } else {
    console.log("Lista de compras:");
    listaDeCompras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto}`);
    });
  }
};

// Ejemplo de uso
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Huevos");
agregarProducto("Pan"); // duplicado

mostrarLista();

eliminarProducto("Pan");

mostrarLista();

/* Esto es u prototipo el cual es estatico */