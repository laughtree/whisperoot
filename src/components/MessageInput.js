//框 & 發送 & 輸入
import IconButton from "./IconButton";
import InputBox from "./InputBox";
import { sendMessage } from "../utils/messageUtils";
import "../styles/MessageInput.css";
import { searchGifs } from "../utils/GIFUtils";
import GIFSearchBox from "./GIFSearchBox";
import { useState } from "react";

function MessageInput({ messageHint, roomCode }) {
    const [showGIFSearch, setShowGIFSearch] = useState(false);

    return (
        <div className="input-area-container">
            {/* <GIFSearchBox show={showGIFSearch}/> */}
            <div className="message-input">
            
            {/* <IconButton
                iconPath="path/to/attach-icon.svg"
                onClick={async () => {
                    setShowGIFSearch(!showGIFSearch);
                    console.log("show GIF search box: ", showGIFSearch);
                }}
            /> */}
            <InputBox
                hint={messageHint}
                className="message-input"
            />
            <IconButton 
                iconPath="path/to/send-icon.svg"
                onClick={() => {
                    const message = document.querySelector(".message-input input").value;
                    const msgContent = message.trim();
                    if (msgContent === "") {
                        return;
                    }
                    sendMessage(roomCode, message);
                    console.log("Send message: ", message, "to room: ", roomCode);
                    document.querySelector(".message-input input").value = "";
                }}
            />
            </div>
        </div>
        
    );
}

export default MessageInput;