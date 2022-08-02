import { Grid, Menu } from "antd"
import React from "react"
import { Link } from "react-router-dom"

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
                        label: <Link to={'/services'} >servicios</Link>
                    },
                    {
                        key: 'label 3',
                        label: <Link to={'/project'} >Proyectos</Link>
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