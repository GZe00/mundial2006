import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'

const history = () => {
  return (
    <>
    <Seo title="Historia" />
    <LayoutPage section={"/history"}>
        Historia
    </LayoutPage>
</>
  )
}

export default history