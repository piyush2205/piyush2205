import React from 'react'

import "../../Style/About.css"
import {
    SiVisualstudiocode,
    SiNetlify,
} from "react-icons/si";

function ToolStack() {
    return (
        <div className='ToolStack'>
            <div className='toolstack-div'><SiVisualstudiocode style={{ height: "95px", width: "182px" }} /></div>
            <div className='toolstack-div' > <SiNetlify style={{ height: "95px", width: "182px" }} /></div>

        </div>
    )
}

export default ToolStack