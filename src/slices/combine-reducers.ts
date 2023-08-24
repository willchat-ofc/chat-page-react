import { combineReducers } from "redux";
import messagesSlice from "./messages/messagesSlice";

export const rootReducer = combineReducers({
  messages: messagesSlice,
});
