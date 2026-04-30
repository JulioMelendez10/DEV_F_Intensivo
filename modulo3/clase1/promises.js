const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa cumplida'), 1000);
});

promesa.then(resultado => console.log(resultado));