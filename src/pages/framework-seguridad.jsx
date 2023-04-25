import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { FrameworkSeguridadImages } from '@/components/pages/FrameworkSeguridadImages'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import { LanguageContext } from '@/context/LanguageContext'
import React, { useContext } from 'react'

const FrameworkSeguridadPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { frameworkSeguridad } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ frameworkSeguridad.metaTitle }
        description={ frameworkSeguridad.metaDescription }
    >
        <br /><br />

        <FrameworkHeader 
            img={'/images/framework-page-seguridad-image.png'} 
            pageNumber={ 2 }
            title={ frameworkSeguridad.title }
            subtitle={ frameworkSeguridad.subtitle }
        />

        <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classNameFramework={'framework-png-seguridad'}
                />

                <div className="main-framework-side-b">
                    <div className="framework-side-b-content">
                        <h4>{ frameworkSeguridad.title1 }</h4>
                        <p>{ frameworkSeguridad.description }</p>
                        <h5>{ frameworkSeguridad.title2 }</h5>

                        <FrameworkSeguridadImages
                            title={ frameworkSeguridad.cat1 }
                            p1={'AWS'}
                            p2={'IAM'}
                            p3={'Amazon Cognito'}
                            img1={"/images/Icon-AWS-IAM.png"}
                            img2={"/images/Icon-Cognito.png"}
                        />

                        <FrameworkSeguridadImages
                            title={ frameworkSeguridad.cat2 }
                            p1={'AWS'}
                            p2={'Config'}
                            p3={'AWS'}
                            p4={'CloudTrail'}
                            img1={"/images/Icon-AWS-Config.png"}
                            img2={"/images/Icon-CloudTrail.png"}
                        />

                        <FrameworkSeguridadImages
                            title={ frameworkSeguridad.cat3 }
                            p1={'AWS'}
                            p2={'WAF'}
                            p3={'AWS'}
                            p4={'Shield'}
                            img1={"/images/Icon-WAF.png"}
                            img2={"/images/Icon-Shield.png"}
                        />

                        <FrameworkSeguridadImages
                            title={ frameworkSeguridad.cat4 }
                            p1={'AWS Certificate Manager'}
                            p3={'AWS Secrets Manager'}
                            img1={"/images/Icon-CertificateManager.png"}
                            img2={"/images/Icon-SecretsManager.jpg"}
                        />

                        <FrameworkSeguridadImages
                            title={ frameworkSeguridad.cat5 }
                            p1={'AWS Elastic Disaster Recovery'}
                            img1={"/images/Icon-Elastic-Disaster-Recovery.png"}
                        />

                        <FrameworkSeguridadImages
                            title={ frameworkSeguridad.cat6 }
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