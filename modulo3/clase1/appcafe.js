const container = document.getElementById('ordersContainer');
const button = document.getElementById('addOrderBtn');

let orderId = 1;

button.addEventListener('click', () => {
    const order = {
        id: orderId++,
        status: 'En Proceso'
    };

    createOrderCard(order);
    processOrder(order);
});


// Crear tarjeta visual
function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'order-card';
    card.id = `order-${order.id}`;

    card.innerHTML = `
        <h3>Pedido #${order.id}</h3>
        <p class="status processing">En Proceso</p>
        <div class="loader">
            <div class="loader-bar"></div>
        </div>
    `;

    container.appendChild(card);
}


// Actualizar estado visual
function updateOrder(order, status) {
    const card = document.getElementById(`order-${order.id}`);
    const statusText = card.querySelector('.status');

    statusText.textContent = status;

    if (status === 'Completado') {
        statusText.classList.remove('processing');
        statusText.classList.add('completed');

        // quitar barra de carga
        const loader = card.querySelector('.loader');
        loader.style.display = 'none';
    }
}


// Simulación asincrónica
async function processOrder(order) {
    const time = Math.floor(Math.random() * 4000) + 2000;

    const promise = new Promise(resolve => {
        setTimeout(resolve, time);
    });

    await promise;

    updateOrder(order, 'Completado');
}