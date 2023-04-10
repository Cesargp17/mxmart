import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkArquitecturaImages } from '@/components/pages/FrameworkArquitecturaImages'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import React from 'react'

const FrameworkArquitecturaPage = () => {
  return (
    <PageLayout title={'Framework - Arquitectura | Mxmart Solutions'}>

        <FrameworkHeader 
            img={'images/framework-page-arquitectura-image.png'} 
            pageNumber={ 3 }
            title={'Arquitectura'}
            subtitle={'Construcción de infraestructuras tecnológicas en alta disponibilidad'}
        />

        <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classNameFramework={'framework-png-arquitectura'}
                />

                    <div className="main-framework-side-b">
                        <div className="framework-side-b-content">
                            <h4>Alta disponibilidad</h4>
                            <p>Análisis, diseño, generación, configuración y puesta a punto de arquitecturas en AWS, diseñadas para alta disponibilidad y elasticidad de los servicios, ofreciendo optimización de los recursos y pudiéndose implementar en diferentes sistemas y plataformas web, como pudiera ser: Moodle, WordPress, Drupal, Laravel, Codelgniter por mencionar algunos, así como desarrollos realizados a la medida.</p>
                            <h5>Servicios más destacados:</h5>

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