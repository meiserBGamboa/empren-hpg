import { Col, Row, Typography } from "antd"
import React from "react"

import service1 from '../../assets/images/image_05.jpg'
import './service.css'

const { Title } = Typography

const dataServices = [
    {
        image: service1,
        title: 'Interior Renovation',
        description: 'We can help you bring new life to existing rooms and develop unused spaces.'
    },
    {
        image: service1,
        title: 'Design and build',
        description: 'We can help you bring new life to existing rooms and develop unused spaces.'
    },
    {
        image: service1,
        title: 'Interior Renovation',
        description: 'We can help you bring new life to existing rooms and develop unused spaces.'
    },
    {
        image: service1,
        title: 'Interior Renovation',
        description: 'We can help you bring new life to existing rooms and develop unused spaces.'
    },
]

const Services = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} >
                <Col span={24} >
                    <Title level={2} >Nuestros Servicios</Title>
                </Col>
            </Row>
            <Row style={{paddingTop: 60, paddingBottom: 60, background: '#FFF'}} >
                <Row  align='middle' justify='center' >
                    <Col span={18} >
                        <Row>
                            {(dataServices)
                            ?
                                dataServices.map((itm) => {
                                    return (
                                        <Col span={8} >
                                            <Row >
                                                <div style={{width: '100%', marginBottom: 20}} >
                                                    <img alt='arq1' src={itm.image} style={{width: '100%'}} />
                                                </div>
                                                <Col span={24} >
                                                    <Title level={3} style={{textAlign: 'center'}} className='title-service' >{itm.title}</Title>
                                                </Col>
                                                <Col span={24} style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15 }} >
                                                    <p style={{textAlign: 'center'}} >{itm.description}</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )
                                })
                            :
                                <></>
                            }
                        </Row>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default Services