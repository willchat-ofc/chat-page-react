import { styled } from "styled-components";

export const MessageStyled = styled.div`
  margin-bottom: 8px;
  margin-left: 10px;
  margin-top: 4px;
  padding: 6px 8px 8px 9px;
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: 50%;
  background-color: #4428e512;
  border-radius: 7.5px;

  .name {
    font-size: 0.9rem;
    color: #a04ff3;
  }

  .text {
    font-size: 1.1rem;
  }
`;
