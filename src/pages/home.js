import { Carousel, Col, Row, Space } from 'antd'
import React from 'react'
import { getHome } from '../api/content'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'
import { Typography } from "antd"
import Icon from "../images/icoGermany.png"

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
                <div>
                    <div className="flex my-6 items-center w-full justify-center">
                        <img className="w-8 mr-3" src={Icon} alt="Bandera Alemana" />
                        <Title level={3}>Mundial 2006</Title>
                    </div>
                    <Carousel autoplay style={{ width: "100%", height: "256px" }}>

                        {
                            media ? media.map((item, key) => {
                                return <div key={key} >
                                    <img className='object-contain w-full h-64' src={item.formats.medium.url} alt={item.alternativeText} />
                                </div>
                            }) : null
                        }
                    </Carousel>
                    <Space direction="vertical">
                        <Row style={{ marginTop: "12px" }}>
                            <Col>
                                <Title level={2}>¿Qué es Mundial 2006?</Title>
                                <Text>Es un proyecto para la consulta de información sobre los acontecimientos sucedidos en el mundial de fútbol Alemania 2006</Text>
                            </Col>
                        </Row>
                        <hr className="mt-4" />
                        <Row style={{ marginTop: "12px" }}>
                            <Col>
                                <Title level={2}>¿Qué es Mundial 2006?</Title>
                                <Text>Es un proyecto para la consulta de información sobre los acontecimientos sucedidos en el mundial de fútbol Alemania 2006</Text>
                            </Col>
                        </Row>
                    </Space>
                </div>
            </LayoutPage>
        </>
    )
}

export default HomePage