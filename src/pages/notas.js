import React from 'react'
import LayoutPage from '../components/LayoutPage'
import { Col, Row, Typography } from 'antd'
import Seo from "../components/seo"
const Notas = () => {
    const { Title, Text } = Typography;
    const [yearCurrent] = React.useState((new Date()).getFullYear());
    return (
        <>
        <Seo title={"Notas"} />
            <LayoutPage>
                <Title style={{ marginBottom: "0px" }} level={2}>Sección de notas</Title>
                <Title style={{ marginTop: "0px" }} level={5}>...y descripción de cada actualización</Title>
                <div className="w-10/12 mx-auto">
                    <Row >
                        <Col span={24} align="start">
                            <br />
                            <Text strong>
                                -Versión 0.0.1: <Text style={{ fontWeight: "normal" }}>
                                    Se comienza con la idea de realizar este proyecto, tiene como finalidad el preservar la información tomados de una revista deportiva oficial, transcribiendo en su mayoría la información y los acontecimientos sucedidos en el mundial de fútbol del año 2006, hace ya {yearCurrent - 2006} años, además de mostrar como era el país de Alemania de aquella época, por lo que sientete libre de corroborar la información siempre y cuando tengas en cuenta que aquí se está hablando de una época diferente.
                                </Text>
                            </Text>
                            <br />
                            <Text>
                                El proyecto comienza con un layout básico y una portada, se va a procurar utilizar imagenes de la revista o de internet pero haciendo énfasis de lo que se está redactando, además sin derechos de autor, aunque al final mostraré y la fuente principal de donde transcribí la información
                            </Text>
                            <br />
                            <Text>
                                Cuando el proyecto tenga un avance considerable lo subiré a un sistema de control de versiones: GitHub
                            </Text>
                        </Col>
                        <Col span={24} align={"start"}>
                            <hr className="my-4" />
                            <Text strong>
                                -Versión 0.0.2: <Text style={{ fontWeight: "normal" }}>
                                    Navegación en la barra superior, redirecciona a cada una de las opciones seleccionada
                                </Text>
                            </Text>
                            <br />
                            <Text>
                                Seo agregado por sección
                            </Text>
                            <br />
                            <Text>
                                Footer agregado
                            </Text>
                        </Col>
                        <Col span={24} align={"start"}>
                            <hr className="my-4" />
                            <Text strong>
                                -Versión 0.0.3: <Text style={{ fontWeight: "normal" }}>
                                    Avance considerable en la base de datos, consulta de la información será a través de API's REST
                                </Text>
                            </Text>
                            <br />
                            <Text>
                                Solo muestro texto dummy como señal de que todo va bien
                            </Text>
                        </Col>
                        <Col span={24} align={"start"}>
                            <hr className="my-4" />
                            <Text strong>
                                -Versión 0.0.4: <Text style={{ fontWeight: "normal" }}>
                                    Componentes Card y Grupos de cada sección, se renderiza los grupos y paises de manera individual
                                </Text>
                            </Text>
                            <br />
                            <Text>
                                Lista de los 32 paises, consulta a la DB, se debe de resolver el problema que: despues de un tiempo sin consultar la información, hay que recargar la página para mostrar los resultados
                            </Text>
                        </Col>
                        <Col span={24} align={"start"}>
                            <hr className="my-4" />
                            <Text strong>
                                -Versión 0.0.5: <Text style={{ fontWeight: "normal" }}>
                                    Selección individual por país seleccionado, aún se está trabajando/pensando en un diseño adecuado
                                </Text>
                            </Text>
                        </Col>
                        <Col span={24} align={"start"}>
                            <hr className="my-4" />
                            <Text strong>
                                -Versión 0.0.6: <Text style={{ fontWeight: "normal" }}>
                                    Se realizaron ajustes menores en responsive, aún falta por trabajar el responsive en la sección de gripos y países
                                </Text>
                            </Text>
                        </Col>
                        <Col span={24} align={"start"}>
                            <hr className="my-4" />
                            <Text strong>
                                -Versión 0.0.7: <Text style={{ fontWeight: "normal" }}>
                                    Sección de notas añadida, descripción de cada versión nueva
                                </Text>
                            </Text>
                            <br />
                            <Text>
                                Se ha logrado acomodar la información de la sección "Acerca de Alemania", el siguiente paso será dar un mejor diseño desde el CMS
                            </Text>
                            <br />
                            <Text>
                                Llegados a este punto, debería comenzar a hacer commits para tener un historial descriptivo
                            </Text>
                        </Col>

                    </Row>
                </div>
            </LayoutPage>
        </>
    )
}

export default Notas