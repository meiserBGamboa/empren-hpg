import { Col, Row, Typography } from "antd"
import React from "react"
import BannerContact from "../../components/BannerContact"

const { Title } = Typography

const Team = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} >
                <Col span={24} >
                    <Title level={2} >Nuestro Equipo</Title>
                </Col>
            </Row>
            <BannerContact fill = {false}/>
        </>
    )
}

export default Team