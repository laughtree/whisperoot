import MessageInput from "./MessageInput";
import CreateGroupBlock from "./CreateGroupBlock";
import Chatroom from "./Chatroom";
import JoinGroupBox from "./JoinGroupBox";

function Chat ({roomCode}) {
    return (
        <div className="chat">
            {
                roomCode ? (
                    roomCode === "create-group" ?
                        <CreateGroupBlock /> : 
                        (roomCode === "join-group" ?
                            <JoinGroupBox /> :
                            <Chatroom roomCode={roomCode} />)
                ) :
                    (<div className="chat-header">
                        <h1>Chat Room</h1>
                        <p>Please join a chat room!</p>
                    </div>)
            }
        </div>
    )
}

export default Chat;