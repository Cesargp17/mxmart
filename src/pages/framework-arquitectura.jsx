import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkArquitecturaImages } from '@/components/pages/FrameworkArquitecturaImages'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import { LanguageContext } from '@/context/LanguageContext'
import React, { useContext } from 'react'

const FrameworkArquitecturaPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { frameworkArquitectura } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ frameworkArquitectura.metaTitle }
        description={ frameworkArquitectura.metaDescription }
    >

        <FrameworkHeader 
            img={'/images/framework-page-arquitectura-image.png'} 
            pageNumber={ 3 }
            title={ frameworkArquitectura.title }
            subtitle={ frameworkArquitectura.subtitle }
        />

        <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classNameFramework={'framework-png-arquitectura'}
                />

                    <div className="main-framework-side-b">
                        <div className="framework-side-b-content">
                            <h4>{ frameworkArquitectura.title1 }</h4>
                            <p>{ frameworkArquitectura.description }</p>
                            <h5>{ frameworkArquitectura.title2 }</h5>

                            <div className="fs-center">
                                <div className="framework-servicios3">

                                <FrameworkArquitecturaImages
                                    img={'/images/Icon-cloud-front.png'}
                                    title={'Amazon CloudFront'}
                                />

                                <FrameworkArquitecturaImages
                                    img={'/images/Icon-ELB.png'}
                                    title={'Elastic Load Balancing'}
                                />

                                <FrameworkArquitecturaImages
                                    img={'/images/Icon-ElastiCache.png'}
                                    title={'Amazon ElastiCache'}
                                />

                                <FrameworkArquitecturaImages
                                    img={'/images/Icon-Elastic-file-sistem.png'}
                                    title={'Amazon Elastic File System'}
                                />

                                <FrameworkArquitecturaImages
                                    img={'/images/Icon-CloudWatch.png'}
                                    title={'Amazon CloudWatch'}
                                />

                                <FrameworkArquitecturaImages
                                    img={'/images/Icon-S3.png'}
                                    title={'Amazon S3'}
                                />

                                <NavegacionBotones
                                    anterior={'/framework-seguridad'}
                                    siguiente={'/framework-recuperacion-ante-desastres'}
                                    isMobile={ false }
                                />

                                </div>
                            </div>

                                <NavegacionBotones
                                    anterior={'/framework-seguridad'}
                                    siguiente={'/framework-recuperacion-ante-desastres'}
                                    isMobile={ true }
                                />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </PageLayout>
  )
}

export default FrameworkArquitecturaPage