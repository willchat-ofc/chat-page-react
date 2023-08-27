import { Route, Routes } from "react-router-dom";
import { ChatPage } from "../views/ChatPage";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/:key" element={<ChatPage />} />
    </Routes>
  );
};
