import { Col, Row, Typography } from "antd"
import React from "react"
import banner1 from '../../assets/images/banner-01.jpg'

const { Title } = Typography

const StyleItem = {
    panel: {
        height: 650,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    row: {
        textAlign: 'center', 
        height: '100%', 
        margin: '0',
        marginLeft: 0, 
        marginRight: 0,
    },
    cardHead: {
        whiteSpace: "normal", 
        background: 'rgba(38, 38, 40, 0.7)', 
        color: 'white', 
        padding: '20px 10px',
        borderBottom: '2px solid' 
    },
    cardBody: {
        whiteSpace: "normal", 
        background: 'rgba(38, 38, 40, 0.5)', 
        color: 'white', 
        padding: '35px 20px' 
    }
}

const ItemBanner = ({key, banner, title, description}) => {
    return (
        <div key={`section-item-${key}`}>
            <div key={`image-${key}`} style={{backgroundImage: `url(${(banner) ? banner : banner1})`, ...StyleItem.panel}} >
                <Row key={`card-panel-${key}`} gutter={16} align='middle' style={StyleItem.row} >
                    <Col 
                        xs={24} 
                        sm={16} 
                        ls={10} 
                        xl={8} 
                        key={`card-section-${key}`}
                    >
                        <Row key={`card-${key}`} >
                            <Col key={`card-header-${key}`} span={24} style={StyleItem.cardHead}>
                                <Title key={`card-title-${key}`} level={2} style={{ color: 'white'}}>{title}</Title>
                            </Col>
                            <Col key={`card-body-${key}`} span={24} style={StyleItem.cardBody}>
                                <p key={`card-description-${key}`} >{description}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ItemBanner