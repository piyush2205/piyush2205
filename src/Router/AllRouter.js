import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from "../Components/About/About"
import Home from '../Components/Home/Hero'
import Project from '../Components/Project/Project'

function AllRouter() {
    return (
        <>

            <Routes>
                <>
                    <Route path='/about' element={<About />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/project' element={<Project />} />

                </>

            </Routes>
        </>


    )
}

export default AllRouter