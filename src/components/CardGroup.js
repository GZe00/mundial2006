import { navigate } from 'gatsby'
import React from 'react'
import config from "../config"

const CardGroup = ({ grupo, paises }) => {

  const goGroup = () => navigate(`/gruop/${grupo.toLowerCase()}`)

  return (
    <>

      <div className='w-60 h-80 rounded-lg cursor-pointer hover:scale-110 ease-in duration-300' onClick={goGroup}>
        <div className='bg-slate-900 w-full' style={{ height: "140px" }}>
        </div>
        <div className='glass shadow-xl rounded-br rounded-bl w-full pb-8' style={{ height: "180px" }}>
          <p className='mb-0 font-semibold'>Grupo: {grupo} </p>
          <div className='flex flex-1 flex-wrap w-full justify-around items-center pt-3 overflow-y-auto' style={{ height: "100%" }}>
            {
              paises.map((pais, key) => {
                return <div key={key} className='items-center mx-3 flex flex-col' style={{ width: "80px", height: "84px" }}>
                  <img className='rounded-full object-cover' style={{ width: '32px', height: "32px" }} src={`${config.server}${pais.bandera.url}`} alt={`Bandera de ${pais.bandera.alternativeText}`} />
                  <p className='mb-0'>{pais.nombre}</p>
                </div>
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default CardGroup