import React from 'react'
import LayoutPage from '../../components/LayoutPage'
import Seo from '../../components/seo'
import { getCountry } from "../../api/content"
import { HiOutlineArrowCircleLeft } from '@react-icons/all-files/hi/HiOutlineArrowCircleLeft'
import { navigate } from 'gatsby'

const Country = ({ location }) => {
  console.log(location)

  const [loc, setLoc] = React.useState()
  const [country, setCountry] = React.useState()

  React.useEffect(() => {
    getCountry(location.pathname.split("/")[2]).then(response => {
      setLoc(response.nombre)
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
        Hola
      </LayoutPage>
    </>
  )
}

export default Country