import React from 'react'
import LayoutPage from '../../components/LayoutPage'
import Seo from '../../components/seo'
import { getCountry } from "../../api/content"
import { HiOutlineArrowCircleLeft } from '@react-icons/all-files/hi/HiOutlineArrowCircleLeft'
import { navigate } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import { Col, Row } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

const Country = ({ location }) => {
  const [loc, setLoc] = React.useState()
  const [country, setCountry] = React.useState()
  const [datosGenerales, setDatosGenerales] = React.useState()

  React.useEffect(() => {
    getCountry(location.pathname.split("/")[2]).then(response => {
      setLoc(response.nombre)
      setCountry(response)
      console.log(response)

    })
      .catch(error => {
        console.log(error)
      })
  }, []);


  return (
    <>
      <Seo title={loc ?? ""} />
      <LayoutPage section="/countries">
        <div className='flex items-center w-max' onClick={() => navigate("/countries")}>
          <HiOutlineArrowCircleLeft className='cursor-pointer text-gray-500' size={20} />
          <p className='cursor-pointer ml-2 mb-0 font-semibold text-gray-500 flex items-center'>{<HomeOutlined />}/Paises/Pais/{loc ?? null}</p>
        </div>
        {
          country ?
            <div className='w-full'>
              <img className='object-contain mx-auto' style={{ width: "480px", height: "256px" }} src={`${country.bandera.formats.medium.url}`} alt={`Bandera de: ${country.bandera.alternativeText}`} />
            </div>
            : null
        }

        <p className="mt-3 font-semibold text-4xl" >{loc ?? null}</p>

        <div className="w-full flex flex-col">
          <div className="w-11/12 h-96 mx-auto flex">
            <div className="w-1/3 mr-2 bg-orange-500 glass rounded-lg shadow-xl overflow-y-auto px-4" style={{ height: "100%" }}>
              <h2 className="text-center text-2xl mt-2">Datos Generales</h2>
              <div className="flex flex-col w-full justify-start items-start" style={{ height: "100%" }}>
                {
                  country && country.datos_generales ?
                    <>
                      <p className="mb-0"><span className="font-semibold">Nombre Oficial: </span>{country.datos_generales.nombre_oficial}</p>
                      <p className="mb-0"><span className="font-semibold">Abrevitura: </span>{country.datos_generales.abreviatura}</p>
                      <p className="mb-0"><span className="font-semibold">Continente: </span>{country.datos_generales.continente}</p>
                      <p className="mb-0"><span className="font-semibold">Capital: </span>{country.datos_generales.capital}</p>
                      <p className="mb-0"><span className="font-semibold">Division Politica: </span>{country.datos_generales.division_politica}</p>
                      <p className="mb-0"><span className="font-semibold">Principales Ciudades: </span>{country.datos_generales.ciudades}</p>
                      <p className="mb-0"><span className="font-semibold">Superficie: </span>{country.datos_generales.superficie}</p>
                      <p className="mb-0"><span className="font-semibold">Costas: </span>{country.datos_generales.costas}</p>
                      <p className="mb-0"><span className="font-semibold">Punto más alto: </span>{country.datos_generales.punto_alto}</p>
                      <p className="mb-0"><span className="font-semibold">Paises Vecinos: </span>{country.datos_generales.vecinos}</p>
                      <p className="mb-0"><span className="font-semibold">Salida al mar: </span>{country.datos_generales.salidas_mar}</p>
                      <p className="mb-0"><span className="font-semibold">Población: </span>{country.datos_generales.poblacion}</p>
                      <p className="mb-0"><span className="font-semibold">PIB por habidante: </span>{country.datos_generales.pib}</p>
                      <p className="mb-0"><span className="font-semibold">Densidad: </span>{country.datos_generales.densidad}</p>
                      <p className="mb-0"><span className="font-semibold">Media de edad: </span>{country.datos_generales.media_edad}</p>
                      <p className="mb-0"><span className="font-semibold">Esperanza de vida tras nacer: </span>{country.datos_generales.esperanza_vida}</p>
                      <p className="mb-0"><span className="font-semibold">Alfabetismo: </span>{country.datos_generales.alfabetismo}</p>
                      <p className="mb-0"><span className="font-semibold">Religion: </span>{country.datos_generales.religion}</p>
                      <p className="mb-0"><span className="font-semibold">Moneda: </span>{country.datos_generales.moneda}</p>
                      <p className="mb-0"><span className="font-semibold">Idiomas oficiales: </span>{country.datos_generales.idioma}</p>
                      <p className="mb-0"><span className="font-semibold">Fiesta Nacional: </span>{country.datos_generales.fiesta_nacional}</p>
                      <p className="mb-0"><span className="font-semibold">Código de Internet: </span>{country.datos_generales.codigo_internet}</p>
                      <p className="mb-0"><span className="font-semibold">Número de Internautas: </span>{country.datos_generales.internautas}</p>

                    </>
                    : <div className="w-full flex flex-col justify-between items-center">
                      Sin datos disponibles :(
                      <p>Por el momento</p>
                    </div>
                }
              </div>
            </div>
            <div className="w-2/3 glass shadow-2xl rounded-lg" style={{ height: "100%" }}>
              <h2 className="text-center text-2xl mt-2">Formación</h2>
            </div>
          </div>

          <div className="w-11/12 h-96 mx-auto mt-6 border rounded-lg shadow-xl">
            <h2 className="text-center text-2xl mt-2" style={{ height: "10%" }}>En los mundiales</h2>
            <div className="flex" style={{ height: "334px" }}>
              <div className="w-3/5 overflow-y-auto pb-8 px-6" style={{ height: "100%" }}>
                Texto
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

              </div>
              <div className="w-2/5 flex justify-center items-center px-4" style={{ height: "100%" }}>
                <div className="object-contain w-full" style={{height: "auto", borderRadius: "15px"}}>
                  <StaticImage src="../../images/test.jpg" alt="Prueba de test" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-11/12 h-96 flex mx-auto mt-6">
            <div className="w-1/2 bg-purple-300" style={{ height: "100%" }}>
              <h2>Grandes Leyendas</h2>
            </div>
            <div className="w-1/2 bg-indigo-900" style={{ height: "100%" }}>
              <h2>Figuras a seguir</h2>
            </div>
          </div>

          <div className="w-11/12 h-96 mt-6 mx-auto bg-cyan-500" >
            <h2>Datos Curiosos</h2>
          </div>

        </div>













      </LayoutPage>
    </>
  )
}

export default Country