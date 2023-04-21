import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const EscritoriosVirtualesPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { escritoriosVirtuales } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ escritoriosVirtuales.metaTitle }
        description={ escritoriosVirtuales.metaDescription }
    >

    <HeaderSections
        portada={'/images/Mxmart_Escritorios.png'}
        titulo={ escritoriosVirtuales.title }
        texto3={ escritoriosVirtuales.subtitle }
    />

    <div className="bg-white flex justify-center">
        <div className="container max-w-6xl">

        <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={'https://www.youtube.com/embed/KJHohMpFZc4'}
                        allowFullScreen
                        className='w-96 h-56 lg:w-[500px] lg:h-[300px]'
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl ms-8">{ escritoriosVirtuales.title2 }</h3>
                    <p className="p-8 text-gray-900 text-[17px]">
                    { escritoriosVirtuales.description }
                    <br /><br />
                    { escritoriosVirtuales.description2 }
                    </p>
                </div>
            </div>

            <h3 className="font-normal text-3xl ms-8 text-center mb-20 mt-20">{ escritoriosVirtuales.title3 }</h3>

            <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl ms-8">{ escritoriosVirtuales.title4 }</h3>
                    <p className="p-8 text-gray-900 text-[17px]">
                    { escritoriosVirtuales.description3 }
                    <br /><br />
                    { escritoriosVirtuales.description4 }
                    </p>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={'https://www.youtube.com/embed/X_gwZxEgeOg'}
                        allowFullScreen
                        className='w-96 h-56 lg:w-[500px] lg:h-[300px]'
                    />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                <h3 className='text-center text-2xl mb-4'>{ escritoriosVirtuales.title5 }</h3>

                <ul className='ms-10 mt-6 list-disc p-10'>
                    <li className='text-lg'>{ escritoriosVirtuales.v1 }</li>
                    <li className='text-lg'>{ escritoriosVirtuales.v2 }</li>
                    <li className='text-lg'>{ escritoriosVirtuales.v3 }</li>
                    <li className='text-lg'>{ escritoriosVirtuales.v4 }</li>
                    <li className='text-lg'>{ escritoriosVirtuales.v5 }</li>
                    <li className='text-lg'>{ escritoriosVirtuales.v6 }</li>
                    <li className='text-lg'>{ escritoriosVirtuales.v7 }</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>{ escritoriosVirtuales.title6 }</h3>

                <img src="/images/Framework-02_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20 mb-12'>{ escritoriosVirtuales.title7 }</h3>

        <div className="flex justify-center items-center mb-20">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full">
                <Link href="/caso-de-estudio-finec">
                    <img className="rounded-t-lg h-[170px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/White_paper.jpg/640px-White_paper.jpg" width='320px'/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-finec">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">{ escritoriosVirtuales.casoTitulo }</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{ escritoriosVirtuales.casoDescription }</p>
                </div>
            </div>
        </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default EscritoriosVirtualesPage