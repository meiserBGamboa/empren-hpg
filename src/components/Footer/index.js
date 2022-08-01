import { Col, Row, Typography } from "antd"
import React from "react"

const { Title } = Typography

const Footer = () => {
    return (
        <div>
            <Row style={{paddingLeft: 0, paddingRight: 0, padding: 60}} >
                <Col span={2} ></Col>
                <Col span={8} >
                    <Row >
                        <Col span={24} >
                            <Title level={3} >Sobre Nosotros</Title>
                        </Col>
                        <Col span={24} >
                            <p>Founded by Kevin Smith back in 2000. Renovate has estabilished itself as one of the greatest and prestigious providers of construction focused interior renovation services and building.</p>
                        </Col>
                    </Row>
                </Col>
                <Col span={4} ></Col>
                <Col span={8} >
                    <Row >
                        <Col span={24} >
                            <Title level={3} >Sobre Nosotros</Title>
                        </Col>
                        <Col span={12} >
                            <ul >
                                <li>Interior Renovation</li>
                                <li>Interior Renovation</li>
                                <li>Interior Renovation</li>
                                <li>Interior Renovation</li>
                            </ul>
                        </Col>
                        <Col span={12} >
                            <ul >
                                <li>Interior Renovation</li>
                                <li>Interior Renovation</li>
                                <li>Interior Renovation</li>
                                <li>Interior Renovation</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col span={2} ></Col>
            </Row>
        </div>
    )
}

export default Footer