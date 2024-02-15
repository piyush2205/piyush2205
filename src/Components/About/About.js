import React from 'react'
import "../../Style/About.css"
import TechStack from './TechStack'
import ToolStack from './ToolStack'
import Github from './Github'
function About() {
    return (
        <div className='About'>
            <div className='about-div'>
                <div className="hero-section-div-title">
                    <h1 className="hero-section-h1-intro" style={{ fontSize: "49px", }} >
                        Hi, this is Piyush.
                    </h1>
                </div>
                <div>
                    <p className='P-about'>
                        A passionate Front end Developer 🚀.Develop highly interactive Front end / User Interfaces for your web and mobile applications with JavaScript / Reactjs and some other cool libraries and frameworks. </p>


                    <p className='P-about'>
                        I am fluent in  <strong style={{ fontSize: "25px" }}>JavaScript, HTML5, CSS3, and Reactjs .</strong>
                    </p>


                    <p className='P-about'>
                        I have done B.Tech in Mechanical Engineering from IMS Engineering College, Ghaziabad and graduated with 7.0 CGPA.</p>

                    <p className='P-about'>
                        A Developer who loves following his dream of delivering smiles with delightful experiences ☻ </p>


                </div>
            </div>

            <hr />
            <div className='about-div-wrapper'>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                    <h1 style={{ fontSize: "49px", margin: "0" }}>
                        Profressional Skills
                    </h1>
                    <div style={{ display: "flex", gap: "5px", }}>
                        <button><strong>FrontEnd</strong> </button>
                        <button><strong>BackEnd </strong></button>
                        <button><strong>All </strong></button>
                    </div>

                </div>
                <hr />
                <TechStack />

                <div style={{ marginTop: "150px", }}>
                    <div>
                        <h1 style={{ fontSize: "49px", }}>
                            Tools I Use
                        </h1>
                    </div>
                    <hr />
                    <ToolStack />
                </div>

                <div style={{ marginTop: "150px", }} >
                    <div>
                        <h1 style={{ fontSize: "49px", }}>
                            Days I Code
                        </h1>

                    </div>
                    <hr />
                    <Github />
                </div>

            </div>
        </div >
    )
}

export default About