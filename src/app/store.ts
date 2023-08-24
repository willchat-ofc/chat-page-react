import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rootReducer } from "../slices/combine-reducers";
import websocketMiddleware from "../middlewares/websocket/websocketMiddlewate";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(websocketMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
