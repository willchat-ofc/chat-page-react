import { useDispatch } from "react-redux";
import {
  addMessage,
  sendMessage,
} from "../../../slices/messages/messagesSlice";
import { SubmitHandler, UseFormReset } from "react-hook-form";
import { UserMessage } from "../../../views/ChatPage";

export const onSubmit =
  (
    dispatch: ReturnType<typeof useDispatch>,
    reset: UseFormReset<UserMessage>
  ): SubmitHandler<UserMessage> =>
  (data) => {
    dispatch(addMessage({ ...data, isMyMessage: true }));
    dispatch(sendMessage(data));

    reset({
      ...data,
      message: "",
    });
  };
