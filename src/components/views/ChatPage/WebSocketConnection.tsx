import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

interface WebSocketConnectionProps {
  dispatch: ReturnType<typeof useDispatch>;
}

export const WebSocketConnection: React.FC<WebSocketConnectionProps> = ({
  dispatch,
}) => {
  const { key } = useParams();

  useEffect(() => {
    dispatch({
      type: "WEBSOCKET_CONNECT",
      payload: {
        url: "wss://will-chat.hopto.org:7070/",
        key,
      },
    });

    return () => {
      dispatch({
        type: "WEBSOCKET_DISCONNECT",
      });
    };
  }, [key, dispatch]);

  return null;
};
