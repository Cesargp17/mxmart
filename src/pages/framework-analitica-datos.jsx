import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { FrameworkSeguridadImages } from '@/components/pages/FrameworkSeguridadImages'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import React from 'react'

const FrameworkAnaliticaPage = () => {
  return (
    <PageLayout title={'Framework - Analítica de datos | Mxmart Solutions'}>

        <FrameworkHeader
            img={'images/framework-page-analitica-datos-image.png'} 
            pageNumber={ 7 }
            title={'Analítica de datos'}
            subtitle={'Generación de información a partir de los datos'}
        />

        <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classNameFramework={'framework-png-analitica'}
                />

                <div className="main-framework-side-b">
                    <div className="framework-side-b-content">
                        <h4>Analítica de datos</h4>
                        <p>Analizar todos sus datos (en tiempo real, históricos, no estructurados, estructurados, cualitativos) para identificar patrones y generar conocimientos para informar y, en algunos casos, automatizar decisiones, conectando la inteligencia y la acción.</p>
                        <h5>Desliza hacia abajo para poder ver todas las categorías y sus servicios más destacados:</h5>

                        <FrameworkSeguridadImages
                            title={'Análisis:'}
                            p1={'Amazon'}
                            p2={'Athena'}
                            p3={'Amazon Redshift'}
                            p5={'Amazon QuickSight'}
                            img1={'/images/Icon-Athena.png'}
                            img2={'/images/Icon-Amazon-Redshift.png'}
                            img3={'/images/Icon-Quicksight.png'}
                        />

                        <FrameworkSeguridadImages
                            title={'Migración de datos:'}
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
                            title={'Lago de datos:'}
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
                            title={'Análisis predictivo y aprendizaje automático:'}
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