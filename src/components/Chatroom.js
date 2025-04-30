import { useEffect, useState, useRef } from "react";
import MessageInput from "./MessageInput";
import { onSnapshot, doc } from "firebase/firestore";
import { auth, firestore } from "../config";
import { getMessageHint } from "../utils/messageUtils";
import MessageBox from "./MessageBox";
import "../styles/Chatroom.css";
import {showNotification} from "../utils/Notification";
import "../styles/GroupUtils.css";

function Chatroom({roomCode}) {
    const [roomData, setRoomData] = useState(null);
    const [prevRoomData, setPrevRoomData] = useState(null);
    const [roomInfo, setRoomInfo] = useState(null);
    const [prevRoomInfo, setPrevRoomInfo] = useState(null);

    const [messageHint, setMessageHint] = useState("Type a message...");
    const messageAreaRef = useRef(null);

    const [pageVisible, setPageVisible] = useState(true);

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

    useEffect(() => {
        const newMsg = roomData ? roomData.messages.slice(-1)[0] : null;
        console.log("distance to bottom: ", messageAreaRef.current.scrollHeight - messageAreaRef.current.scrollTop - messageAreaRef.current.clientHeight);
        if (messageAreaRef.current && ((roomInfo !== prevRoomInfo || (newMsg && newMsg.author === auth.currentUser.uid)|| messageAreaRef.current.scrollHeight - messageAreaRef.current.scrollTop - messageAreaRef.current.clientHeight) <= 500)) {
            setPrevRoomInfo(roomInfo);
            messageAreaRef.current.scrollTo({
                top: messageAreaRef.current.scrollHeight,
                behavior: "smooth"
            });
        }

        if (newMsg && newMsg.author !== auth.currentUser.uid && !pageVisible) {
            console.log("New message: ", newMsg);
            showNotification(newMsg.sender, newMsg.text, 3000);
        }
    }, [roomData, roomInfo, prevRoomInfo, pageVisible]);

    useEffect(()=>{
        document.addEventListener("visibilitychange", ()=>{
            if (document.visibilityState === "visible") {
                const hint = getMessageHint()
                console.log("Gen message hint: ", hint);
                setMessageHint(hint);
                setPageVisible(true);
            }
            else {
                setPageVisible(false);
            }
        })
    }, [])

    useEffect(()=>{
        const whenBlur = ()=>{
            setPageVisible(false);
        }

        const whenFocus = ()=>{
            setPageVisible(true);
        }

        window.addEventListener("focus", whenFocus);

        window.addEventListener("blur", whenBlur);

        return () => {
            window.removeEventListener("focus", whenFocus);
            window.removeEventListener("blur", whenBlur);
        }
    }, []);

    return (
        <div className="chatroom">
            <div className="chatroom-header">
                <h1>{roomInfo ? roomInfo.name : "Loading..."}</h1>
            </div>
            <div className="chatroom-body">
                <div className="message-area" ref={messageAreaRef}>
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
            </div>
            <div className="chatroom-footer">
                <MessageInput roomCode={roomCode} messageHint={messageHint}/>
            </div>
        </div>
    );
}

export default Chatroom;