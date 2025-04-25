import { useEffect, useState } from "react";
import MessageInput from "./MessageInput";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { firestore } from "../config";

function Chatroom({roomCode}) {
    const [roomData, setRoomData] = useState(null);
    const [roomInfo, setRoomInfo] = useState(null);

    useEffect(()=>{
        const renewRoomData = onSnapshot(doc(firestore, "group-data", roomCode), (snapshot) => {
            const data = snapshot.data();
            console.log("Room data: ", data);
            setRoomData(data[0]);
        });

        return () => renewRoomData();
    })

    useEffect(()=>{
        const renewRoomInfo = onSnapshot(doc(firestore, "group-list", roomCode), (snapshot) => {
            const data = snapshot.data();
            console.log("Room info: ", data);
            setRoomInfo(data[0]);
        });

        return () => renewRoomInfo();
    }, [roomCode]);

    return (
        <div className="chatroom">
            <div className="chatroom-header">
                <h1>{roomInfo ? roomInfo.name : "Loading..."}</h1>
                <p>Welcome to the chat room!</p>
            </div>
            <div className="chatroom-body">
                <div className="message-area">
                    {}
                </div>
                <MessageInput />
            </div>
        </div>
    );
}

export default Chatroom;