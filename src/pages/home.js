import { Carousel, Col, Row, Skeleton, Space } from 'antd'
import React from 'react'
import { getHome } from '../api/content'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'
import { Typography } from "antd"
import Icon from "../images/icoGermany.png"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {

    const [media, setMedia] = React.useState()
    const { Title, Text } = Typography;

    React.useEffect(() => {
        getHome().then(data => {
            if (data) {
                console.log(data);
                setMedia(data)
            }
        })
    }, [])

    return (
        <>
            <Seo title="Home" />
            <LayoutPage section={"/home"}>
                <div className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto">
                    <div className="flex my-6 items-center w-full justify-center">
                        <img className="w-8 mr-3" src={Icon} alt="Bandera Alemana" />
                        <Title level={3}>Mundial 2006</Title>
                    </div>
                    <Carousel autoplay style={{ width: "100%", height: "256px" }}>

                        {
                            media ?
                                media.map((item, key) => {
                                    return <div key={key} >
                                        <img className='object-contain w-full h-64' src={item.formats.medium.url} alt={item.alternativeText} />
                                    </div>
                                })
                                : <div className='h-64 flex justify-center items-center'>
                                    <Skeleton.Image style={{ height: "256px", width: "256px" }} />
                                </div>
                        }
                    </Carousel>
                    <Space
                        direction="vertical"
                        align="center"
                    >
                        <Row style={{ marginTop: "12px" }}>
                            <Col>
                                <Title level={2}>¿Qué es Mundial 2006?</Title>
                                <Text >Es un proyecto para la consulta de información sobre los acontecimientos sucedidos en el mundial de fútbol Alemania 2006</Text>
                            </Col>
                        </Row>
                        <hr className="mt-4" style={{ zIndex: 40 }} />
                        <Row style={{ marginTop: "12px" }}>
                            <Col>
                                <Title level={2}>¿Es segura?</Title>
                                <Text>Si, no necesito de tu ubicación para que consultes la información, por ahora xP</Text>
                                <br />
                                <Text>Repositorio: <Link to="https://github.com/GZe00/mundial2006" target="_blank">GitHub Alemania 2006</Link></Text>
                            </Col>
                        </Row>
                        <hr className="mt-4" style={{ zIndex: 40 }} />
                        <Row style={{ marginTop: "12px" }}>
                            <Col>
                                <Title level={2}>¿La información es confiable?</Title>
                                <Text>Te recomiendo que consultes la información que se presenta con otras fuentes, ya que he encontrado discrepancias en la revista pero no la corrigo para mantener fiel el objetivo de este proyecto, pero lo solucionaré agregando hipervinvulos (como Wikipedia o referencias de Wiki) para "corregir" la información y/o complementarla</Text>
                            </Col>
                        </Row>
                        <hr className="mt-4" style={{ zIndex: 40 }} />
                        <Row style={{ marginTop: "12px" }}>
                            <Col>
                                <Title level={2}>¿México pasó de los 8vos de final?</Title>
                                <Text>Te recomiendo que le eches un vistazo a la página y lo descubras por ti mismo ;) </Text>
                                <br />
                                <Text>Spoiler: No</Text>
                            </Col>
                        </Row>
                        <hr className="mt-4" />
                    </Space>
                </div>
                <hr className="my-4 mb-8" style={{ zIndex: 40 }} />
                <div className="w-full flex flex-col justify-center">
                    <Title level={1}>Principales colaboradores</Title>
                    <div className="flex flex-col justify-center">
                        <div>
                            <StaticImage
                                style={{ borderRadius: "20px" }}
                                src="../images/pre.jpg"
                                alt="Profile picture"
                                layout="constrained"
                                width={220}
                                height={280}
                            />
                        </div>
                        <Title level={2}>Moisés Fuentes</Title>
                        <Text style={{ margin: "-12px 0 20px 0" }} type="secondary">Software Development Engineer</Text>
                    </div>
                    <div className="w-full md:w-72 mx-auto">
                        <ul className="text-left">
                            <li>
                                GitHub: <Link to="https://github.com/GZe00/mundial2006" target="_blank">GZe00</Link>
                            </li>
                            <li>
                                Contacto: <span className="text-blue-400">
                                    dev.gze.moises@gmail.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </LayoutPage>
        </>
    )
}

export default HomePage