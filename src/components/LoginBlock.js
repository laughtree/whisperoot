import IconTextButton from './IconTextButton';
import InputBox from './InputBox';
import ClickableText from './ClickableText';
import React from 'react';
import { loginByEmailAndPassword } from "../utils/AccountUtils"; // Import the functions from AccountUtils
import ThirdPartyLoginBlock from './ThirdPartyLoginBlock';
import LoginIcon from '../images/login_32.svg';

function LoginBlock({ handleRegisterTextOnClick}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <div className="login-block">
            <InputBox
                onSend={() => console.log("Send message")}
                hint={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* name or email */}
            <InputBox
                onSend={() => console.log("Send message")}
                hint={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={"password"}
            />
            {/* password */}
            <div className="button-block">
                <IconTextButton
                    text="Login"
                    iconPath={LoginIcon}
                    onClick={async () => {
                        const success = await loginByEmailAndPassword(email, password);
                        if (success) {
                            console.log("Login successful, redirecting to chat page");
                            window.location.href = "/chat";
                        } else {
                            alert("Login failed, please try again");
                        }
                    }}
                />
            </div>
            <div className="register-text-block">
                <ClickableText
                    text="Don't have an account? Register now!"
                    onClick={() => {
                        handleRegisterTextOnClick();
                        console.log("Jump to register page");
                    }}
                />
                </div>
            <ThirdPartyLoginBlock />
        </div>
    );
}

export default LoginBlock;