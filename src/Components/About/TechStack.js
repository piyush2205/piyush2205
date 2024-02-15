import React from 'react'

import "../../Style/About.css"
import {
    DiMongodb,
    DiJavascript1,
    DiReact,
    DiJava,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiHtml5,
    SiCss3,
    SiMysql,
    SiRedux,
    SiExpress
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
function TechStack() {
    return (
        <div className='TechStack'>
            <div className='techstack-div'><DiJavascript1 style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'> <DiReact style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'><FaNodeJs style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'><DiMongodb style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'><DiJava style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'><DiPython style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'><SiExpress style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'><SiRedux style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'> <SiCss3 style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'><DiGit style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'><SiHtml5 style={{ height: "95px", width: "182px" }} /></div>
            <div className='techstack-div'><SiMysql style={{ height: "95px", width: "182px" }} /></div>
        </div>
    )
}

export default TechStack