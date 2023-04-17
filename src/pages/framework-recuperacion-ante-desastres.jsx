import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkArquitecturaImages } from '@/components/pages/FrameworkArquitecturaImages'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import { LanguageContext } from '@/context/LanguageContext'
import React, { useContext } from 'react'

const FrameworkRecuperacionPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { frameworkDisasterRecovery } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ frameworkDisasterRecovery.metaTitle }
        description={ frameworkDisasterRecovery.metaDescription }
    >

        <FrameworkHeader 
            img={'/images/framework-page-arquitectura-image.png'} 
            pageNumber={ 4 }
            title={ frameworkDisasterRecovery.title }
            subtitle={ frameworkDisasterRecovery.subtitle }
        />

        <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classNameFramework={'framework-png-recuperacion'}
                />
                
                <div className="main-framework-side-b">
                    <div className="framework-side-b-content">
                            <h4>{ frameworkDisasterRecovery.title1 }</h4>
                            <p>{ frameworkDisasterRecovery.description }</p>
                            <h5>{ frameworkDisasterRecovery.title2 }</h5>

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