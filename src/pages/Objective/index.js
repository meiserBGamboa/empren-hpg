import { Col, Row, Typography } from "antd"
import React from "react"
import imageNav from '../../assets/images/fondo.png'

const { Title } = Typography

const Objectives = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} align='middle' justify='center' >
                <Col span={20} >
                    <Title level={2} >Objetivos</Title>
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
                        <p >Nuestro objetivo es la ejecución y mantenimiento preventivo de un gran conjunto de proyectos, servicios y soluciones, sostenible en el tiempo entre nuestra empresa y el cliente, en el cual el cliente debe sentirse atendido, informado y seguro.
Mejorar los servicios con calidad, confiabilidad y equidad, a partir del cumplimiento normativo. </p>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default Objectives