import { Col, Form, Input, Row } from "antd"
import { EnvironmentOutlined } from '@ant-design/icons'
import React from "react"

const { TextArea } = Input

const Contact = () => {
    return (
        <>
            <Row align="middle" justify='center' style={{background: '#FFF'}} >
                <Col span={7} >
                    <Row >
                        <Col span={4} >
                            <EnvironmentOutlined style={{ fontSize: '60px', color: '#89B94B' }} />
                        </Col>
                        <Col span={20} >
                            <p >272 Linden Avenue Winter Park, FL 32789</p>
                        </Col>
                    </Row>
                </Col>
                <Col span={7} >
                    <Row >
                        <Col span={4} >
                            <EnvironmentOutlined style={{ fontSize: '60px', color: '#89B94B' }} />
                        </Col>
                        <Col span={20} >
                            <p >272 Linden Avenue Winter Park, FL 32789</p>
                        </Col>
                    </Row>
                </Col>
                <Col span={7} >
                    <Row >
                        <Col span={4} >
                            <EnvironmentOutlined style={{ fontSize: '60px', color: '#89B94B' }} />
                        </Col>
                        <Col span={20} >
                            <p >272 Linden Avenue Winter Park, FL 32789</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Form >
                <Row align="middle" justify='center' gutter={16} style={{background: '#FFF', marginLeft: 0, marginRight: 0, paddingTop: 30, paddingBottom: 20}} >
                    <Col span={11} >
                        <Form.Item 
                            name='name' 
                        >
                            <Input 
                                size='large'
                                placeholder='Nombre Completo' 
                            />
                        </Form.Item>
                        <Form.Item 
                            name='email' 
                        >
                            <Input 
                                size='large'
                                placeholder='Correo' 
                            />
                        </Form.Item>
                        <Form.Item 
                            name='phone' 
                        >
                            <Input 
                                size='large'
                                placeholder='Telefono' 
                            />
                        </Form.Item>
                    </Col>
                    <Col span={11} >
                        <Form.Item 
                            name='phone' 
                        >
                            <TextArea autoSize={{ minRows: 6, maxRows: 6 }} 
                                size='large'
                                placeholder='Mensaje' 
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Contact