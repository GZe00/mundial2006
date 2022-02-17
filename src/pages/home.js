import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'

const homePage = () => {
    return (
        <>
            <Seo title="Home" />
            <LayoutPage section={"/home"}>
                Aqui pertenece el home
            </LayoutPage>
        </>
    )
}

export default homePage