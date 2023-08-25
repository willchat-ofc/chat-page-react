import { styled } from "styled-components";

export const MyMessageContainer = styled.div`
  margin-bottom: 8px;
  margin-right: 20px;
  margin-top: 4px;
  padding: 6px 8px 8px 9px;
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: 50%;
  background-color: #4428e53b;
  border-radius: 7.5px;

  .name {
    font-size: 0.9rem;
    color: #a04ff3;
  }

  .text {
    font-size: 1.1rem;
  }
`;
