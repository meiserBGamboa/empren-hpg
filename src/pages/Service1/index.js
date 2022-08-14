import { Col, Row, Typography } from "antd"
import React from "react"

const { Title, Text } = Typography
const items = [
    {
        title: 'Instalaciones eléctricas domiciliarias, comerciales e industriales.'
    },
    {
        title: 'Servicios de instalaciones, reparaciones y mantenimiento de sistemas eléctricos en BT, MT y AT.'
    },
    {
        title: 'Efectuar trabajos de red de electroductos (habilitar y tender red).'
    },
    {
        title: 'Alambres y cables de circuitos, alambrar circuitos. '
    },
    {
        title: 'Conexiones de accesorios (colocar cajas de centro, empotrar cajas en muro, instalar canaletas, instalar tomacorrientes).'
    },
    {
        title: 'Equipos de iluminación (instalar lámparas incandescentes, de descarga, led).'
    },
    {
        title: 'Tableros eléctricos general y de distribución (instalación, montaje y armado).'
    },
    {
        title: 'Instalación sistema de puesta a tierra.'
    },
    {
        title: 'instalación de calentador eléctrico de agua.'
    },
    {
        title: 'Instalación de electrobombas.'
    },
    {
        title: 'Instalación sistema de intercomunicadores.'
    },
    {
        title: 'Instalación dispositivos de control automático.'
    },
    {
        title: 'Instalación de sistema de alarma y señalización.'
    },
    {
        title: 'Instalar sistema de seguridad.'
    },
    {
        title: 'Creación de sistemas y equipos utilizados en edificaciones a través de conocimientos tecnológicos.'
    },
    {
        title: 'Criterios técnicos de los materiales, herramientas y equipos necesarios para efectuar las labores según los planos de instalaciones eléctricas siguiendo las normas de seguridad.'
    },
    {
        title: 'Montaje de bandejas porta cables, canalización con tuberías PVC y Conduit.'
    },
    {
        title: '    Capacidad de lectura de planos eléctricos.'
    },
]

const Service1 = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} align='middle' justify='center' >
                <Col span={20} >
                    <Title level={2} >Instalación, Reparación y Mantenimiento en BT, MT y AT</Title>
                </Col>
            </Row>
            <Row style={{paddingTop: 60, paddingBottom: 60, background: '#FFF'}} >
                <Row  align='middle' justify='center' >
                    <Col span={18} >
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

export default Service1