import React from 'react'
import LayoutPage from '../../components/LayoutPage'
import Seo from '../../components/seo'

const group = () => {
  return (
    <>
      <Seo title="Grupo A" />
      <LayoutPage section={"/groups"}>
        Grupo A
      </LayoutPage>

    </>
  )
}

export default group