import IconTextButton from "./IconTextButton";
import { logout } from "../utils/AccountUtils"; // Assuming you have a logout function in auth.js

function NavBar({loggedIn}) {
  return (
    <div className="header">
        <nav className="navbar">
            <ul>
                <li><IconTextButton text={"Home"} iconPath={""} onClick={() => window.location.href = "/"} /></li>
                {loggedIn ? <li><IconTextButton text={"Chat"} iconPath={""} onClick={() => window.location.href = "/chat"} /></li> : null}
                <li>{loggedIn ? <IconTextButton text={"Logout"} icon={"logout"} onClick={logout} /> : <IconTextButton text={"Login"} iconPath={""} onClick={()=>{window.location.href = "/login"}}/>}</li>
            </ul>
        </nav>
    </div>
  );
}

export default NavBar;