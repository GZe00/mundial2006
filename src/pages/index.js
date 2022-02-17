import { Button } from "antd";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Seo from "../components/seo"

const IndexPage = () => {

  const [yearCurrent] = React.useState((new Date()).getFullYear());

  const start = e => {
    console.log(e)
    navigate("/home")
  }

  return (
    <>
      <Seo title={"Bienvenida"} />
      <div className="w-full h-screen flex">
        <div className="w-2/5">
          <StaticImage class="w-full h-screen" src="../images/bg-home.jpg" alt="Estadio Berlín" objectFit="cover" />
        </div>
        <div className="bg_home w-3/5 flex flex-col justify-center items-center" style={{ height: "100%" }}>
          <div className="glass mx-3 md:mx-8 py-10 px-6 md:p-8 lg:p-12 rounded-md">
            <h2 className='text-base text-center md:text-4xl lg:text-7xl lg:text-left' style={{ color: '#000000', textShadow: '1px 1px 2px black' }}>Alemania 2006</h2>
            <h2 className='text-sm text-center md:text-3xl my-4 lg:text-4xl lg:text-left' style={{ color: 'red', textShadow: '1px 1px 2px black' }}>Un vistazo al pasado</h2>
            <h4 className='text-xs text-center md:text-2xl lg:text-xl lg:text-left font-semibold' style={{ color: 'yellow', textShadow: '1px 1px 2px black' }}>Revive y descubre la historia y cultura del país de hace <span className="underline">{yearCurrent - 2006} años</span></h4>
          </div>
          <Button onClick={start} type="primary" style={{ marginTop: "16px", borderWidth: "2px" }}>Comenzar</Button>
        </div>
      </div>
    </>
  )
}

export default IndexPage
