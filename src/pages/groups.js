import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'
import { getGroups } from '../api/content'
import CardGroup from "../components/CardGroup"



const Groups = () => {



  const [grupos, setGrupos] = React.useState()

  React.useEffect(() => {
    getGroups().then(response => {
      if (response) setGrupos(response.sort((a,b) => (a.grupo > b.grupo) ? 1 : -1))
    })
  }, []);




  return (
    <>
      <Seo title="Grupos" />
      <LayoutPage section={"/groups"}>
        
        Grupos

        <div className='flex w-full flex-wrap justify-center'>
          {
            grupos ?
              grupos.map((group, key) => {
                return <div key={key} className='flex mx-12 my-6'>
                  <CardGroup
                    grupo={group.grupo}
                    paises={group.pais}
                  />
                </div>
              })
              : null
          }
        </div>

      </LayoutPage>

    </>
  )
}

export default Groups