import React from 'react'
import '../Style/Footer.css'
import Resume from "../Assets/Piyush_kumar_singh_Resume.pdf"
function Footer() {
    return (
        <div className='Footer'>
            <hr />
            <div className='footer-div-wrapper'>
                <div className='Footer-div'>
                    <div className='Footer-div-1'>
                        <a href='mailto:pk.rv.668@gmail.com' >
                            →Email
                        </a>
                    </div>
                    <div className='Footer-div-2'>

                        <a href="https://drive.google.com/file/d/1oDY2jZLzKv7W0bVr0iFlKkF-FMnjLOx5/view?usp=sharing" target='_blank'>
                            →Resume
                        </a>


                    </div>
                    <div className='Footer-div-3'>
                        <a href="https://www.linkedin.com/in/piyush-kumar-singh-6234141ba" target='_blank'>
                            →Linkedin
                        </a>


                    </div>

                </div>
                <div className='Footer-credit-div'>
                    <p>Designed & Develope By<br /><strong>Piyush Kumar Singh</strong></p>

                </div>
            </div>

            <hr />
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "14px", margin: "0", fontWeight: "light" }}>Copyright&copy;2024 <strong style={{ fontSize: "14px", margin: "0", fontWeight: "light" }}>PS</strong> All Rights Reserved. <br /></p>
            </div>

        </div>

    )
}


export default Footer