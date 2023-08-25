import { MyMessageContainer } from "./styled";

interface MyMessageInput {
  name: string;
  text: string;
}

export const MyMessage = (props: MyMessageInput) => {
  return (
    <MyMessageContainer>
      <span className="name">{props.name}</span>
      <p className="text">{props.text}</p>
    </MyMessageContainer>
  );
};
