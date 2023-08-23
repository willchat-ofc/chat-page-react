import { SubmitHandler, useForm } from "react-hook-form";
import {
  ButtonStyled,
  ChatFormStyled,
  ChatPageInputStyled,
  ChatPageStyled,
  MessagesPanelStyled,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/messages/messagesSlice";
import { RootState } from "../../redux/store";

export const ChatPage = () => {
  interface UserMessage {
    name: string;
    text: string;
  }

  const { register, handleSubmit } = useForm<UserMessage>();
  const onSubmit: SubmitHandler<UserMessage> = (data) => {
    const dispatch = useDispatch();
    dispatch(addMessage(data));
  };

  return (
    <ChatPageStyled>
      <ChatFormStyled onSubmit={handleSubmit(onSubmit)}>
        <ChatPageInputStyled
          type="text"
          {...register("name", { required: true })}
          autoComplete="off"
        />
        <MessagesPanelStyled></MessagesPanelStyled>
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
