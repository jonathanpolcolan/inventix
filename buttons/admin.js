document.addEventListener('DOMContentLoaded', function() {
    
    // Selecciona el botón "PRODUCTOS" por su ID
    var conteoButton = document.getElementById('conteoButton');

    // Agrega un manejador de eventos para el clic
    conteoButton.addEventListener('click', function() {
        window.location.href = 'conteo.html'; // Redirige al usuario a 'mesero.html' al hacer clic
    });
});
//console.log(document.getElementById('productosButton'));
