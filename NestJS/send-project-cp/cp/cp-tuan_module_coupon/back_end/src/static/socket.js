const socket = io('http://localhost:9000', { transports: ['websocket'] });

const message = document.getElementById('message');
const messages = document.getElementById('messages');
var id;
const handleSubmitNewMessage = () => {
  socket.emit('message', { data: message.value });
};

socket.on('message', ({ data }) => {
  handleNewMessage(data);
});

socket.on('idIn', (data) => {
  id = data;
});

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(`${id} : ${message}`));
};

const buildNewMessage = (message) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
};
