import React from 'react'
import LayoutPage from '../../components/LayoutPage'
import Seo from '../../components/seo'
import { getGroup } from "../../api/content"
import { HiOutlineArrowCircleLeft } from "@react-icons/all-files/hi/HiOutlineArrowCircleLeft"
import { navigate } from 'gatsby'
import { Carousel } from 'antd'
const contentStyle = {
  height: '256px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Group = ({ location }) => {

  const [loc] = React.useState((location.pathname.split("/")[2]))
  const [paises, setPaises] = React.useState()

  React.useEffect(() => {
    getGroup((location.pathname.split("/")[2]).toUpperCase()).then(response => {
      setPaises(response[0].pais)
    })
      .catch(error => {
        console.log(error)
      })
  }, []);


  return (
    <>
      <Seo title="Grupo A" />
      <LayoutPage section={"/groups"}>
        <div className='flex items-center w-max' onClick={() => navigate("/groups")}>
          <HiOutlineArrowCircleLeft className='cursor-pointer text-gray-500' size={20} />
          <p className='cursor-pointer ml-2 mb-0 font-semibold text-gray-500 '>/grupos/grupo/{loc}</p>
        </div>
        <Carousel autoplay style={{ width: "100%", height: "256px" }}>
          
          {
            paises ? paises.map((item, key) => {
              return <div key={key} >
                  <img className='object-contain w-full h-64' src={item.bandera.formats.medium.url} alt={item.bandera.alternativeText}/>
              </div>
            }) : null
          }

        </Carousel>

        <div>

        </div>
      </LayoutPage>

    </>
  )
}

export default Group