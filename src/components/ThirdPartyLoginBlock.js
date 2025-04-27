import IconButton from "./IconButton";
import { loginWithGoogle } from "../utils/AccountUtils" 
import googleLoginIcon from "../images/web_light_sq_na.svg";
import "../styles/ThirdPartyLoginBlock.css";

function ThirdPartyLoginBlock({}) {
    return (
        <div className="third-party-login-block">
            <h2>Or login with</h2>
            <IconButton
            iconPath={googleLoginIcon}
            onClick={async () => {
                const success = await loginWithGoogle();
                if (success) {
                    console.log("Google login successful, redirecting to chat page");
                    window.location.href = "/chat";
                } else {
                    alert("Google login failed, please try again");
                }
            }}
            />
        </div>
    );
}

export default ThirdPartyLoginBlock;