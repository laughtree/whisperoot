import { useEffect } from "react";
import Chat from "./Chat";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";

function ChatPage() {
    const { roomCode } = useParams();

    useEffect(() => {
        console.log("ChatPage mounted with roomCode: ", roomCode);
    });

    return (
        <div className="chat-page">
            <SideBar />
            <Chat roomCode={roomCode ? roomCode : null}/>
        </div>
    );
}

export default ChatPage;