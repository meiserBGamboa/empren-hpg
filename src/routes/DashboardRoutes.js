import React from "react"
import { Outlet } from "react-router-dom"
import { Layout } from "antd"

const DashboardRoutes = () => {
    return (
        <Layout style={{minHeight: '100%'}} >
            <Layout >
                <Layout >
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default DashboardRoutes