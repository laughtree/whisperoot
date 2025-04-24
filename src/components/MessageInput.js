//框 & 發送 & 輸入
import IconButton from "./IconButton";
import InputBox from "./InputBox";
import { getMessageHint } from "../utils/messageUtils";

function MessageInput() {

    return (
        <div className="message-input">
        <InputBox
            onSend={() => console.log("Send message")}
            hint={getMessageHint()}
        />
        <IconButton 
            iconPath="path/to/send-icon.svg"
            onClick={() => console.log("Send message")}
        />
        </div>
    );
}

export default MessageInput;