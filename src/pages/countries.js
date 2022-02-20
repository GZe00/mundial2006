import React from 'react'
import LayoutPage from '../components/LayoutPage'
import ListCountries from '../components/ListCountries'
import Seo from '../components/seo'

const countries = () => {
  return (
    <>
    <Seo title="Paises" />
      <LayoutPage section="/countries">
        <div className='flex w-full' style={{height:"100%"}}>
          <div className='w-64 bg-orange-400 h-screen' >
            <p className='mb-0'>Selecciona un pais</p>
            <p>para ver más detalles</p>
            <ListCountries />
          </div>
          <div className='w-full bg-purple-700 h-screen' >
            <div>
              Carrousel posiblemente con todos los paises
            </div>
            <div>

            </div>
          </div>
        </div>
      </LayoutPage>
    </>
  )
}

export default countries