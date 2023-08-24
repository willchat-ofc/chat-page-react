import { SubmitHandler, useForm } from "react-hook-form";
import {
  ButtonStyled,
  ChatFormStyled,
  ChatPageInputStyled,
  ChatPageStyled,
  MessagesPanelStyled,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../slices/messages/messagesSlice";
import { RootState } from "../../app/store";
import { Message } from "../../components/Message";
import { useEffect } from "react";

export const ChatPage = () => {
  interface UserMessage {
    userName: string;
    message: string;
    id: string;
  }

  const { register, handleSubmit, reset } = useForm<UserMessage>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<UserMessage> = (data) => {
    dispatch(addMessage(data));
    reset({
      ...data,
      message: "",
    });
  };

  useEffect(() => {
    dispatch({
      type: "WEBSOCKET_CONNECT",
      payload: { url: "wss://will-chat.hopto.org:7070/" },
    });
    return;
  }, []);

  const messages = useSelector((state: RootState) => state.messages.messages);
  return (
    <ChatPageStyled>
      <ChatFormStyled onSubmit={handleSubmit(onSubmit)}>
        <ChatPageInputStyled
          type="message"
          {...register("userName", { required: true })}
          autoComplete="off"
          className="user-name"
        />
        <MessagesPanelStyled>
          {messages.map((message) => (
            <Message
              name={message.userName}
              text={message.message}
              key={message.id}
            />
          ))}
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
