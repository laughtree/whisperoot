import { onSnapshot, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, firestore } from "../config";
import ClickableText from "./ClickableText";
import IconTextButton from "./IconTextButton";
import { set } from "firebase/database";

function GroupList({groups}) {
    // const [groups, setGroups] = useState([]);

    // useEffect(() => {
    //     const renewGroups = onSnapshot(doc(firestore, "user-data", auth.currentUser.uid), (snapshot) => {
    //         // console.log("Current data: ", snapshot.data().groups);
    //         const groupIds = snapshot.data().groups;
    //         const newGroups = [];
    //         if (!groupIds) {
    //             setGroups([]);
    //             return;
    //         }
    //         groupIds.map((groupId) => {
    //             return getDoc(doc(firestore, "group-list", groupId)).then((doc) => {
    //                 if (doc.exists()) {
    //                     newGroups.push({ id: doc.id, ...doc.data() });
    //                 }
    //             });
    //         });
    //         setGroups(newGroups);
    //         console.log("Current data: ", newGroups);
    //     });
    //     return () => renewGroups();
    // });


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