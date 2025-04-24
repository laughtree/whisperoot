import IconTextButton from './IconTextButton';
import InputBox from './InputBox';
import ClickableText from './ClickableText';
import React from 'react';
import { loginByEmailAndPassword } from "../utils/AccountUtils"; // Import the functions from AccountUtils
import ThirdPartyLoginBlock from './ThirdPartyLoginBlock';

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
                    iconPath="path/to/login-icon.svg"
                    onClick={() => {
                        loginByEmailAndPassword(email, password);
                        console.log("Login with email and password");
                    }}
                />
                <ClickableText
                    text="Don't have an account? Register now!"
                    onClick={handleRegisterTextOnClick}
                />
            </div>
            <ThirdPartyLoginBlock />
        </div>
    );
}

export default LoginBlock;