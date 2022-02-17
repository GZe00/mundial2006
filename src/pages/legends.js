import React from 'react'
import Seo from '../components/seo'
import LayoutPage from "../components/LayoutPage"

const legends = () => {
  return (
    <>
      <Seo title="Leyendas" />
      <LayoutPage section={"/legends"}>
        Aqui pertenece el home
      </LayoutPage>
    </>
  )
}

export default legends