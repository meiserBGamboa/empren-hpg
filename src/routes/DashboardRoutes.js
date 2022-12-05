import React from "react"
import { Outlet } from "react-router-dom"
import { Grid, Layout } from "antd"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LateralBar from "../components/LateralBar"
// import ButtonWhatsapp from "../components/ButtonWhatsapp"

const { useBreakpoint } = Grid

const DashboardRoutes = () => {
	const { md } = useBreakpoint()

    return (
        <Layout style={{minHeight: '100%'}} >
            <Navbar />
            <Layout >
                { md ? <></> : <LateralBar /> }
                <Layout >
                    <Outlet />
                    
                    <Footer />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default DashboardRoutes

// <ButtonWhatsapp />