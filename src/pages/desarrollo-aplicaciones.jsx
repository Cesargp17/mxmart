import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react'

const DesarrolloAppsPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { aplicaciones } = useContext( LanguageContext );

    //Arreglo que mapea los items de casos de uso
    const items = [
        { id: 1, title: aplicaciones.caso1, icon: 'fa fa-cloud' },
        { id: 2, title: aplicaciones.caso2, icon: 'fa fa-code' },
    ];

  return (
    <PageLayout 
        title={ aplicaciones.metaTitle }
        description={ aplicaciones.metaDescription }
    >

    <HeaderSections
        portada={'/images/Desarrollo-aplicaciones.png'}
        titulo={ aplicaciones.title }
        titulo2={ aplicaciones.title2 }
        texto3={ aplicaciones.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            { aplicaciones.description }
        </p>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                <h3 className='text-center text-2xl mb-4'>{ aplicaciones.title3 }</h3>

                <ul className='ms-10 mt-6 list-disc p-10 lg:mb-40'>
                    <li className='text-lg'>{ aplicaciones.d1 }</li>
                    <li className='text-lg'>{ aplicaciones.d2 }</li>
                    <li className='text-lg'>{ aplicaciones.d3 }</li>
                    <li className='text-lg'>{ aplicaciones.d4 }</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>{ aplicaciones.title4 }</h3>

                <img src="/images/Framework-01_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20'>{ aplicaciones.casos }</h3>

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-10">
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

export default DesarrolloAppsPage