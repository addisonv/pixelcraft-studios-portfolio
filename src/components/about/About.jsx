import "./about.scss"

export default function About() {
    return(
        <div className="about" id="about">
            <div className="a-left">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">
                    
                    I am a 25 year old American UI/UX professional who strives to help develop technology that provide people around the world with the tools they need to live their lives to the fullest.
                     
                </p>
                    <button className="btn">
                        <a href="assets/addisonvienerresume.png" target="_blank" rel="noreferrer">Resume</a>
                    </button>
            </div>
            <div className="a-right">
            <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="assets/Addison.png" alt="Aavegotchi Addison" className="a-img"/>
                </div>
            </div>
        </div>
    )
}