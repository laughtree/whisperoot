import IconButton from "./IconButton";
import { loginWithGoogle } from "../utils/AccountUtils" 

function ThirdPartyLoginBlock({}) {
    return (
        <div className="third-party-login-block">
            <h2>Or login with</h2>
            <IconButton
            iconPath="path/to/google-icon.svg"
            onClick={() => {
                loginWithGoogle();
                console.log("Login with Google");
            }}
            />
        </div>
    );
}

export default ThirdPartyLoginBlock;