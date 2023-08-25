import { useForm } from "react-hook-form";
import {
  ButtonStyled,
  ChatFormStyled,
  ChatPageInputStyled,
  ChatPageStyled,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect, useRef } from "react";
import { WebSocketConnection } from "../../components/views/ChatPage/WebSocketConnection";
import { onSubmit } from "../../components/views/ChatPage/onSubmit";
import { MessagePanel } from "../../components/MessagePanel";
import { moveToTheBottom } from "../../components/views/ChatPage/moveToTheBottom";
export interface UserMessage {
  userName: string;
  message: string;
  id: string;
}

export const ChatPage = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm<UserMessage>();
  const messagesPanelRef = useRef<HTMLDivElement | null>(null);

  const messages = useSelector((state: RootState) => {
    moveToTheBottom(messagesPanelRef);
    return state.messages.messages;
  });
  useEffect(() => {
    moveToTheBottom(messagesPanelRef);
  }, [messages]);

  return (
    <div>
      <WebSocketConnection dispatch={dispatch} />
      <ChatPageStyled>
        <ChatFormStyled onSubmit={handleSubmit(onSubmit(dispatch, reset))}>
          <ChatPageInputStyled
            type="message"
            {...register("userName", { required: true })}
            autoComplete="off"
            className="user-name"
          />
          <MessagePanel messages={messages} reference={messagesPanelRef} />
          <div className="send-message-area">
            <ChatPageInputStyled
              type="message"
              {...register("message", { required: true })}
              autoComplete="off"
            />
            <ButtonStyled>Enviar</ButtonStyled>
          </div>
        </ChatFormStyled>
      </ChatPageStyled>
    </div>
  );
};
