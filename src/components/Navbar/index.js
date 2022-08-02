import { Col, Grid, Layout, Row, Typography } from "antd"
import logoNav from '../../assets/images/logo-01.png'
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
                        <img alt="logo" src={logoNav} style={{width: '100%'}} />
                    </Col>
                    <Col span={20} >
                        <Title level={2} style={{marginTop: 5, marginBottom: 0}} >{'HPG'}</Title>
                        <Title level={4} style={{marginTop: 0, marginBottom: 0}} translate="no" >{'Logist & Consulting'}</Title>
                    </Col>
                </Row>
            </div>
            { md ? <OptionMenu /> : <></> }
        </Header>
    )
}

export default Navbar