import React from "react"
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const DashboardRoutes = () => {
    return (
        <Layout style={{minHeight: '100%'}} >
            <Layout >
                <Navbar />
                <Layout >
                    <Outlet />
                </Layout>
                <Footer />
            </Layout>
        </Layout>
    )
}

export default DashboardRoutes