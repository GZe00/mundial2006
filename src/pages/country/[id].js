import React from 'react'
import LayoutPage from '../../components/LayoutPage'
import Seo from '../../components/seo'
import { getCountry } from "../../api/content"
import { HiOutlineArrowCircleLeft } from '@react-icons/all-files/hi/HiOutlineArrowCircleLeft'
import { navigate } from 'gatsby'

const Country = ({ location }) => {
  const [loc, setLoc] = React.useState()
  const [country, setCountry] = React.useState()

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
          <p className='cursor-pointer ml-2 mb-0 font-semibold text-gray-500 '>/Paises/Pais/{loc ?? null}</p>
        </div>
        {
          country ?
            <div className='w-full' style={{ height: "100%" }}>
              <div className='mx-auto' style={{ width: "480px", height: "256px" }}>
                <img className='object-cover' src={`${country.bandera.formats.medium.url}`} alt={`Bandera de: ${country.bandera.alternativeText}`} />
              </div>
            </div>
            : null
        }
      </LayoutPage>
    </>
  )
}

export default Country