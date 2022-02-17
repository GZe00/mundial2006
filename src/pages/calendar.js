import React from 'react'
import Seo from '../components/seo'
import LayoutPage from "../components/LayoutPage"

const calendar = () => {
  return (
    <>
      <Seo title="Calendario" />
      <LayoutPage section={"/calendar"}>
        Calendario
      </LayoutPage>
    </>
  )
}

export default calendar