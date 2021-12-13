import NodeCache from 'node-cache';

const CacheRoom = new NodeCache({ stdTTL: 100, checkperiod: 7200 });

const SocketRoom = (io) => {
  io.on('connection', (socket) => {
    socket.on('create_room', (createRoomPayload) => {
      if (
        createRoomPayload &&
        createRoomPayload.roomName &&
        createRoomPayload.roomCode &&
        typeof createRoomPayload.user === 'object' &&
        createRoomPayload.user.uid
      ) {
        CacheRoom.set(createRoomPayload.roomCode, createRoomPayload);
        socket.emit(
          `my_room_${createRoomPayload.user.uid}`,
          createRoomPayload.roomCode,
        );
      }
    });

    socket.on('my_room', (myRoomPayload) => {
      console.log(`myRoomPayload`, myRoomPayload);
    });

    socket.on('join_room', (joinRoomPayload) => {
      console.log(`joinRoomPayload`, joinRoomPayload);
    });
  });
};

export default SocketRoom;
