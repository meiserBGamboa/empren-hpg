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
                        label: 'Nosotros',
                        children: [
                            {
                                key: 'submenu-vision',
                                label: <Link to={'/vision'} >Vision</Link>
                            },
                            {
                                key: 'submenu-Mision',
                                label: <Link to={'/mision'} >Mision</Link>
                            },
                            {
                                key: 'submenu-Valores',
                                label: <Link to={'/values'} >Valores Corporativos</Link>
                            },
                            {
                                key: 'submenu-objectives',
                                label: <Link to={'/objective'} >Objetivos</Link>
                            },
                        ]
                    },
                    {
                        key: 'label 3',
                        label: 'Servicios',
                        children: [
                            {
                                key: 'submenu-service1',
                                label: <Link to={'/service1'} >Instalación, Reparación y Mantenimiento en BT, MT y AT</Link>
                            },
                            {
                                key: 'submenu-service2',
                                label: <Link to={'/service2'} >Supervisión, Logística y Planeamiento</Link>
                            },
                            {
                                key: 'submenu-service3',
                                label: <Link to={'/service3'} >Preparación, Ejecución y Soporte Técnico</Link>
                            },
                        ]
                    },
                    {
                        key: 'label 4',
                        label: <Link to={'/project'} >Proyectos</Link>
                    },
                    {
                        key: 'label 5',
                        label: <Link to={'/contact'} >Contacto</Link>
                    }
                ]}
            style={{
                display: 'block', 
                float: 'right',
                width: 528
            }} 
        />
    )
}

export default OptionMenu