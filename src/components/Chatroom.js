import { useEffect, useState } from "react";
import MessageInput from "./MessageInput";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { firestore } from "../config";
import { getMessageHint } from "../utils/messageUtils";
import MessageBox from "./MessageBox";

function Chatroom({roomCode}) {
    const [roomData, setRoomData] = useState(null);
    const [roomInfo, setRoomInfo] = useState(null);
    const [messageHint, setMessageHint] = useState("Type a message...");

    useEffect(()=>{
        const renewRoomData = onSnapshot(doc(firestore, "group-data", roomCode), (snapshot) => {
            const data = snapshot.data();
            console.log("Room data: ", data);
            setRoomData({...data, id: roomCode});
        });

        return () => renewRoomData();
    }, [roomCode]);

    useEffect(()=>{
        const renewRoomInfo = onSnapshot(doc(firestore, "group-list", roomCode), (snapshot) => {
            const data = snapshot.data();
            console.log("Room info: ", data);
            setRoomInfo({...data, id: roomCode});
        });

        return () => renewRoomInfo();
    }, [roomCode]);

    useEffect(() => {
        const hint = getMessageHint()
        console.log("Gen message hint: ", hint);
        setMessageHint(hint);
    }, [roomCode]);

    return (
        <div className="chatroom">
            <div className="chatroom-header">
                <h1>{roomInfo ? roomInfo.name : "Loading..."}</h1>
                <p>Welcome to the chat room!</p>
            </div>
            <div className="chatroom-body">
                <div className="message-area">
                    {
                        roomData ? (
                            roomData.messages.map((message) => (
                                <MessageBox message={message}/>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )
                    }
                </div>
                <MessageInput roomCode={roomCode} messageHint={messageHint}/>
            </div>
        </div>
    );
}

export default Chatroom;