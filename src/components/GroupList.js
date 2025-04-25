import { onSnapshot, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, firestore } from "../config";
import ClickableText from "./ClickableText";
import IconTextButton from "./IconTextButton";

function GroupList({}) {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const renewGroups = onSnapshot(doc(firestore, "user-data", auth.currentUser.uid), (snapshot) => {
            setGroups(snapshot.data().groups || []);
        });
        return () => renewGroups();
    }, [auth.currentUser]);

    return (
        <div className="group-list-block">
            {groups.length > 0 ? (
                <div className="group-list">
                    <div className="group-list-body">
                        {groups.map((group) => (
                            <div className="group-list-item">
                                <ClickableText
                                    key={group.id}
                                    text={group.name}
                                    onClick={() => {
                                        window.location.href = `/chat/${group.id}`;
                                    }}
                                />
                            </div>
                            
                        ))}
                    </div>
                    
                    <div className="group-list-footer">
                        <IconTextButton
                            text={"Create a new group"}
                            iconPath={""}
                            onClick={() => {
                                window.location.href = "/chat/create-group";
                            }}
                        />
                    </div>
                    
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