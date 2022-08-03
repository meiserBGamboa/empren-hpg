import { Button, Col, Form, Input, Row } from "antd"
import React from "react"
import MapsContact from "../../components/MapsContact"
import BannerContact from "../../components/BannerContact"

const { TextArea } = Input

const Contact = () => {
    return (
        <>
            <Row >
                <Col span={24} style={{height: 500}} >
                    <MapsContact latLng={{ lat: -11.9217558, lng: -77.0840852 }} zoomMap={16} />
                </Col>
            </Row>
            <BannerContact />
            <Form >
                <Row align="middle" justify='center' gutter={16} style={{background: '#FFF', marginLeft: 0, marginRight: 0, paddingTop: 30, paddingBottom: 20}} >
                    <Col xs={24} sm={11} >
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
                    <Col xs={24} sm={11} >
                        <Form.Item 
                            name='phone' 
                        >
                            <TextArea autoSize={{ minRows: 6, maxRows: 6 }} 
                                size='large'
                                placeholder='Mensaje' 
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={20} ></Col>
                    <Col xs={9} sm={4} >
                        <Form.Item >
                            <Button type="primary" size="large" shape="round" >Enviar Mensaje</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Contact