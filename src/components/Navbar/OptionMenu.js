import { Grid, Menu } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import LinkerAnchor from "./LinkerAnchor"

const { useBreakpoint } = Grid

const OptionMenu = () => {
	const { md } = useBreakpoint()

    return (
        <Menu 
            theme={md ? "light" : "dark"}
            mode={md ? "horizontal" : "inline"} 
            items={[
                    {
                        key: 'label 1',
                        label: <Link to={'/'} >Home</Link>
                    },
                    {
                        key: 'label 2',
                        label: <LinkerAnchor id={'services'} subtitle={'servicios'} />
                    },
                    {
                        key: 'label 3',
                        label: <LinkerAnchor id={'project'} subtitle={'Proyectos'} />
                    },
                    {
                        key: 'label 4',
                        label: <Link to={'/team'} >Nuestro Equipo</Link>
                    },
                    {
                        key: 'label 5',
                        label: <Link to={'/contact'} >Contacto</Link>
                    }
                ]}
            style={{
                display: 'block', 
                float: 'right'
            }} 
        />
    )
}

export default OptionMenu