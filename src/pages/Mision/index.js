import { Col, Row, Typography } from "antd"
import React from "react"

const { Title } = Typography

const Mission = () => {
    return (
        <>
            <Row style={{paddingTop: 30,paddingBottom: 10, paddingLeft: 30, paddingRight: 30}} align='middle' justify='center' >
                <Col span={20} >
                    <Title level={2} >Misión</Title>
                </Col>
            </Row>
            <Row style={{paddingTop: 60, paddingBottom: 60, background: '#FFF'}} >
                <Row  align='middle' justify='center' >
                    <Col span={18} >
                        <p >La empresa deberá implementar con éxito la ejecución de proyectos, servicios y soluciones de acuerdo a procedimientos establecidos en el Código Nacional de Electricidad (CNE) y la Norma Técnica Peruana (NTP) para satisfacer las necesidades de nuestros clientes y colaboradores siguiendo estándares de calidad y contribuyendo con el desarrollo del país, asegurando además consolidar su liderazgo en seguridad laboral en la industria. La empresa deberá ser un actor relevante en el desarrollo de las nuevas tecnologías de la       industria eléctrica, promoviendo un trabajo cercano con las comunidades.</p>
                        <p >Brindar un servicio socialmente responsable, que contribuya a mejorar la calidad de vida de las personas, el desarrollo de los negocios y de la comunidad, asegurando el crecimiento de la empresa y sus colaboradores.</p>
                        <p >Generamos bienestar y desarrollo a nivel nacional, asegurando la ejecución de proyectos en todo el territorio peruano, con altos estándares de calidad y eficiencia, con el aporte de talento humano, comprometido y competente, actuando responsablemente con la comunidad y el ambiente”.</p>
                        <p >Fortalecer los procesos empresariales relacionados con la prestación de servicios a través de los requerimientos normativos y regulatorios.</p>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default Mission