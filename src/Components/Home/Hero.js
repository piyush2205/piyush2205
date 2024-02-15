import { useEffect, useState } from "react"
// import "./Hero.css"
import { Link } from "react-router-dom"
import Experience from "../Experience/Experience"
import Project from "../Project/Project"
import About from "../About/About"
const Home = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on component unmount

    }, []); // Empty dependency array to run the effect only once on mount

    // Function to format time in HH:mm:ss AM/PM
    const formatTime = () => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

        return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${ampm}`;
    }
    return (
        <>
            <header>
                <div className="main-hero-section">
                    <div className="hero-section-div1">
                        <p>
                            Based in India →<strong> {formatTime()}</strong>
                        </p>
                        <p>
                            <strong>✦ </strong>
                            Status → <strong>Open to Work</strong>
                        </p>
                    </div>
                    <hr className="hero-section-hr-1" />
                    <div className="hero-section-div-title">
                        <h1 className="hero-section-h1-intro" style={{ fontSize: "107px", marginTop: "-0px" }} >
                            Hi, this is Piyush.
                        </h1>
                    </div>
                    <div className="hero-section-div2">
                        <p>
                            Currently →
                            <strong> Wordpress Developer @</strong> <a href="https://webimpetus.com/" target="_blank" className="company-name-a-hero-section"><strong>Web Impetus</strong></a>
                        </p>
                        <p>
                            Location →<strong> Noida</strong>
                        </p>

                        <p>
                            Position <span style={{ fontSize: "20px" }}>&#x2192;</span><strong> Frontend Developer</strong>
                        </p>

                    </div>
                </div>


            </header>
            <hr className="hero-section-hr" />
            <Experience />
            <Project />
        </>
    )
}

export default Home