import React from 'react'
import "../../Style/Experience.css"
import Weblogo from "../../Assets/Webimp.jpeg"

function Experience() {
  return (
    <div id='Experince'>


      <div className='Experince-div-wrapper'>
        <div className='Experience-div'>
          <h1>Experince</h1>

          <p>Years Of Experince → <strong> Less Than 1</strong></p>
        </div>
        <hr />
        <div className='Experince-div-2'>
          <div className='Experince-div-2-img-div'>
            <img src={Weblogo} style={{ width: "1161px" }} />
          </div>
          <div className='Experince-div-2-dis'>
            <p>Company → <strong>Web Impetus</strong>  </p>
            <p>Role → <strong>Junior Frontend Developer</strong> </p>
            <p>Duration → <strong>April 2023</strong>→<strong>Currently Working</strong> </p>
          </div>



        </div>
        <hr />
      </div>
      <hr />
    </div>

  )
}

export default Experience