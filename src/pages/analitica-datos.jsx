import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react'

const AnaliticaDatosPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { analiticaDatos } = useContext( LanguageContext );

    //arreglo que sirve para mapear los elementos de sistema de gestion de aprendizaje
    const items = [
        { id: 1, title: analiticaDatos.v1, icon: 'fa fa-database' },
        { id: 2, title: analiticaDatos.v2, icon: 'fa fa-star' },
        { id: 3, title: analiticaDatos.v3, icon: 'fa fa-file-text-o' },
        { id: 4, title: analiticaDatos.v4, icon: 'fa fa-th' },
        { id: 5, title: analiticaDatos.v5, icon: 'fa fa-dollar' },
    ];

  return (
    <PageLayout 
        title={ analiticaDatos.metaTitle }
        description={ analiticaDatos.metaDescription }
    >

    <HeaderSections
        portada={'/images/Assessments.png'}
        titulo={ analiticaDatos.title }
        texto3={ analiticaDatos.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-10">

            <p className='p-4'>
                { analiticaDatos.description } 
            </p>

            <h3 className='text-center text-3xl mb-6 mt-20'>{ analiticaDatos.title2 }</h3>

            <hr className='mb-10 mt-10' />

            <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-5 mt-10 gap-4 mb-20">
                {
                    items.map( item=> (
                    <div key={ item.id } className='mx-auto flex flex-col items-center'>
                        <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                        <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
                    </div>
                    ))
                }
            </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default AnaliticaDatosPage