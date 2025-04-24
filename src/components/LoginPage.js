import LoginBlock from "./LoginBlock";
import RegisterBlock from "./RegisterBlock";
import React from "react";

function LoginPage({}) {
    const [block, setBlock] = React.useState("login"); // or "register"
    return (
        <div className="login-page">
            {block === "login" ? (
                <LoginBlock handleRegisterTextOnClick={() => setBlock("register")} />
            ) : (
                <RegisterBlock handleLoginJumpBack={() => setBlock("login")} />
            )}
        </div>
    )
}

export default LoginPage;
