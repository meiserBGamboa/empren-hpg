import { Col, Row, Typography } from "antd"
import React from "react"

const { Title } = Typography

const SectionProject = ({info, items}) => {
    return (
        <Row gutter={16} align='middle' justify='center' style={{marginLeft: 0, marginRight: 0, background: '#FFF'}}>
            <Col span={24} style={{textAlign: 'center'}} >
                <Title level={1} id={'project'} style={{marginTop: 30}} >{info.title}</Title>
            </Col>
            <Col span={12} style={{textAlign: 'center', marginBottom: '25px'}} >
                <p>{info.description}</p>
            </Col>
            <Col span={24} style={{textAlign: 'center', marginBottom: 50}} >
                <Row align='middle' justify='center' >
                    {items 
                    ? 
                        items.map((itm, indx) => {
                            return (
                                <Col key={`panel-${indx}`} span={6} >
                                    <img key={`image-${indx}`} alt='project1' src={itm.image} style={{width:'100%'}} />
                                </Col>
                            )
                        })
                    : 
                    <></>
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default SectionProject