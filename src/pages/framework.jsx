import { PageLayout } from '@/components/layout/PageLayout'
import { FrameworkContent } from '@/components/pages/FrameworkContent'
import { FrameworkHeader } from '@/components/pages/FrameworkHeader'
import { NavegacionBotones } from '@/components/pages/NavegacionBotones'
import { LanguageContext } from '@/context/LanguageContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const FrameworkPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { framework } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ framework.metaTitle }
        description={ framework.metaDescription }
    >

        <FrameworkHeader 
            img={'/images/framework-page-image.png'} 
            pageNumber={ 1 }
            title={ framework.title }
            subtitle={ framework.subtitle }
        />

        <div className="all-framework">
            <div className="framework-margin">
                <div className="main-framework">

                <FrameworkContent
                    classNameFramework={'framework-png'}
                />

                    <div className="main-framework-side-b">
                        <div className="framework-side-b-content">
                            <h4>{ framework.marco }</h4>
                            <p> { framework.description } 
                                <br/> <br/> { framework.description2 }
                                <br/><strong>{ framework.masInformacion }</strong></p>
                            <p><strong>{ framework.pilares }</strong></p>
                            <div className="framework-lista">
                                <Link href='/framework-seguridad'>{ framework.pilar1 }</Link>
                                <Link href='./framework-arquitectura.html'>{ framework.pilar2 }</Link>
                                <Link href='./framework-recuperacion-ante-desastres.html'>{ framework.pilar3 }</Link>
                                <Link href='./framework-desarrollo.html'>{ framework.pilar4 }</Link>
                                <Link href='./framework-automatizacion.html'>{ framework.pilar5 }</Link>
                                <Link href='./framework-analitica-datos.html'>{ framework.pilar6 }</Link>
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