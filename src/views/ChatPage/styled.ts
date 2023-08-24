import { styled } from "styled-components";
import { colors } from "../../colors/colors";

export const ChatPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryDark};
  width: 100%;
  height: 100vh;
  color: ${colors.fontColor};
`;

export const ChatFormStyled = styled.form`
  width: 49%;
  .user-name {
    margin: 10px 0;
  }

  .send-message-area {
    display: flex;
    width: 100%;
    margin: 10px 0;
  }

  ::-webkit-scrollbar {
    background-color: #181714b5;
    color: #d3c09f;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4e4a40b5;
  }
`;

export const ChatPageInputStyled = styled.input`
  width: 100%;
  padding: 0 20px;
  border: 1px solid rgba(83, 83, 83, 0.767);
  height: 50px;
  font-size: 14px;
  border-radius: 10px;
  background-color: rgb(35, 50, 82);
  color: ${colors.fontColor};
  box-sizing: border-box;
  font-size: 1.2rem;
  outline: none;
`;

export const MessagesPanelStyled = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid rgba(68, 68, 68, 0.541);
  overflow-y: scroll;
  overflow-x: hidden;
  word-wrap: break-word;
  border-radius: 10px;
  font-size: 1.25rem;
`;

export const ButtonStyled = styled.button`
  cursor: pointer;
  width: 25%;
  height: 100%;
  background: ${colors.secondBlue};
  line-height: 50px;
  font-weight: bold;
  color: #2b2b2b;
  margin-left: 0.5rem;
  border-radius: 10px;
  font-size: 1.1rem;
  border: none;
`;
