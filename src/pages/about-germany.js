import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'

const aboutGermany = () => {
  return (
    <>
      <Seo title="Tour Alemán" />
      <LayoutPage section={"/about-germany"}>
        Acerca de alemania
      </LayoutPage>
    </>
  )
}

export default aboutGermany