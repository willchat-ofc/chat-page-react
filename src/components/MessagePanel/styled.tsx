import { styled } from "styled-components";

export const MessagesPanelStyled = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid rgba(68, 68, 68, 0.541);
  overflow-y: scroll;
  overflow-x: hidden;
  word-wrap: break-word;
  border-radius: 10px;
  font-size: 1.25rem;

  .my-name-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
