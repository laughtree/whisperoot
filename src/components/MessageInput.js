//框 & 發送 & 輸入
import IconButton from "./IconButton";
import InputBox from "./InputBox";
import { sendMessage } from "../utils/messageUtils";

function MessageInput({ messageHint, roomCode }) {

    return (
        <div className="message-input">
        <InputBox
            hint={messageHint}
            className="message-input"
        />
        <IconButton 
            iconPath="path/to/send-icon.svg"
            onClick={() => {
                const message = document.querySelector(".message-input input").value;
                sendMessage(roomCode, message);
                console.log("Send message: ", message, "to room: ", roomCode);
                document.querySelector(".message-input input").value = "";
            }}
        />
        </div>
    );
}

export default MessageInput;