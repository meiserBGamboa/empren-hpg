import { Col, Row, Typography } from "antd"
import React from "react"

const { Title, Text } = Typography
const items = [
    {
        title: 'Integridad: Hacemos lo correcto.'
    },
    {
        title: 'Transparencia: Vamos con verdad y honestidad.'
    },
    {
        title: 'Seguridad: En todo momento.'
    },
    {
        title: 'Excelencia: Hacemos las cosas de manera impecable.'
    },
    {
        title: 'Foco en el cliente: El centro de nuestra gestión.'
    },
    {
        title: 'Eficiencia: Clave en nuestra industria.'
    },
    {
        title: 'Sustentabilidad: Somos responsables con el futuro.'
    },
]

const Values = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} align='middle' justify='center' >
                <Col span={20} >
                    <Title level={2} >Valores Corporativos</Title>
                </Col>
            </Row>
            <Row style={{paddingTop: 60, paddingBottom: 60, background: '#FFF'}} >
                <Row  align='middle' justify='center' >
                    <Col span={18} >
                        <p >Para alcanzar la misión, visión y objetivos, la empresa deberá buscar y cultivar altos estándares de trabajo en todos sus colaboradores y quehacer diario, basándose en los siguientes valores fundamentales:</p>
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

export default Values