import { useForm } from "react-hook-form";
import {
  ButtonStyled,
  ChatFormStyled,
  ChatPageInputStyled,
  ChatPageStyled,
  MessagesPanelStyled,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Message } from "../../components/Message";
import { useEffect, useRef } from "react";
import { MyMessage } from "../../components/MyMessage";
import { WebSocketConnection } from "../../components/views/ChatPage/WebSocketConnection";
import { onSubmit } from "../../components/views/ChatPage/onSubmit";
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
          <MessagesPanelStyled ref={messagesPanelRef}>
            {messages.map((message, index) =>
              message.isMyMessage ? (
                <div className="my-name-container" key={index}>
                  <MyMessage name={message.userName} text={message.message} />
                </div>
              ) : (
                <Message
                  name={message.userName}
                  text={message.message}
                  key={index}
                />
              )
            )}
          </MessagesPanelStyled>
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

const moveToTheBottom = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  if (ref.current) {
    ref.current.scrollTo(0, ref.current.scrollHeight);
  }
};
