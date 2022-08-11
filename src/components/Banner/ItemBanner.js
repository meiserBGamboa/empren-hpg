import { Col, Grid, Row, Typography } from "antd"
import React from "react"
import banner1 from '../../assets/images/banner-01.jpg'

const { Title } = Typography
const { useBreakpoint } = Grid

const StyleItem = {
    panel: {
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
        borderBottom: '2px solid #89B94B' 
    },
    cardBody: {
        whiteSpace: "normal", 
        background: 'rgba(38, 38, 40, 0.5)', 
        color: 'white', 
        padding: '35px 20px' 
    }
}

const ItemBanner = ({key, banner, bannerPhone, title, description}) => {
	const { md } = useBreakpoint()

    return (
        <div key={`section-item-${key}`}>
            <div key={`image-${key}`} style={{backgroundImage: `url(${(banner) ? (md && bannerPhone) ? banner : bannerPhone : banner1})`, height: (md) ? 650 : 270, ...StyleItem.panel}} >
                <Row key={`card-panel-${key}`} gutter={16} align={(md) ? 'middle' : 'bottom'} style={StyleItem.row} >
                    <Col xs={0} sm={1} ></Col>
                    <Col 
                        xs={24} 
                        sm={16} 
                        ls={10} 
                        xl={10} 
                        key={`card-section-${key}`}
                    >
                        <Row key={`card-${key}`} >
                            <Col key={`card-header-${key}`} span={24} style={StyleItem.cardHead}>
                                <Title key={`card-title-${key}`} level={(md)? 2 : 4} style={{ color: 'white'}}>{title}</Title>
                            </Col>
                            {md ? 
                                <Col key={`card-body-${key}`} span={24} style={StyleItem.cardBody}>
                                    <p key={`card-description-${key}`} >{description}</p>
                                </Col>
                            : <></> }
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ItemBanner