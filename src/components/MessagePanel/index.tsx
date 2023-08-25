import { Message as MessageI } from "../../slices/messages/messagesSlice";
import { Message } from "../Message";
import { MyMessage } from "../MyMessage";
import { MessagesPanelStyled } from "./styled";

interface MessagePanelProps {
  reference?: React.MutableRefObject<HTMLDivElement | null>;
  messages: MessageI[];
}
export const MessagePanel = (props: MessagePanelProps) => {
  return (
    <MessagesPanelStyled ref={props.reference}>
      {props.messages.map((message, index) =>
        message.isMyMessage ? (
          <div className="my-name-container" key={index}>
            <MyMessage name={message.userName} text={message.message} />
          </div>
        ) : (
          <Message name={message.userName} text={message.message} key={index} />
        )
      )}
    </MessagesPanelStyled>
  );
};
