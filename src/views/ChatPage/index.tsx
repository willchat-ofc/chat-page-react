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

export const ChatPage = () => {
  interface UserMessage {
    name: string;
    text: string;
  }

  const { register, handleSubmit } = useForm<UserMessage>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<UserMessage> = (data) => {
    dispatch(addMessage(data));
  };

  const messages = useSelector((state: RootState) => state.messages.messages);
  console.log(messages);

  return (
    <ChatPageStyled>
      <ChatFormStyled onSubmit={handleSubmit(onSubmit)}>
        <ChatPageInputStyled
          type="text"
          {...register("name", { required: true })}
          autoComplete="off"
        />
        <MessagesPanelStyled>
          {messages.map((message) => {
            return (
              <div>
                <span>{message.name}</span>
                <p>{message.text}</p>
              </div>
            );
          })}
        </MessagesPanelStyled>
        <div className="send-text-area">
          <ChatPageInputStyled
            type="text"
            {...register("text", { required: true })}
            autoComplete="off"
          />
          <ButtonStyled>Enviar</ButtonStyled>
        </div>
      </ChatFormStyled>
    </ChatPageStyled>
  );
};
