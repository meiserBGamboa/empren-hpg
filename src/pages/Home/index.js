import { Col, Row, Typography } from "antd"
import React from "react"

import banner2 from '../../assets/images/banner-02.png'
import banner3 from '../../assets/images/banner-03.png'

import service1 from '../../assets/images/image_01.jpg'
import project1 from '../../assets/images/image_05.jpg'

import Banner from "../../components/Banner"

const { Title } = Typography

const dataBanner = [
    {
        title: 'PROFESSIONAL TILING AND PAINTING SERVICES',
        description: 'We have the experience, personel and resources to make the project run smoothly. We can ensure a job is done on time.',
        banner: banner2
    },
    {
        title: 'PROFESSIONAL TILING AND PAINTING SERVICES',
        description: 'We have the experience, personel and resources to make the project run smoothly. We can ensure a job is done on time.',
        banner: banner3
    },
]

const Home = () => {
    return (
                < >
                    <Banner data={dataBanner} />
                    <Row gutter={16} align='middle' justify='center' style={{marginLeft: 0, marginRight: 0}}>
                        <Col span={24} style={{textAlign: 'center'}} >
                            <Title level={1} id={'services'} style={{marginTop: 30}} >Nuestros Servicios</Title>
                            
                        </Col>
                        <Col span={12} style={{textAlign: 'center', marginBottom: '25px'}} >
                            <p>With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation,
driveway sett or home repair. We provide a professional service for private and commercial customers.</p>
                        </Col>
                        <Col span={16} style={{textAlign: 'center'}} >
                            <Row align='middle' justify='center' >
                                <Col span={8} >
                                    <div style={{width: '100%', marginBottom: 20}} >
                                        <img alt='arq1' src={service1}  />
                                    </div>
                                    <Title level={2} >Interior Renovation</Title>
                                    <div style={{padding: '30px'}} >
                                        <p>
                                            We can help you bring new life to existing rooms and develop unused spaces.
                                        </p>
                                    </div>
                                </Col>
                                <Col span={8} >
                                    <div style={{width: '100%', marginBottom: 20}} >
                                        <img alt='arq1' src={service1}  />
                                    </div>
                                    <Title level={2} >Interior Renovation</Title>
                                    <div style={{padding: '30px'}} >
                                        <p>
                                            We can help you bring new life to existing rooms and develop unused spaces.
                                        </p>
                                    </div>
                                </Col>
                                <Col span={8} >
                                    <div style={{width: '100%', marginBottom: 20}} >
                                        <img alt='arq1' src={service1}  />
                                    </div>
                                    <Title level={2} >Interior Renovation</Title>
                                    <div style={{padding: '30px'}} >
                                        <p>
                                            We can help you bring new life to existing rooms and develop unused spaces.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row gutter={16} align='middle' justify='center' style={{marginLeft: 0, marginRight: 0, background: '#FFF'}}>
                        <Col span={24} style={{textAlign: 'center'}} >
                            <Title level={1} id={'project'} style={{marginTop: 30}} >Proyectos Recientes</Title>
                            
                        </Col>
                        <Col span={12} style={{textAlign: 'center', marginBottom: '25px'}} >
                            <p>With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation,
driveway sett or home repair. We provide a professional service for private and commercial customers.</p>
                        </Col>
                        <Col span={24} style={{textAlign: 'center', marginBottom: 50}} >
                            <Row align='middle' justify='center' >
                                <Col span={6} >
                                    <img alt='project1' src={project1} style={{width:'100%'}} />
                                </Col>
                                <Col span={6} >
                                    <img alt='project1' src={project1} style={{width:'100%'}} />
                                </Col>
                                <Col span={6} >
                                    <img alt='project1' src={project1} style={{width:'100%'}} />
                                </Col>
                                <Col span={6} >
                                    <img alt='project1' src={project1}  style={{width:'100%'}} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </>
    )
}

export default Home