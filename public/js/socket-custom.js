var socket = io();

// Escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola caracola'
}, function(resp) {
    console.log('Respuesta del server: ', resp);
});

// Escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});