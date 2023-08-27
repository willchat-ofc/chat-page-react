import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

interface WebSocketConnectionProps {
  dispatch: ReturnType<typeof useDispatch>;
}

export const WebSocketConnection: React.FC<WebSocketConnectionProps> = ({
  dispatch,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const key = queryParams.get("key");

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
