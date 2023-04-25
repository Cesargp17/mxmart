import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkArquitecturaImages } from '@/components/pages/FrameworkArquitecturaImages'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import { LanguageContext } from '@/context/LanguageContext'
import React, { useContext } from 'react'

const FrameworkDesarrollo = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { frameworkDevelopment } = useContext( LanguageContext );

  return (
    <PageLayout 
      title={ frameworkDevelopment.metaTitle }
      description={ frameworkDevelopment.metaDescription }
    >

        <br /><br />

        <FrameworkHeader
            img={'/images/framework-page-arquitectura-image.png'} 
            pageNumber={ 5 }
            title={ frameworkDevelopment.title }
            subtitle={ frameworkDevelopment.subtitle }
        />

          <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classNameFramework={'framework-png-desarrollo'}
                />

                  <div className="main-framework-side-b">
                    <div className="framework-side-b-content">
                      <h4>{ frameworkDevelopment.title1 }</h4>
                      <p>{ frameworkDevelopment.description }</p>
                      <h5>{ frameworkDevelopment.title2 }</h5>

                      <div className="fs-center">
                        <div className="framework-servicios3">

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-Amplify.png'}
                          title={'AWS Amplify'}
                        />

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-Lambda.png'}
                          title={'AWS Lambda'}
                        />

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-APIGateway.png'}
                          title={'Amazon API Gateway'}
                        />

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-Aurora.png'}
                          title={'Amazon Aurora'}
                        />

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-CodeCommit.png'}
                          title={'AWS CodeCommit'}
                        />

                        <FrameworkArquitecturaImages
                          img={'/images/Icon-CDK.png'}
                          title={'AWS CDK'}
                        />

                        <NavegacionBotones
                          anterior={'/framework-recuperacion-ante-desastres'}
                          siguiente={'/framework-automatizacion'}
                          isMobile={ false }
                        />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <NavegacionBotones
                  anterior={'/framework-recuperacion-ante-desastres'}
                  siguiente={'/framework-automatizacion'}
                  isMobile={ true }
                />
            </div>

    </PageLayout>
  )
}

export default FrameworkDesarrollo