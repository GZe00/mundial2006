import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'

const mexicoEnElMundial = () => {
  return (
    <>
      <Seo title="México+" />
      <LayoutPage section={"/mexico-en-el-mundial"}>
        Mexico en el mundial
      </LayoutPage>
    </>
  )
}

export default mexicoEnElMundial