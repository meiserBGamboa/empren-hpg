import { Col, Grid, Layout, Row, Typography } from "antd"
import { Html5Outlined } from '@ant-design/icons'
//import logoNav from '../../assets/images/logo-01.png'
import OptionMenu from "./OptionMenu"

const { Header } = Layout
const { Title } = Typography
const { useBreakpoint } = Grid

const Navbar = () => {
	const { md } = useBreakpoint()

    return (
        <Header style={{background: '#fff', height: 102, paddingTop: 15, paddingLeft: 15}}>
            <div style={{width: 350, float: 'left'}}>
                <Row gutter={8} >
                    <Col span={4} >
                        <Html5Outlined style={{ fontSize: '60px', color: '#89B94B' }} />
                        
                    </Col>
                    <Col span={20} >
                        <Title level={2} style={{marginTop: 5, marginBottom: 0}} >{'FFF'}</Title>
                        <Title level={4} style={{marginTop: 0, marginBottom: 0}} translate="no" >{'MMMMMMMM MMMMMMMMM'}</Title>
                    </Col>
                </Row>
            </div>
            { md ? <OptionMenu /> : <></> }
        </Header>
    )
}

export default Navbar
//<img alt="logo" src={logoNav} style={{width: '100%'}} />