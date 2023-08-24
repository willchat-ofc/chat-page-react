// messagesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  userName: string;
  message: string;
  id: string;
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
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
