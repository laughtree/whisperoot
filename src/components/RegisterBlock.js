import InputBox from './InputBox';
import React from 'react';
import { registerByEmailAndPassword } from "../utils/AccountUtils"; // Import the functions from AccountUtils
import IconTextButton from './IconTextButton';

function RegisterBlock({handleLoginJumpBack}) {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    return (
        <div className="register-block">
            <InputBox
                onSend={() => console.log("Send message")}
                hint={"email"}
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
            />
            {/* email */}
            <InputBox
                onSend={() => console.log("Send message")}
                hint={"username"}
                onChange={(e)=>{setName(e.target.value)}}
                value={name}
            />
            {/* name */}
            <InputBox
                onSend={() => console.log("Send message")}
                hint={"password"}
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                type={"password"}
            />
            {/* password */}
            <InputBox
                onSend={() => console.log("Send message")}
                hint={"confirm password"}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                value={confirmPassword}
                type={"password"}
            />
            {/* confirm password */}
            <IconTextButton
                text="Register"
                iconPath="path/to/register-icon.svg"
                onClick={async () => {
                    const success = await registerByEmailAndPassword(email, name, password, confirmPassword);
                    
                }}
            />
        </div>
    );
}

export default RegisterBlock;