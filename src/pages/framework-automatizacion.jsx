import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkArquitecturaImages } from '@/components/pages/FrameworkArquitecturaImages'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import React from 'react'

const FrameworkAutomatizacionPage = () => {
  return (
    <PageLayout title={'Framework - Automatización | Mxmart Solutions'}>

        <FrameworkHeader
            img={'images/framework-page-desarrollo-image.png'} 
            pageNumber={ 6 }
            title={'Automatización'}
            subtitle={'Infraestructura como código'}
        />

        <div class="all-framework">
            <div class="framework-margin">
                <div class="main-framework">

                <FrameworkContent
                    classFramework={'framework-png-automatizacion'}
                />

                  <div class="main-framework-side-b">
                    <div class="framework-side-b-content">
                        <h4>Infraestructura como código</h4>
                        <p>Generación de stacks de desarrollo para la construcción de infraestructura tecnológica en la nube basados en código de programación, entre las principales ventajas se encuentra la generación de estructuras de centros de datos informáticos en tan sólo minutos, reduciendo considerablemente los tiempos y costos de ejecución y configuración de múltiples servicios y herramientas tecnológicas.</p>
                        <h5>Servicios más importantes:</h5>

                      <div class="fs-center">
                        <div class="framework-servicios">

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