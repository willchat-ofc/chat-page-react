import { Middleware } from "redux";
import io, { Socket } from "socket.io-client";
import { addMessage } from "../../slices/messages/messagesSlice";

const websocketMiddleware: Middleware = (storeAPI) => {
  let socket: Socket;

  return (next) => (action) => {
    switch (action.type) {
      case "WEBSOCKET_CONNECT":
        socket = io(action.payload.url, {
          transports: ["websocket"],
        });

        socket.emit("joinGroup", {
          key: "a688123fcfdcfa08b6934839ea4276",
        });

        socket.emit("ReceiveAllMessages", {
          key: "a688123fcfdcfa08b6934839ea4276",
        });

        socket.on("ReceiveMessages", (value) => {
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
      default:
        return next(action);
    }
  };
};

export default websocketMiddleware;
