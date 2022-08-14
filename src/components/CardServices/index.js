import { Col, Row, Typography } from "antd"
import React from "react"

const { Title } = Typography

const CardServices = ({itm}) => {
    return (
        <Col 
            xs={24} 
            sm={12} 
            ls={8} 
            xl={8}  
        >
            <Row >
                <div style={{width: '100%', marginBottom: 20}} >
                    <img alt='arq1' src={itm.image} style={{width: '100%'}} />
                </div>
                <Col span={24} >
                    <Title level={3} style={{textAlign: 'center'}} className='title-service' >{itm.title}</Title>
                </Col>
                {(itm.description) 
                ?
                <Col span={24} style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15 }} >
                    <p style={{textAlign: 'center'}} >{itm.description}</p>
                </Col>
                :
                <></>
                
                }
            </Row>
        </Col>
    )
}

export default CardServices