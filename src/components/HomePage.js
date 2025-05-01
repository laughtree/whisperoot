import { useEffect } from "react";
import ROOT from "../images/root.png";
import "../styles/HomePage.css";

function HomePage() {
    return (
    <div className="home-page">
        <img src={ROOT} alt="Root" className="root-image" />
        <p>Welcome to the ROOT!</p>
    </div>

    );
}

export default HomePage;