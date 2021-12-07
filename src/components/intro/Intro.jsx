import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";


export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            backDelay: 1000,
            backSpeed: 60,
            showCursor: true,
            strings: ['Researcher', 'Designer', 'Developer'] 
        });
    }, [])
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Addison.png" alt="Addison Gotchi"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Addison Viener</h1>
                    <h3>UI/UX <span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src="assets/downarrow.png" alt="Down Arrow"/>
                </a>
            </div>
        </div>
    )
}