import { Button, Col, Row, Typography } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"
import SectionItemService from "./SectionItemService"

const { Title } = Typography

const SectionServices = ({info, dataService}) => {
	let navigate = useNavigate()
    const sendService = () => {
        (info.link) ? navigate(info.link) : navigate('#')
    }

    return (
        <Row 
            gutter={16} 
            align='middle' 
            justify='center' 
            style={{marginLeft: 0, marginRight: 0}}
        >
            <Col span={24} style={{textAlign: 'center'}} >
                <Title 
                    level={1} 
                    id={'services'} 
                    style={{marginTop: 30}} 
                >{info.title}</Title>
            </Col>
            <Col 
                xs={24} 
                sm={16} 
                ls={12} 
                xl={11} 
                style={{textAlign: 'center', marginBottom: '25px'}} 
            >
                <p>{info.description}</p>
            </Col>
            <Col 
                xs={22} 
                sm={22} 
                lg={20} 
                xl={18}  
                xxl={17}
                style={{textAlign: 'center'}} 
            >
                <Row align='middle' justify='center' >
                    {dataService 
                    ? 
                        dataService.map((itm) => {
                            return (
                                <SectionItemService 
                                    title={itm.title} 
                                    description={itm.description} 
                                    image={itm.image} 
                                />
                            )
                        })
                    : <></> }
                </Row>
            </Col>
            <Col span={24} style={{textAlign: 'center', marginTop: 10, marginBottom: 10 }} >
                <Button type="primary" size="large" shape="round" onClick={sendService} >{info.labelLink}</Button>
            </Col>
        </Row>
    )
}

export default SectionServices