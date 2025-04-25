import IconTextButton from "./IconTextButton";

function SideBar() {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
            <li><IconTextButton
                text={"Friends"}
                iconPath={""}
                onClick={()=>{console.log("Friends clicked")}}
                />
            </li>
            <li><IconTextButton
                text={"Groups"}
                iconPath={""}
                onClick={()=>{console.log("Groups clicked")}}
                />
            </li>
            <li><IconTextButton
                text={"Settings"}
                iconPath={""}
                onClick={()=>{console.log("Settings clicked")}}
                />
            </li>
            </ul>
        </div>
    );
}

export default SideBar;