import { Col, Row, Typography } from "antd"
import React from "react"

import service1 from '../../assets/images/service-01.jpeg'
import service2 from '../../assets/images/service-02.jpeg'
import service3 from '../../assets/images/service-03.jpeg'
import service4 from '../../assets/images/service-04.jpeg'
import service5 from '../../assets/images/service-05.jpeg'
import service6 from '../../assets/images/service-06.jpeg'
import service7 from '../../assets/images/service-07.jpeg'
import service8 from '../../assets/images/service-08.jpeg'
import service9 from '../../assets/images/service-09.jpeg'
import service10 from '../../assets/images/service-10.jpeg'
import service11 from '../../assets/images/service-11.jpeg'
import service12 from '../../assets/images/service-12.jpeg'
import service13 from '../../assets/images/service-13.jpeg'
import BannerContact from "../../components/BannerContact"
import CardServices from "../../components/CardServices"
import './service.css'

const { Title } = Typography

const dataServices = [
    {
        image: service1,
        title: 'Pruebas de tensión o falla en el cortocircuito',
    },
    {
        image: service2,
        title: 'Instalación, montaje y armado de tableros industriales',
    },
    {
        image: service3,
        title: 'Trabajos en altura',
    },
    {
        image: service4,
        title: 'Verificación de pérdidas de energía y fugas de corriente',
    },
    {
        image: service5,
        title: 'Instalación de dispositivos de control automático',
    },
    {
        image: service6,
        title: 'Cambio y/o mantenimiento de interruptores termomagnéticos (ITM) en redes Monofásicas y trifásicas',
    },
    {
        image: service7,
        title: 'Corrido de línea de tierra en el circuito',
    },
    {
        image: service8,
        title: 'Fijar, habilitar y tender red de electroductos con tubo corrugado',
    },
    {
        image: service9,
        title: 'Fijar, habilitar y tender red de electroductos con tuberias PVC y conduit',
    },
    {
        image: service10,
        title: 'Instalación de bombas de agua en edificios',
    },
    {
        image: service11,
        title: 'instalacion de sistema contra incendio',
    },
    {
        image: service12,
        title: 'instalacion de calentador de agua',
    },
    {
        image: service13,
        title: 'Instalacion de sistema de intercomunicadores',
    },
]

const Services = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} >
                <Col span={24} >
                    <Title level={2} >Nuestros Servicios</Title>
                </Col>
            </Row>
            <Row style={{paddingTop: 60, paddingBottom: 60, background: '#FFF'}} >
                <Row  align='middle' justify='center' >
                    <Col span={20} >
                        <Row>
                            {(dataServices)
                            ?
                                dataServices.map((itm) => {
                                    return (
                                        <CardServices itm={itm} />
                                    )
                                })
                            :
                                <></>
                            }
                        </Row>
                    </Col>
                </Row>
            </Row>
            <BannerContact fill = {false}/>
        </>
    )
}

export default Services