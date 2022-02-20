import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'
import { getCountries } from "../api/content"
import { List, Avatar } from 'antd';
import { navigate } from 'gatsby';

const Countries = () => {

  const [listCountries, setListCountries] = React.useState()

  React.useEffect(() => {
    getCountries().then(response => {
      console.log(response)
      setListCountries(response.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1))
      response.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
    })
  }, []);

  return (
    <>
      <Seo title="Paises" />
      <LayoutPage section="/countries">
        <div className='flex flex-col md:flex-row w-full' style={{ height: "100%" }}>
          <div className='w-64 md:mr-3 border h-screen overflow-y-auto md:pb-6 overflow-x-hidden' >
            <p className='mb-0'>Selecciona un pais</p>
            <p>para ver más detalles</p>

            <List
              loading={listCountries ? false : true}
              itemLayout="horizontal"
              dataSource={listCountries}
              style={{ width: "128px", margin: "0 auto 0 auto" }}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                  
                    className="hover:scale-110 ease-in duration-300 flex justify-center items-center"
                    avatar={<Avatar className='cursor-pointer' src={item.bandera.formats.thumbnail.url} alt={item.bandera.alternativeText} />}
                    title={<p onClick={() => navigate(`/country/${item.nombre}`)} className='cursor-pointer hover:text-blue-600 mb-0'>{item.nombre}</p>}
                  />
                </List.Item>
              )}
            />



          </div>

          <div className='w-full md:ml-2 border h-screen' >
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

export default Countries