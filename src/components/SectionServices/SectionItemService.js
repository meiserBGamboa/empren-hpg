import { Col, Typography } from "antd"
import React from "react"

const { Title } = Typography

const SectionItemService = ({title, description, image}) => {
    return (
        <Col 
            xs={24} 
            sm={12} 
            ls={8} 
            xl={8}  
            style={{background: '#FFF'}}
        >
            <div style={{width: '100%', marginBottom: 20}} >
                <img alt='arq1' src={image} style={{width: '100%'}} />
            </div>
            <Title level={3} style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, minHeight: 110}}>{title}</Title>
        </Col>
    )
}

export default SectionItemService