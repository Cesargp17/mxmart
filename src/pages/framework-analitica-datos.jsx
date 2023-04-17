import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { FrameworkSeguridadImages } from '@/components/pages/FrameworkSeguridadImages'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import { LanguageContext } from '@/context/LanguageContext'
import React, { useContext } from 'react'

const FrameworkAnaliticaPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { frameworkAnalitica } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ frameworkAnalitica.metaTitle }
        description={ frameworkAnalitica.metaDescription }
    >

        <FrameworkHeader
            img={'/images/framework-page-analitica-datos-image.png'} 
            pageNumber={ 7 }
            title={ frameworkAnalitica.title }
            subtitle={ frameworkAnalitica.subtitle }
        />

        <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classNameFramework={'framework-png-analitica'}
                />

                <div className="main-framework-side-b">
                    <div className="framework-side-b-content">
                        <h4>{ frameworkAnalitica.title1 }</h4>
                        <p>{ frameworkAnalitica.description }</p>
                        <h5>{ frameworkAnalitica.title2 }</h5>

                        <FrameworkSeguridadImages
                            title={ frameworkAnalitica.cat1 }
                            p1={'Amazon'}
                            p2={'Athena'}
                            p3={'Amazon Redshift'}
                            p5={'Amazon QuickSight'}
                            img1={'/images/Icon-Athena.png'}
                            img2={'/images/Icon-Amazon-Redshift.png'}
                            img3={'/images/Icon-Quicksight.png'}
                        />

                        <FrameworkSeguridadImages
                            title={ frameworkAnalitica.cat2 }
                            p1={'AWS'}
                            p2={'Glue'}
                            p3={'Amazon'}
                            p4={'Kinesis'}
                            p5={'AWS Database Migration Service'}
                            img1={'/images/Icon-AWS-GLUE.png'}
                            img2={'/images/Icon-Kinesis.png'}
                            img3={'/images/Icon-Database-Migration-Service.png'}
                        />

                        <FrameworkSeguridadImages
                            title={ frameworkAnalitica.cat3 }
                            p1={'Amazon'}
                            p2={'S3'}
                            p3={'AWS Lake Formation'}
                            p5={'AWS'}
                            p6={'Backup'}
                            img1={'/images/Icon-S3.png'}
                            img2={'/images/Icon-LakeFormation.png'}
                            img3={'/images/Icon-AWS-Backup.png'}
                        />

                        <FrameworkSeguridadImages
                            title={ frameworkAnalitica.cat4 }
                            p1={'AMI de aprendizaje profundo (EC2)'}
                            p3={'Amazon SageMaker'}
                            img1={'/images/Icon-AMI-Aprendizaje-Profundo.png'}
                            img2={'/images/Icon-SageMaker.png'}
                        />

                        <NavegacionBotones
                          anterior={'/framework-desarrollo'}
                          siguiente={'/framework'}
                          isMobile={ false }
                        />

                        </div>
                    </div>
                </div>
            </div>
                <NavegacionBotones
                    anterior={'/framework-desarrollo'}
                    siguiente={'/framework'}
                    isMobile={ true }
                />
        </div>

    </PageLayout>
  )
}

export default FrameworkAnaliticaPage