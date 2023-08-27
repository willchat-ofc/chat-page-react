import { useDispatch } from "react-redux";
import {
  addMessage,
  sendMessage,
} from "../../../slices/messages/messagesSlice";
import { SubmitHandler, UseFormReset } from "react-hook-form";
import { UserMessage } from "../../../views/ChatPage";
import { useLocation } from "react-router-dom";

export const onSubmit =
  (
    dispatch: ReturnType<typeof useDispatch>,
    reset: UseFormReset<UserMessage>
  ): SubmitHandler<UserMessage> =>
  (data) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const key = queryParams.get("key")!;
    dispatch(
      addMessage({
        ...data,
        isMyMessage: true,
        key,
      })
    );
    dispatch(sendMessage({ ...data, key }));

    reset({
      ...data,
      message: "",
    });
  };
