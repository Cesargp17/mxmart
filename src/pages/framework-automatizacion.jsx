import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkArquitecturaImages } from '@/components/pages/FrameworkArquitecturaImages'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import { LanguageContext } from '@/context/LanguageContext'
import React, { useContext } from 'react'

const FrameworkAutomatizacionPage = () => {

      //Contexto que trae la logica para el sitio multidioma
      const { frameworkAutomatizacion } = useContext( LanguageContext );

  return (
    <PageLayout 
      title={ frameworkAutomatizacion.metaTitle }
      description={ frameworkAutomatizacion.metaDescription }
    >

        <br /><br />

        <FrameworkHeader
            img={'/images/framework-page-desarrollo-image.png'} 
            pageNumber={ 6 }
            title={ frameworkAutomatizacion.title }
            subtitle={ frameworkAutomatizacion.subtitle }
        />

        <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classNameFramework={'framework-png-automatizacion'}
                />

                  <div className="main-framework-side-b">
                    <div className="framework-side-b-content">
                        <h4>{ frameworkAutomatizacion.title1 }</h4>
                        <p>{ frameworkAutomatizacion.description }</p>
                        <h5>{ frameworkAutomatizacion.title2 }</h5>

                      <div className="fs-center">
                        <div className="framework-servicios">

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-CloudFormation.png'}
                          title={'AWS CloudFormation'}
                        />

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-CDK.png'}
                          title={'Cloud Developer Kit'}
                        />

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-Lambda.png'}
                          title={'AWS Lambda'}
                        />

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-SystemsManager.png'}
                          title={'Dynamo DB'}
                        />

                        </div>

                        <NavegacionBotones
                          anterior={'/framework-desarrollo'}
                          siguiente={'/framework-analitica-datos'}
                          isMobile={ false }
                        />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <NavegacionBotones
                  anterior={'/framework-desarrollo'}
                  siguiente={'/framework-analitica-datos'}
                  isMobile={ true }
                />
        </div>

    </PageLayout>
  )
}

export default FrameworkAutomatizacionPage