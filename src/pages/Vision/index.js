import { Col, Row, Typography } from "antd"
import React from "react"
import imageNav from '../../assets/images/fondo.png'

const { Title } = Typography

const Vision = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} align='middle' justify='center' >
                <Col span={20} >
                    <Title level={2} >Visión</Title>
                </Col>
            </Row>
            <Row 
                style={{
                    paddingTop: 30, 
                    paddingBottom: 30, 
                    background: `url(${imageNav})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }} 
            >
                <Row  align='middle' justify='center' >
                    <Col span={18} style={{background: 'rgba(255, 255, 255, 0.7)', padding: 40}} >
                        <p >Contribuir en la mejora de calidad de vida de las personas y el desarrollo sustentable y sostenible del país, entregando resultados concretos de forma confiable y segura. Nuestro trabajo se fundamenta en un profundo compromiso con nuestros clientes; el cuidado, el desarrollo y la capacitación constante de nuestros trabajadores; y, la modernización. Consolidarnos como empresa líder, moderna, eficiente y reconocida por brindar servicios de calidad responsable.</p>
                        <p >La visión para los próximos años se centra en nuestro compromiso con el cliente, fijándonos como claro objetivo consolidarnos como un icono de referencia en las instalaciones eléctricas domiciliarias, comerciales e industriales, mantenimiento preventivo y brindar asistencia técnica, siendo un referente en nuestro segmento de mercado a nivel nacional, por proporcionar soluciones eficientes reduciendo los costos por medio de instalaciones adaptadas a sus necesidades.</p>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default Vision