import { Col, Row } from "antd"
import { EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons'
import React from "react"

const styleComponent = {
    section: {
        background: '#FFF', 
        paddingTop: 50, 
        paddingBottom: 20
    },
    section2: {
        background: '#89B94B', 
        paddingTop: 50, 
        paddingBottom: 20,
        color: '#FFF'
    },
    icon: {
        fontSize: '60px', 
        color: '#89B94B'
    },
    icon2: {
        fontSize: '60px', 
        color: '#FFF'
    },
    colCenter: {
        display: 'flex',
        alignItems: 'center'
    }
}

const BannerContact = ({fill = true}) => {
    return (
        <Row 
            align="middle" 
            justify='center' 
            style={fill ? styleComponent.section : styleComponent.section2} 
        >
            <Col 
                xs={16} 
                sm={10} 
                ls={7} 
                xl={7} 
                style={{paddingBottom: 30}}
            >
                <Row >
                    <Col span={5} >
                        <EnvironmentOutlined 
                            style={fill ? styleComponent.icon : styleComponent.icon2} />
                    </Col>
                    <Col span={19} style={styleComponent.colCenter} >
                        <p style={{margin:0}} >272 Linden Avenue <br /> Winter Park, FL 32789</p>
                    </Col>
                </Row>
            </Col>
            <Col 
                xs={16} 
                sm={10} 
                ls={7} 
                xl={7} 
                style={{paddingBottom: 30}} >
                <Row >
                    <Col span={5} >
                        <PhoneOutlined 
                            style={fill ? styleComponent.icon : styleComponent.icon2} />
                    </Col>
                    <Col span={19} style={styleComponent.colCenter} >
                        <p style={{margin:0}} >272 Linden Avenue <br /> Winter Park, FL 32789</p>
                    </Col>
                </Row>
            </Col>
            <Col 
                xs={16} 
                sm={10} 
                ls={7} 
                xl={7} 
                style={{paddingBottom: 30}} >
                <Row >
                    <Col span={5} >
                        <ClockCircleOutlined 
                            style={fill ? styleComponent.icon : styleComponent.icon2} />
                    </Col>
                    <Col span={19} style={styleComponent.colCenter} >
                        <p style={{margin:0}} >272 Linden Avenue <br /> Winter Park, FL 32789</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default BannerContact