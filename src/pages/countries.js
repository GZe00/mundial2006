import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'

const countries = () => {
  return (
    <>
    <Seo title="Paises" />
      <LayoutPage section="/countries">
        Los paises tarjetas
      </LayoutPage>
    </>
  )
}

export default countries