import { addMemberToGroup } from "../utils/GroupUtil";
import IconTextButton from "./IconTextButton";
import InputBox from "./InputBox";
import { useState } from "react";
import { auth } from "../config";
import { showNotification } from "../utils/Notification";

function JoinGroupBox({}) {
    const [roomCode, setRoomCode] = useState("");

    return (
        <div className="join-group-box">
            <h2>Join Group</h2>
            <InputBox
                onChange={(e) => setRoomCode(e.target.value)}
                value={roomCode}
                hint="Group ID"
                className="join-group-input"
            />
            <IconTextButton
                text="Join Group"
                iconPath="path/to/join-icon.svg"
                onClick={async () => {
                    if (roomCode) {
                        const success = await addMemberToGroup(roomCode, auth.currentUser.uid);
                    } else {
                        alert("Please enter a valid group ID.");
                    }
                }}
                className="join-group-button"
            />
        </div>
    );
}

export default JoinGroupBox;