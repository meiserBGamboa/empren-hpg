import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "../pages/Contact"

import Home from "../pages/Home"
import Services from "../pages/Services"
import Team from "../pages/Team"
import DashboardRoutes from "./DashboardRoutes"
import PublicRouter from "./PublicRouter"

const AppRouter = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route exact path='/' element = {<PublicRouter component={<DashboardRoutes />} />} >
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/services' element={<Services />} />
                    <Route exact path='/project' element={<Home />} />
                    <Route exact path='/team' element={<Team />} />
                    <Route exact path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter