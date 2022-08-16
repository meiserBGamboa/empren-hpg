import { Col, Row, Typography } from "antd"
import React from "react"
import './footer.css'

const { Title, Text } = Typography

const dataServices = [
    {
        title: 'Pruebas de tensión o falla en el cortocircuito',
    },
    {
        title: 'Instalación, montaje y armado de tableros industriales',
    },
    {
        title: 'Trabajos en altura',
    },
    {
        title: 'Verificación de pérdidas de energía y fugas de corriente',
    },
    {
        title: 'Instalación de dispositivos de control automático',
    },
    {
        title: 'Cambio y/o mantenimiento de interruptores termomagnéticos (ITM) en redes Monofásicas y trifásicas',
    },
    {
        title: 'Corrido de línea de tierra en el circuito',
    },
]
const dataServices2 = [
    {
        title: 'Fijar, habilitar y tender red de electroductos con tubo corrugado',
    },
    {
        title: 'Fijar, habilitar y tender red de electroductos con tuberias PVC y conduit',
    },
    {
        title: 'Instalación de bombas de agua en edificios',
    },
    {
        title: 'instalacion de sistema contra incendio',
    },
    {
        title: 'instalacion de calentador de agua',
    },
    {
        title: 'Instalacion de sistema de intercomunicadores',
    },
]

const Footer = () => {
    return (
        <div>
            <Row style={{paddingLeft: 30, paddingRight: 30, paddingBottom: 60, paddingTop: 60,}} >
                <Col xs={0} 
                    sm={1} ></Col>
                <Col xs={24} 
                    sm={8} 
                    lg={8} 
                    md={6}
                    xl={6} >
                    <Row >
                        <Col span={24} >
                            <Title level={3} >Sobre Nosotros</Title>
                        </Col>
                        <Col span={24} >
                            <p>Nace en agosto del año 2022, ante la demanda creciente por consultoría para la formulación de reclamos por aportes reembolsables, refacturaciones, cambios de tarifa, reducción e incrementos de consumo y demás en la vía administrativa. Además, también asesoría en temas de negociación con empresas distribuidoras de energía para determinar términos contractuales, tarifa, potencia, tensión, modalidad, entre otros.</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} 
                    sm={2} ></Col>
                <Col xs={24} 
                    sm={12} 
                    lg={12} 
                    md={15}
                    xl={15} >
                    <Row >
                        <Col span={24} >
                            <Title level={3} >Nuestros Servicios</Title>
                        </Col>
                        <Col xs={24} 
                            sm={12} >
                            <ul >
                                {dataServices.map((itm) => {
                                    return(
                                        <li class="fa fa-check template-bullet" style={{width: '100%'}} ><Text className="text-li" >{itm.title}</Text></li>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col xs={24} 
                            sm={12} >
                            <ul >
                                {dataServices2.map((itm) => {
                                    return(
                                        <li class="fa fa-check template-bullet" style={{width: '100%'}} ><Text className="text-li" >{itm.title}</Text></li>
                                    )
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Footer