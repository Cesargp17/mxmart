import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { FrameworkSeguridadImages } from '@/components/pages/FrameworkSeguridadImages'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import React from 'react'

const FrameworkSeguridadPage = () => {
  return (
    <PageLayout title={'Framework - Seguridad | Mxmart Solutions'}>

        <FrameworkHeader 
            img={'images/framework-page-seguridad-image.png'} 
            pageNumber={ 2 }
            title={'Seguridad'}
            subtitle={'Servicios de seguridad y metodologías de trabajo para proyectos tecnológicos'}
        />

        <div class="all-framework">
            <div class="framework-margin">
                <div class="main-framework">

                <FrameworkContent
                    classFramework={'framework-png-seguridad'}
                />

                <div class="main-framework-side-b">
                    <div class="framework-side-b-content">
                        <h4>Arquitecturas y configuraciones de seguridad</h4>
                        <p>Mxmart implementa en sus servicios y soluciones diferentes capas de seguridad, de acuerdo con cada proyecto es posible ir incrementando los niveles de seguridad, esto lo realizamos mediante configuraciones internas de cada tecnología, así como con el apoyo de los diferentes servicios de seguridad que nos ofrece la nube de AWS.</p>
                        <h5>Desliza hacia abajo para poder ver todas las categorías y sus servicios más destacados:</h5>

                        <FrameworkSeguridadImages
                            title={'Gestión de identidad y acceso:'}
                            p1={'AWS'}
                            p2={'IAM'}
                            p3={'Amazon Cognito'}
                            img1={"/images/Icon-AWS-IAM.png"}
                            img2={"/images/Icon-Cognito.png"}
                        />

                        <FrameworkSeguridadImages
                            title={'Detección:'}
                            p1={'AWS'}
                            p2={'Config'}
                            p3={'AWS'}
                            p4={'CloudTrail'}
                            img1={"/images/Icon-AWS-Config.png"}
                            img2={"/images/Icon-CloudTrail.png"}
                        />

                        <FrameworkSeguridadImages
                            title={'Protección de red y aplicación:'}
                            p1={'AWS'}
                            p2={'WAF'}
                            p3={'AWS'}
                            p4={'Shield'}
                            img1={"/images/Icon-WAF.png"}
                            img2={"/images/Icon-Shield.png"}
                        />

                        <FrameworkSeguridadImages
                            title={'Protección de datos:'}
                            p1={'AWS Certificate Manager'}
                            p3={'AWS Secrets Manager'}
                            img1={"/images/Icon-CertificateManager.png"}
                            img2={"/images/Icon-SecretsManager.jpg"}
                        />

                        <FrameworkSeguridadImages
                            title={'Respuesta ante incidencias:'}
                            p1={'AWS Elastic Disaster Recovery'}
                            img1={"/images/Icon-Elastic-Disaster-Recovery.png"}
                        />

                        <FrameworkSeguridadImages
                            title={'Conformidad:'}
                            p1={'AWS Artifact'}
                            img1={"/images/Icon-Artifact.png"}
                        />

                            <NavegacionBotones
                                anterior={'/framework'}
                                siguiente={'/framework-arquitectura'}
                                isMobile={ false }
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <NavegacionBotones
            anterior={'/framework'}
            siguiente={'/framework-arquitectura'}
            isMobile={ true }
        />

    </PageLayout>
  )
}

export default FrameworkSeguridadPage