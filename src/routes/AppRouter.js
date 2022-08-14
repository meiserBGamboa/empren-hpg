import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "../pages/Contact"

import Home from "../pages/Home"
import Mission from "../pages/Mision"
import Objectives from "../pages/Objective"
import Proyect from "../pages/Proyect"
import Services from "../pages/Services"
import Values from "../pages/Values"
import Vision from "../pages/Vision"
import DashboardRoutes from "./DashboardRoutes"
import PublicRouter from "./PublicRouter"

const AppRouter = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route exact path='/' element = {<PublicRouter component={<DashboardRoutes />} />} >
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/mision' element={<Mission />} />
                    <Route exact path='/vision' element={<Vision />} />
                    <Route exact path='/values' element={<Values />} />
                    <Route exact path='/objective' element={<Objectives />} />
                    <Route exact path='/services' element={<Services />} />
                    <Route exact path='/project' element={<Proyect />} />
                    <Route exact path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter