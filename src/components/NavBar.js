import IconTextButton from "./IconTextButton";
import { logout } from "../utils/AccountUtils";
import "../styles/NavBar.css";
import Homeicon from "../images/home_32.svg";
import Chaticon from "../images/chat_32.svg";
import Logouticon from "../images/logout_32.svg";
import Loginicon from "../images/login_32.svg";


function NavBar({loggedIn}) {
  return (
    <div className="header">
        <div className="navbar">
            <ul>
                <li><IconTextButton text={"Home"} iconPath={Homeicon} onClick={() => window.location.href = "/"} /></li>
                {loggedIn ? <li><IconTextButton text={"Chat"} iconPath={Chaticon} onClick={() => window.location.href = "/chat"} /></li> : null}
                {loggedIn ? <li><IconTextButton text={"Logout"} iconPath={Logouticon} onClick={logout} /></li> : <li><IconTextButton text={"Login"} iconPath={Loginicon} onClick={()=>{window.location.href = "/login"}}/></li>}
            </ul>
        </div>
    </div>
  );
}

export default NavBar;