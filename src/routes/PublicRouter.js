import React from 'react'
import { Outlet } from "react-router-dom"

const PublicRouter = ({
    component
}) => {
    return component ? component : <Outlet />
}

export default PublicRouter