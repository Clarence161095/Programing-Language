import NodeCache from 'node-cache';

const CacheRoom = new NodeCache({ stdTTL: 100, checkperiod: 7200 });

const SocketRoom = (io) => {
  io.on('connection', (socket) => {
    socket.on('create_room', (createRoomPayload) => {
      console.log(`createRoomPayload`, createRoomPayload);
    });

    socket.on('join_room', (joinRoomPayload) => {
      console.log(`joinRoomPayload`, joinRoomPayload);
    });
  });
};

export default SocketRoom;
