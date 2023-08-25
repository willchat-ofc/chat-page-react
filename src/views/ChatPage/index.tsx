import { SubmitHandler, useForm } from "react-hook-form";
import {
  ButtonStyled,
  ChatFormStyled,
  ChatPageInputStyled,
  ChatPageStyled,
  MessagesPanelStyled,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, sendMessage } from "../../slices/messages/messagesSlice";
import { RootState } from "../../app/store";
import { Message } from "../../components/Message";
import { useEffect, useRef } from "react";
import { MyMessage } from "../../components/MyMessage";

export const ChatPage = () => {
  interface UserMessage {
    userName: string;
    message: string;
    id: string;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "WEBSOCKET_CONNECT",
      payload: { url: "wss://will-chat.hopto.org:7070/" }, //wss://will-chat.hopto.org:7070/
    });

    return () => {
      dispatch({
        type: "WEBSOCKET_DISCONNECT",
      });
    };
  }, []);

  const { register, handleSubmit, reset } = useForm<UserMessage>();
  const messagesPanelRef = useRef<HTMLDivElement | null>(null);
  const onSubmit: SubmitHandler<UserMessage> = (data) => {
    dispatch(addMessage({ ...data, isMyMessage: true }));
    dispatch(sendMessage(data));

    reset({
      ...data,
      message: "",
    });
  };

  const messages = useSelector((state: RootState) => {
    moveToTheBottom(messagesPanelRef);
    return state.messages.messages;
  });
  useEffect(() => {
    moveToTheBottom(messagesPanelRef); // Chamada para mover o scroll para baixo
  }, [messages]); // Executa o efeito toda vez que as mensagens são atualizadas

  return (
    <ChatPageStyled>
      <ChatFormStyled onSubmit={handleSubmit(onSubmit)}>
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
  );
};

const moveToTheBottom = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  if (ref.current) {
    ref.current.scrollTo(0, ref.current.scrollHeight);
  }
};
