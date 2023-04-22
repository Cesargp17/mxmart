import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link'
import React, { useContext } from 'react'

const AuroraPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { aurora } = useContext( LanguageContext );

    //arreglo que mapea los items de casos de uso
    const firstItems = [
        { id: 1, title: aurora.c1, icon: 'fas fa-database' },
        { id: 2, title: aurora.c2, icon: 'fa fa-refresh' },
        { id: 3, title: aurora.c3, icon: 'fas fa-laptop' },
        { id: 4, title: aurora.c4, icon: 'fas fa-mobile' },
    ];
    
    //arreglo que mapea los items de casos de uso
    const secondItems = [
        { id: 1, title: aurora.c5, icon: 'fas fa-coins' },
        { id: 2, title: aurora.c6, icon: 'far fa-window-restore' },
        { id: 3, title: aurora.c7, icon: 'fa fa-files-o' },
    ];

  return (
    <PageLayout 
        title={ aurora.metaTitle }
        description={ aurora.metaDescription }
    >

    <HeaderSections
        portada={'/images/aurora_bg.png'}
        titulo={ aurora.title }
        texto3={ aurora.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto">
                <div className="flex flex-col">
                    <h3 className='font-normal text-3xl ms-10'>{ aurora.title1 }</h3>
                    <p className="p-8 text-gray-900 text-lg">
                    { aurora.description }
                    </p>
                </div>
                <img
                src="/images/Base_Datos.png"
                className="w-full w-[270px] lg:w-[300px]"
                />
            </div>

            <h3 className='font-normal text-3xl ms-10 mt-20'>{ aurora.title2 }</h3>
            <p className="p-8 text-gray-900 text-lg">
            { aurora.description2 }
            <br /><br />
            { aurora.description3 }
            </p>
            <Link className='text-sky-600 ms-8' href={'https://aws.amazon.com/es/rds/aurora/'} target='_blank'>{ aurora.link }</Link>

            <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
                <div className='border-r border-solid border-gray pl-4'>
                    <h3 className='text-center text-2xl mb-4'>{ aurora.title3 }</h3>

                    <ul className='ms-10 mt-6 list-disc p-10'>
                        <li className='text-lg'>{ aurora.v1 }</li>
                        <li className='text-lg'>{ aurora.v2 }</li>
                        <li className='text-lg'>{ aurora.v3 }</li>
                        <li className="text-lg">{ aurora.v4 }</li>
                        <li className="text-lg">{ aurora.v5 }</li>
                        <li className="text-lg">{ aurora.v6 }</li>
                        <li className="text-lg">{ aurora.v7 }</li>
                        <li className="text-lg">{ aurora.v8 }</li>
                    </ul>
                </div>

                <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
                
                <div className='mx-auto'>
                    <h3 className='text-center text-2xl mb-4'>{ aurora.framework }</h3>

                    <img src="/images/Framework-03_1.png" width='400px' alt="" />
                </div>
            </div>

            <h3 className='text-center text-3xl mb-6 mt-20'>{ aurora.title4 }</h3>

            <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 mb-20">
                {
                    firstItems.map( item=> (
                    <div key={ item.id } className='mx-auto flex flex-col items-center'>
                        <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                        <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
                    </div>
                    ))
                }
            </div>

            <h3 className='text-center text-3xl mb-6 mt-20'>{ aurora.title5 }</h3>

            <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4 mb-20">
                {
                    secondItems.map( item=> (
                    <div key={ item.id } className='mx-auto flex flex-col items-center'>
                        <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                        <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
                    </div>
                    ))
                }
            </div>

            <hr className='mt-10 mb-10' />

            <h3 className='text-center text-3xl mb-6 mt-10 mb-12'>{ aurora.title6 }</h3>

            <div className="flex justify-center items-center">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full">
                    <Link href="/caso-de-estudio-univa">
                        <img className="rounded-t-lg" src="/images/sector_educativo_cover.jpg" alt=""/>
                    </Link>
                    <div className="p-5">
                        <Link href="/caso-de-estudio-univa">
                            <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">{ aurora.cardTitle }</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{ aurora.cardDescription }</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default AuroraPage