import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react'

const InfraestructuraPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { infraestructura } = useContext( LanguageContext );

    //arreglo que funciona para mapear los elementos de tipos de migracion
    const firstItems = [
        { id: 1, title: infraestructura.n1, description: infraestructura.d1, icon: 'fas fa-cloud' },
        { id: 2, title: infraestructura.n2, description: infraestructura.d2, icon: 'fas fa-cloud' },
        { id: 3, title: infraestructura.n3, description: infraestructura.d3, icon: 'fas fa-cloud' },
        { id: 4, title: infraestructura.n4, description: infraestructura.d4, icon: 'fas fa-cloud' },
    ];

  return (
    <PageLayout title={ infraestructura.metaTitle } description={ infraestructura.metaDescription }>

    <HeaderSections
        portada={'/images/Modernización-infraestructura-para-servidores-banner.jpg'}
        titulo={ infraestructura.title }
        titulo2={ infraestructura.title2 }
        texto3={ infraestructura.subtitle }
    />  

    <div className="flex justify-center bg-white">  
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            { infraestructura.description } 
        </p>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                    <h3 className='text-center text-2xl mb-4'>{ infraestructura.title3 }</h3>

                    <ul className='ms-10 mt-6 list-disc p-10'>
                        <li className='text-lg'>{ infraestructura.v1 }</li>
                        <li className='text-lg'>{ infraestructura.v2 }</li>
                        <li className='text-lg'>{ infraestructura.v3 }</li>
                        <li className="text-lg">{ infraestructura.v4 }</li>
                        <li className="text-lg">{ infraestructura.v5 }</li>
                        <li className="text-lg">{ infraestructura.v6 }</li>
                    </ul>
                </div>

                <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
                
                <div className='mx-auto'>
                    <h3 className='text-center text-2xl mb-4'>{ infraestructura.title4 }</h3>

                    <img src="/images/Framework-03_1.png" width='400px' alt="" />
                </div>
            </div>

            <h3 className='text-center text-3xl mb-6 mt-20'>{ infraestructura.title5 }</h3>

            <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 mb-20">
                {
                    firstItems.map( item=> (
                    <div key={ item.id } className='mx-auto flex flex-col items-center'>
                        <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                        <h4 className='mx-auto text-md mt-6 text-center w-[150px] font-bold'>{ item.title }</h4>
                        <p className='mx-auto text-md mt-2 text-center w-[300px] p-6'>{ item.description }</p>
                    </div>
                    ))
                }
            </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default InfraestructuraPage