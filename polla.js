// URL del WebSocket (reemplázala con tu URL)
const wsUrl = 'wss://eventsub.wss.twitch.tv/ws';

// Crear una instancia de WebSocket
const socket = new WebSocket(wsUrl);

// Evento que se dispara cuando la conexión se establece con éxito
socket.addEventListener('open', (event) => {
  console.log('Conexión WebSocket establecida:', event);
  
  // Enviar un mensaje al servidor una vez que la conexión esté establecida
  socket.send('Hola, servidor!');
});

// Evento que se dispara cuando se recibe un mensaje del servidor
socket.addEventListener('message', (event) => {
  console.log('Mensaje del servidor:', event.data);
});

// Evento que se dispara cuando se cierra la conexión
socket.addEventListener('close', (event) => {
  console.log('Conexión cerrada:', event);
});

// Evento que se dispara en caso de error
socket.addEventListener('error', (event) => {
  console.error('Error en la conexión:', event);
});

// Cerrar la conexión cuando sea necesario
// socket.close();