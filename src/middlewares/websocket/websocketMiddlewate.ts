import { Middleware } from "redux";
import io, { Socket } from "socket.io-client";
import { addMessage } from "../../slices/messages/messagesSlice";

export let socket: Socket;

const websocketMiddleware: Middleware = (storeAPI) => {
  return (next) => (action) => {
    switch (action.type) {
      case "WEBSOCKET_CONNECT":
        socket = io(action.payload.url, {
          transports: ["websocket"],
          autoConnect: true,
        });

        socket.emit("JoinGroup", {
          key: "a688123fcfdcfa08b6934839ea4276",
        });

        socket.emit("ReceiveAllMessages", {
          key: "a688123fcfdcfa08b6934839ea4276",
        });

        socket.on("ReceiveMessages", (value) => {
          console.log(value);

          for (let msg of value) {
            storeAPI.dispatch(addMessage(msg));
          }
        });
        break;
      case "WEBSOCKET_SEND":
        if (socket.active) {
          socket.send(JSON.stringify(action.payload));
        }
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
