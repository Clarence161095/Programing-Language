import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class RealtimeGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  handleConnection = (client: Socket) => {
    console.log(client.id, 'in');
    this.server.emit('idIn', client.id);
  };

  handleDisconnect = (client: Socket) => {
    this.server.emit('idOut', client.id);
  };

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}
