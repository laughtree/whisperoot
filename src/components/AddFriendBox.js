import { useState } from "react";
import InputBox from "./InputBox";

function AddFriendBox({}) {
    const [targetUid, setTargetUid] = useState("");

    return (
        <div className="add-friend-box">
            <InputBox
                hint={"UID"}
                value={targetUid}
                onChange={(e) => setTargetUid(e.target.value)}
            />
        </div>
    )
}