import { Col, Row, Typography } from "antd"
import React from "react"
import imageNav from '../../assets/images/fondo.png'

const { Title, Text } = Typography
const items = [
    {
        title: 'Realizar trabajos en redes energizadas BT, MT y AT (instalación, mantenimiento y reparación).'
    },
    {
        title: 'Realizar trabajos en altura.'
    },
    {
        title: 'Cambio y/o reparación de acometidas aéreas y subterráneas.'
    },
    {
        title: 'Adosado y/o empotrado de acometidas aéreas y subterráneas.'
    },
    {
        title: 'Cambio y/o mantenimiento de interruptores termomagnéticos (ITM) en redes monofásicas y/o trifásicas.'
    },
    {
        title: 'Instalación de equipos y/o accesorios para una medición exacta del consumo de energía mensual.'
    },
    {
        title: 'Verificación, estudio y detección de anomalías y/o fallas en los equipos de medición energética.'
    },
    {
        title: 'Recepción y verificación de los materiales asignados para el cumplimiento de las actividades.'
    },
    {
        title: 'Verificación e inspección del estado de instalaciones eléctricas, conocimientos de equipos de refrigeración, tableros eléctricos, conocimiento en mantenimiento de luminarias, uso de herramientas eléctricas.'
    },
    {
        title: 'Realizar los check list y reporte de trabajos diarios al software de gestión de mantenimiento.'
    },
    {
        title: 'Mantener ordenado y limpio su sector y área de trabajo.'
    },
    {
        title: 'Cumplir el reglamento interno de seguridad o las disposiciones relacionadas con la seguridad en el trabajo.'
    },
    {
        title: 'Otras actividades relacionadas con su puesto que le sean asignadas por su jefe inmediato.'
    },
]

const Service3 = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} align='middle' justify='center' >
                <Col span={20} >
                    <Title level={2} >Preparación, Ejecución y Soporte Técnico</Title>
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
                        <ul >
                            {
                                items.map((itm) => {
                                    return (
                                        <li class="fa fa-check template-bullet" style={{width: '100%'}} ><Text className="text-li" >{itm.title}</Text></li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default Service3