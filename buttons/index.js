document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón por su ID
    var adminButton = document.getElementById('adminButton');

    // Agrega un manejador de eventos para el clic
    adminButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // Redirige al usuario al hacer clic
    });

    // Selecciona el botón por su ID
    var meseroButton = document.getElementById('meseroButton');

    // Agrega un manejador de eventos para el clic
    meseroButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // Redirige al usuario al hacer clic
    });

    // Selecciona el botón "PRODUCTOS" por su ID
    var productosButton = document.getElementById('productosButton');

    // Agrega un manejador de eventos para el clic
    productosButton.addEventListener('click', function() {
        window.location.href = 'mesero.html'; // Redirige al usuario a 'mesero.html' al hacer clic
    });
});
//console.log(document.getElementById('productosButton'));
