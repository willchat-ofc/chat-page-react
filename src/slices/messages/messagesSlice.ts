// messagesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { socket } from "../../middlewares/websocket/websocketMiddlewate";

interface Message {
  userName: string;
  message: string;
  id: string;
  isMyMessage?: boolean;
}

interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, { payload }: PayloadAction<Message>) => {
      state.messages.push(payload);
    },
    sendMessage: (state, { payload }: PayloadAction<Message>) => {
      socket.emit("SendMessage", {
        ...payload,
        userId: "123",
        key: "a688123fcfdcfa08b6934839ea4276",
      });
    },
  },
});

export const { addMessage, sendMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
