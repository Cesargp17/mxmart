import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkArquitecturaImages } from '@/components/pages/FrameworkArquitecturaImages'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import React from 'react'

const FrameworkDesarrollo = () => {
  return (
    <PageLayout title={'Framework - Desarrollo | Mxmart Solutions'}>

        <FrameworkHeader
            img={'images/framework-page-arquitectura-image.png'} 
            pageNumber={ 5 }
            title={'Desarrollo'}
            subtitle={'Mejores prácticas para desarrollo y operaciones de TI.'}
        />

          <div class="all-framework">
            <div class="framework-margin">
                <div class="main-framework">

                <FrameworkContent
                    classFramework={'framework-png-desarrollo'}
                />

                  <div class="main-framework-side-b">
                    <div class="framework-side-b-content">
                      <h4>DevOps</h4>
                      <p>Metodologías y mejores practicas para la integración del desarrollo de software y las operaciones de tecnológicas de la empresa. Parte de los objetivos es el agilizar el proceso de construcción del desarrollo de software y proporcionar una entrega continua y de calidad.</p>
                      <h5>Servicios más destacados:</h5>

                      <div class="fs-center">
                        <div class="framework-servicios3">

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