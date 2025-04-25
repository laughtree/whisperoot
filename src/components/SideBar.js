import IconTextButton from "./IconTextButton";
import { useEffect, useState } from "react";
import UserList from "./UserList";
import GroupList from "./GroupList";

function SideBar({}) {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showFriends, setShowFriends] = useState(false);
    const [showGroups, setShowGroups] = useState(false);
    
    const [notifications, setNotifications] = useState([]);
    const [friends, setFriends] = useState([]);
    const [groups, setGroups] = useState([]);



    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
            <li>
                <div className="notifice-list">
                    <IconTextButton
                    text={"Notifications"}
                    iconPath={null}
                    onClick={()=>{setShowNotifications(!showNotifications)}}
                    />                    
                    {
                        showNotifications ? (
                            <p>hi</p>
                        ) : null
                    }
                </div>
            </li>
            <li>
                <div className="friends-list">
                    <IconTextButton
                    text={"Friends"}
                    iconPath={null}
                    onClick={()=>{setShowFriends(!showFriends)}}
                    />
                    {
                        showFriends ? (
                            <UserList users={friends} />
                        ) : null
                    }
                </div>
            </li>
            <li>
                <div className="groups-list">
                    <IconTextButton
                    text={"Groups"}
                    iconPath={null}
                    onClick={()=>{setShowGroups(!showGroups)}}
                    />                    
                    {
                        showGroups ? (
                            <GroupList />
                        ) : null
                    }
                </div>
            </li>
            <li><IconTextButton
                text={"Settings"}
                iconPath={null}
                onClick={()=>{window.location.href = "/settings"}}
                />
            </li>
            </ul>
        </div>
    );
}

export default SideBar;