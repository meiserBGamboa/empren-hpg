import { Col, Row, Typography } from "antd"
import React from "react"
import banner1 from '../../assets/images/banner-01.jpg'

const { Title } = Typography

const StyleItem = {
    panel: {
         
        height: 700,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    row: {
        textAlign: 'center', 
        height: '100%', 
        margin: '0'
    },
    cardHead: {
        whiteSpace: "normal", 
        background: 'rgba(38, 38, 40, 0.7)', 
        color: 'white', 
        padding: '20px 10px',
        borderBottom: '1px' 
    },
    cardBody: {
        whiteSpace: "normal", 
        background: 'rgba(38, 38, 40, 0.5)', 
        color: 'white', 
        padding: '35px 20px' 
    }
}

const ItemBanner = ({banner, title, description}) => {
    return (
        <div >
            <div style={{backgroundImage: `url(${(banner) ? banner : banner1})`, ...StyleItem.panel}} >
                <Row gutter={16} align='middle' style={StyleItem.row} >
                    <Col span={6} offset={3} >
                        <Row >
                            <Col span={24} style={StyleItem.cardHead}>
                                <Title level={2} style={{ color: 'white'}}>{title}</Title>
                            </Col>
                            <Col span={24} style={StyleItem.cardBody}>
                                <p>{description}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ItemBanner