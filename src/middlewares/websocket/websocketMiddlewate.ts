import { Middleware } from "redux";
import io, { Socket } from "socket.io-client";
import { addMessage } from "../../slices/messages/messagesSlice";

export let socket: Socket;

const websocketMiddleware: Middleware = (storeAPI) => {
  return (next) => (action) => {
    switch (action.type) {
      case "WEBSOCKET_CONNECT":
        console.log(action.payload.key);

        socket = io(action.payload.url, {
          transports: ["websocket"],
          autoConnect: true,
        });

        socket.emit("JoinGroup", {
          key: action.payload.key,
        });

        socket.emit("ReceiveAllMessages", {
          key: action.payload.key,
        });

        socket.on("ReceiveMessages", (value) => {
          for (let msg of value) {
            storeAPI.dispatch(addMessage(msg));
          }
        });

        socket.on("Error", (err) => {
          console.log(err);
        });
        break;
      case "WEBSOCKET_DISCONNECT":
        socket.disconnect();
        break;
      default:
        return next(action);
    }
  };
};

export default websocketMiddleware;
