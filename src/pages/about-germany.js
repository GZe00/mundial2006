import React from 'react'
import LayoutPage from '../components/LayoutPage'
import Seo from '../components/seo'
import { getAboutGermany } from "../api/content"
import { Spin } from 'antd'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const AboutGermany = () => {

  const [germanyInfo, setGermanyInfo] = React.useState()

  React.useEffect(() => {
    getAboutGermany().then(response => {
      if (response) {
        setGermanyInfo(Object.fromEntries(Object.entries(response).filter(([key, value]) => key !== 'id' && key !== 'media' && key !== 'published_at' && key !== 'created_at' && key !== 'updated_at').sort((a, b) => a[0] > b[0] ? 1 : -1)))
      }
    })
  }, [])

  return (
    <>
      <Seo title="Home" />
      <LayoutPage section={"/about-germany"}>
        {
          germanyInfo ?
            <div className="w-full flex flex-col items-center" style={{ height: "90%" }}>
              <div>
                <img className="w-52 md:w-64 lg:w-96" src={germanyInfo.alemania.bandera.url} />
              </div>
              <div className="">
                <div>
                  <div>
                    {
                      Object.keys(germanyInfo).map((item, key) => {
                        return <ReactMarkdown
                          key={key}
                          children={germanyInfo[item]}
                          linkTarget="_blank"
                          components={
                            {
                              img: ({ node, ...props }) => <img className="w-52 md:w-64 lg:w-96 mx-auto" {...props} />,
                              h1: ({ node, ...props }) => <h1 className="text-4xl" {...props} />,
                              h2: ({ node, ...props }) => <h2 className="" {...props} />,
                              h4: ({ node, ...props }) => <h4 className="text-xl" {...props} />,
                              h5: ({ node, ...props }) => <h4 className="my-12 italic font-semibold underline text-base text-red-500" {...props} />,
                            }}
                        />
                      })
                    }
                  </div>
                </div>

              </div>
            </div>
            :
            <div className="w-full flex items-center justify-center" style={{ height: "90%" }}>
              <Spin size="large" />
            </div>
        }
      </LayoutPage>
    </>
  )
}

export default AboutGermany