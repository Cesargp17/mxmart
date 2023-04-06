import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import Link from 'next/link'
import React from 'react'

const FrameworkPage = () => {
  return (
    <PageLayout title={'Framework | Mxmart Solutions'}>

        <FrameworkHeader 
            img={'/images/framework-page-image.png'} 
            pageNumber={ 1 }
            title={'Framework de mxmart'}
            subtitle={'Pilares fundamentales para proyectos tecnológicos'}
        />

        <div class="all-framework">
            <div class="framework-margin">
                <div class="main-framework">

                <FrameworkContent
                    classFramework={'framework-png'}
                />

                    <div class="main-framework-side-b">
                        <div class="framework-side-b-content">
                            <h4>Marco general</h4>
                            <p>Mxmart ha desarrollado un framework propio que le permite trabajar en múltiples proyectos tecnológicos con las mejores prácticas y metodologías, entregando así soluciones seguras, eficientes y optimizadas para su funcionamiento.
                                <br/> <br/> Nuestro framework está conformado por seis pilares fundamentales, cada uno de ellos proporciona diferentes herramientas para asegurar un óptimo funcionamiento y solución en base a cada proyecto.
                                <br/><strong>De click en cada uno de ellos para conocer más información:</strong></p>
                            <p><strong>Pilares:</strong></p>
                            <div class="framework-lista">
                                <Link href='/framework-seguridad'>Seguridad, </Link>
                                <Link href='./framework-arquitectura.html'>Arquitectura, </Link>
                                <Link href='./framework-recuperacion-ante-desastres.html'>Recuperación ante desastres, </Link>
                                <Link href='./framework-desarrollo.html'>Desarrollo, </Link>
                                <Link href='./framework-automatizacion.html'>Automatización, </Link>
                                <Link href='./framework-analitica-datos.html'>Analítica de datos</Link>
                            </div>

                            <NavegacionBotones
                                anterior={'/framework-analitica-datos'}
                                siguiente={'/framework-seguridad'}
                                isMobile={ false }
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <NavegacionBotones 
            anterior={'/framework-analitica-datos'}
            siguiente={'/framework-seguridad'}
            isMobile={ true }
        />

    </PageLayout>
  )
}

export default FrameworkPage