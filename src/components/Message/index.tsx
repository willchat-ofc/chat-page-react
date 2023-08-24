import { MessageStyled } from "./styled";

interface MessageInput {
  name: string;
  text: string;
}

export const Message = (props: MessageInput) => {
  return (
    <MessageStyled>
      <span className="name">{props.name}</span>
      <p className="text">{props.text}</p>
    </MessageStyled>
  );
};
