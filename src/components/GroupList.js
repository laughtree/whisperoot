import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, firestore } from "../config";
import ClickableText from "./ClickableText";
import { getUserGroups } from "../utils/GroupUtil";
import IconTextButton from "./IconTextButton";
import { get } from "firebase/database";

function GroupList({}) {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const renewGroups = onSnapshot(collection(firestore, "group-list"), (snapshot) => {
            setGroups(getUserGroups(auth.currentUser.uid));
        });
        return () => renewGroups();
    });

    return (
        <div className="group-list-block">
            {groups.length > 0 ? (
                <div className="group-list">
                    {groups.map((group) => (
                        <ClickableText
                            key={group.id}
                            text={group.name}
                            onClick={() => {
                                window.location.href = `/chat/${group.id}`;
                            }}
                        />
                    ))}
                    <IconTextButton
                        text={"Create a new group"}
                        iconPath={""}
                        onClick={() => {
                            window.location.href = "/create-group";
                        }}
                    />
                </div>
            ) : (
                <div className="no-group">
                    <span><p>Nothing here.</p></span>
                    <span>
                        <ClickableText
                        text={" Join "}
                        onClick={() => {
                            window.location.href = "/chat/join-group";
                        }}
                        />
                        or 
                        <ClickableText
                        text={" Create "}
                        onClick={() => {
                            window.location.href = "/chat/create-group";
                        }}
                        />
                        a group
                        </span>
                </div>
            )}
        </div>
    );
}

export default GroupList;