import MessageInput from "./MessageInput";
import CreateGroupBlock from "./CreateGroupBlock";
import Chatroom from "./Chatroom";

function Chat ({roomCode}) {
    return (
        <div className="chat">
            {
                roomCode ? (
                    roomCode === "create-group" ?
                    (<div className="chat-header">
                        <CreateGroupBlock />
                    </div>) : 
                    (roomCode === "join-group" ?
                        (<div className="chat-header">
                            <h1>Join a group</h1>
                            <p>Welcome to the chat room!</p>
                        </div>) :
                        <Chatroom roomCode={roomCode} />
                    )
                )
                :
                <div className="chat-header">
                    <h1>Chat Room</h1>
                    <p>Please join a chat room!</p>
                </div>
            }
        </div>
    )
}

export default Chat;