import NodeCache from 'node-cache';
import { makeCode } from './utils.js';

const CacheRoom = new NodeCache({ stdTTL: 100, checkperiod: 7200 });

const RoomSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('edit_my_room', (myRoomPayload) => {
      if (myRoomPayload.uid) {
        CacheRoom.set(myRoomPayload.uid, { ...myRoomPayload });
        // socket.emit(
        //   `${myRoomPayload.uid}_info`,
        //   CacheRoom.get(myRoomPayload.uid),
        // );

        socket.on(`${myRoomPayload.uid}_info`, (infoPayload) => {
          socket.emit(`${myRoomPayload.uid}_info`, infoPayload);
          console.log(`infoPayload`, infoPayload);
        });
      }
    });

    socket.on('join_room', (payload) => {
      console.log(`join_room`, payload);
    });
  });
};

export default RoomSocket;
