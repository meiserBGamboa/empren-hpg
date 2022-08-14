import { Col, Row, Typography } from "antd"
import React from "react"

const { Title, Text } = Typography
const items = [
    {
        title: 'Verificar y asegurar la calidad en la ejecución de los trabajos asignados hasta el cierre del proyecto.'
    },
    {
        title: 'Supervisar las actividades técnicas comerciales del servicio eléctrico asignado, entre averías, perdidas de energía, hurto, rastrillaje, fugas de corriente y nuevos suministros.'
    },
    {
        title: 'Control y distribución de materiales, cuidado de equipos asignados al personal a cargo.'
    },
    {
        title: 'Planificar y ejecutar los trabajos a realizar por las cuadrillas de la Unidad de Negocio.'
    },
    {
        title: 'Coordinar la reposición y/o mantenimiento de Epps, herramientas y/o equipos asignados.'
    },
    {
        title: 'Revisiones eléctricas periódicas (cableado, luminarias y cortocircuitos).'
    },
    {
        title: 'Soporte legal y técnico con respecto a multas, reintegros y/o recupero de energía emitidos por una concesionaria (Lima y provincias).'
    },
]

const Service2 = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} align='middle' justify='center' >
                <Col span={20} >
                    <Title level={2} >Supervisión, Logística y Planeamiento</Title>
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

export default Service2