import { Layout } from 'antd'
import React from 'react'
import OptionMenu from '../Navbar/OptionMenu'

const { Sider } = Layout

const LateralBar = () => {
    return (
        <Sider 
            breakpoint='md' 
            collapsedWidth='0' 
        >
            <OptionMenu />
        </Sider>
    )
}

export default LateralBar