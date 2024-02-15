import React from 'react'
import "../../Style/Project.css"
import project1 from "../../Assets/Ipad.png"
import project2 from "../../Assets/iphone.png"
// import Githubicon from "../Assets/github.jpg"
const ProjectData = [
    {
        "id": 1,
        "img": project1,
        "img2": project2,
        "Discription": "Built a survey website that provides customer experience, and online survey development",
        "Technology": "HTML ,React ,JavaScript ,CSS",
        "Duration": "An Individual Project executed in 3 days",
        "Github": "https://github.com/piyush2205/receptive-train-598",
        "Demo": "https://surveyguru.vercel.app/",
    },



]
const Project = () => {


    return (
        <div className="Projects"  >

            <h1>Projects</h1>
            <hr />
            {
                ProjectData.map((el) => {
                    return (
                        <>  <div className='project-div-1' key={el.id}>
                            <div className='project-div-wrapper'>
                                <div className='project-div-img'>
                                    <img src={el.img} className='project-img' />
                                </div>
                                <hr />
                                <div className='project-div-img'>
                                    <img src={el.img2} className='project-img' />
                                </div>
                            </div>

                            <div className='project-dis-div-2'>

                                <p>Discription → <strong>{el.Discription}</strong></p>
                                <p>Technology → <strong>{el.Technology}</strong></p>
                                <p>Duration → <strong>{el.Duration}</strong></p>
                                <div style={{ display: "flex", justifyContent: "space-between", }}>
                                    <a href={`${el.Github}`} target="_blank" className='Github'> <button>   <strong style={{ fontSize: "20px" }}> GitHub</strong> </button></a>
                                    {/* <img src={Githubicon} className='github' alt='githubicon' /> */}

                                    <a href={`${el.Demo}`} target="_blank" className='Demo'> <button>   <strong style={{ fontSize: "20px" }}> Demo</strong> </button></a>
                                    {/* <img src={Githubicon} className='github' alt='githubicon' /> */}
                                </div>

                            </div>
                        </div>
                            <hr />
                        </>

                    )
                })
            }



        </div>
    )
}

export default Project