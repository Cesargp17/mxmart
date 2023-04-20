import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react'

const ModernizacionPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { modernizacion } = useContext( LanguageContext );

    //Arreglo que mapea los items de casos de uso
    const items = [
        { id: 1, title: modernizacion.caso1, icon: 'fa fa-shopping-cart' },
        { id: 2, title: modernizacion.caso2, icon: 'fa fa-window-restore' },
        { id: 3, title: modernizacion.caso3, icon: 'fa fa-mobile' },
        { id: 4, title: modernizacion.caso4, icon: 'fa fa-desktop' },
        { id: 5, title: modernizacion.caso5, icon: 'fa fa-book' },
    ];

  return (
    <PageLayout 
        title={ modernizacion.metaTitle }
        description={ modernizacion.metaDescription }
    >

    <HeaderSections
        portada={'/images/Modernización-infraestructura-para-sistemas.png'}
        titulo={ modernizacion.title }
        titulo2={ modernizacion.title2 }
        texto3={ modernizacion.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            { modernizacion.description }
        </p>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                <h3 className='text-center text-2xl mb-4'>{ modernizacion.title3 }</h3>

                <ul className='ms-10 mt-6 list-disc p-10'>
                    <li className='text-lg'>{ modernizacion.d1 }</li>
                    <li className='text-lg'>{ modernizacion.d2 }</li>
                    <li className='text-lg'>{ modernizacion.d3 }</li>
                    <li className='text-lg'>{ modernizacion.d4 }</li>
                    <li className='text-lg'>{ modernizacion.d5 }</li>
                    <li className='text-lg'>{ modernizacion.d6 }</li>
                    <li className='text-lg'>{ modernizacion.d7 }</li>
                    <li className='text-lg'>{ modernizacion.d8 }</li>
                    <li className='text-lg'>{ modernizacion.d9 }</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>{ modernizacion.title4 }</h3>

                <img src="/images/Framework-03_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20'>{ modernizacion.casos }</h3>
        <hr />

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-5 mt-10">
            {
                items.map( item=> (
                <div key={ item.id } className='mx-auto flex flex-col items-center'>
                    <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                    <h4 className='mx-auto text-lg mt-6'>{ item.title }</h4>
                </div>
                ))
            }
        </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default ModernizacionPage