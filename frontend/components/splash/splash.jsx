import React from "react";

const Splash = () => {
    return (
        <div className="splash">
            <div className="row">
                <div className="splash-slogan-header">
                    <h1>Tame your work, organize your life</h1>
                </div>
                <div className="splash-slogan">
                    <p>Remember everything and tackle any project with your notes, tasks, and schedule all in</p>
                    <p>one place.</p>
                </div>
                <div>
                    <button className="signup-button">Sign up for free</button>
                </div>
                <div>
                    <img className="splash-image" src={window.splash}></img>
                </div>
            </div>
        </div>
    )
}

export default Splash;