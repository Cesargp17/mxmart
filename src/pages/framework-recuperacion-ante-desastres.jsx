import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkArquitecturaImages } from '@/components/pages/FrameworkArquitecturaImages'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import React from 'react'

const FrameworkRecuperacionPage = () => {
  return (
    <PageLayout title={'Framework - Recuperación ante desastres | Mxmart Solutions'}>

        <FrameworkHeader 
            img={'images/framework-page-arquitectura-image.png'} 
            pageNumber={ 4 }
            title={'Recuperación ante desastres'}
            subtitle={'Continuidad y operación del negocio'}
        />

        <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classFramework={'framework-png-recuperacion'}
                />
                
                <div className="main-framework-side-b">
                    <div className="framework-side-b-content">
                            <h4>Recuperación ante desastres (On premise/Cloud)</h4>
                            <p>Generación de una infraestructura tecnológica en la nube de AWS para dar continuidad a la operación y los procesos tecnológicos de la empresa, realizando una replicación de los principales sistemas e información del cliente, garantizando así una continuidad en la operación del negocio en caso de alguna contingencia.
                                Existen diferentes opciones de recuperación y tiempos de respuesta, mucho dependiendo del RTO y RPO establecido por la institución.</p>
                            <h5>Servicios más destacados:</h5>

                            <div className="fs-center">
                                <div className="framework-servicios2">

                                <FrameworkArquitecturaImages
                                    img={'/images/Icon-Elastic-Disaster-Recovery.png'}
                                    title={'Elastic Disaster Recovery'}
                                />

                                <FrameworkArquitecturaImages
                                    img={'/images/Icon-CloudEndure.png'}
                                    title={'AWS CloudEndure Migration'}
                                />  

                                <NavegacionBotones
                                    anterior={'/framework-arquitectura'}
                                    siguiente={'/framework-desarrollo'}
                                    isMobile={ false }
                                />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavegacionBotones
                anterior={'/framework-arquitectura'}
                siguiente={'/framework-desarrollo'}
                isMobile={ true }
            />
        </div>

    </PageLayout>
  )
}

export default FrameworkRecuperacionPage