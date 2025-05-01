//框 & 發送 & 輸入
import IconButton from "./IconButton";
import InputBox from "./InputBox";
import { sendMessage } from "../utils/messageUtils";
import "../styles/MessageInput.css";
import GIFSearchBox from "./GIFSearchBox";
import { useState } from "react";
import sendIcon from "../images/send_32.svg"
import gifIcon from "../images/gif_32.svg"

function MessageInput({ messageHint, roomCode }) {
    const [showGIFSearch, setShowGIFSearch] = useState(false);

    return (
        <div className="input-area-container">
            <GIFSearchBox show={showGIFSearch} roomCode={roomCode}/>
            <div className="message-input" onKeyDown={(e)=>{
                if (e.key === "Enter") {
                    const message = document.querySelector(".message-input input").value;
                    const msgContent = message.trim();
                    if (msgContent === "") {
                        return;
                    }
                    sendMessage(roomCode, message);
                    console.log("Send message: ", message, "to room: ", roomCode);
                    document.querySelector(".message-input input").value = "";
                }
            }}>
            
            <IconButton
                iconPath={gifIcon}
                className="gif-icon"
                onClick={async () => {
                    setShowGIFSearch(!showGIFSearch);
                    console.log("show GIF search box: ", showGIFSearch);
                }}
            />
            <InputBox
                hint={messageHint}
                className="message-input"
            />
            <IconButton 
                iconPath={sendIcon}
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