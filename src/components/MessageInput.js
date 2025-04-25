//框 & 發送 & 輸入
import IconButton from "./IconButton";
import InputBox from "./InputBox";
import { getMessageHint, sendMessage } from "../utils/messageUtils";

function MessageInput(messageHint) {

    return (
        <div className="message-input">
        <InputBox
            onSend={() => console.log("Send message")}
            hint={messageHint}
            className="message-input"
        />
        <IconButton 
            iconPath="path/to/send-icon.svg"
            onClick={() => {
                const message = document.querySelector(".message-input input").value;
                sendMessage(message);
                console.log("Send message: ", message);
            }}
        />
        </div>
    );
}

export default MessageInput;