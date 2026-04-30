setTimeout(() => {

    console.log('Primera tarea completada');

    setTimeout(() => {

        console.log('Segunda tarea completada');

        setTimeout(() => {

            console.log('Tercera tarea completada');

        }, 1000);

    }, 1000);

}, 1000);

/* Aunque funcional, este código es complicado de seguir. Afortunadamente, 
existen soluciones como las Promesas y async/await, pero los callbacks siguen siendo la base. */