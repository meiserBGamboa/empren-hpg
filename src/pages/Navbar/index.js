import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"
import LinkerAnchor from "./LinkerAnchor"

const {Header} = Layout

const Navbar = () => {
    return (
        <Header style={{background: '#fff', height: 102, paddingTop: 15}}>
            <div style={{width: 200, float: 'left'}}>
                <div>{'HPG Logist & Consulting'}</div>
            </div>
            <Menu theme="light" mode="horizontal" items={
                [
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
                ]
            }
            style={{display: 'block', float: 'right'}} />
        </Header>
    )
}

export default Navbar