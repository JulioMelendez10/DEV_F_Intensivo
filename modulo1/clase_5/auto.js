//Crear un objeto "auto" con propiedades como marca, modelo, año, y un método mostrarInfo que imprima la información del auto.

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    mostrarInfo: function() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Año: ${this.año}`);
    }   
};
auto.mostrarInfo(); 

//Ejemplo con algo diferente

const celular = {
    marca: "Apple",
    modelo: "iphone 14 Pro Max",
    año: 2022,
    materiales: "aluminio",
    almacenamiento: "512GB",
    mostrarInfo: function() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Año: ${this.año}`);
        console.log(`Materiales: ${this.materiales}`);
        console.log(`Almacenamiento: ${this.almacenamiento}`);
    }
};
celular.mostrarInfo();
