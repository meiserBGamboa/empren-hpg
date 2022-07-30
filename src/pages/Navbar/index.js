import { Col, Layout, Menu, Row, Typography } from "antd"
import { Link } from "react-router-dom"
import LinkerAnchor from "./LinkerAnchor"
import logoNav from '../../assets/images/logo-01.png'

const {Header} = Layout
const { Title } = Typography

const Navbar = () => {
    return (
        <Header style={{background: '#fff', height: 102, paddingTop: 15}}>
            <div style={{width: 400, float: 'left'}}>
                <Row gutter={8} >
                    <Col span={4} >
                        <img alt="logo" src={logoNav} style={{width: '100%'}} />
                    </Col>
                    <Col span={20} >
                        <Title level={2} style={{marginTop: 5, marginBottom: 0}} >{'HPG'}</Title>
                        <Title level={4} style={{marginTop: 0, marginBottom: 0}} >{'Logist & Consulting'}</Title>
                    </Col>
                </Row>
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