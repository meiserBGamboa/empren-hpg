import React from 'react'
import { Outlet } from "react-router-dom"

const PublicRouter = (
    component,
    ...rest
) => {
    return component ? component : <Outlet />
}

export default PublicRouter