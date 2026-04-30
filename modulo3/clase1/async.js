async function obtenerDatos() {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos();