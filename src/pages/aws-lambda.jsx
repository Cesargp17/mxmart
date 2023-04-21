import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link'
import React, { useContext } from 'react'

const LambdaPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { lambda } = useContext( LanguageContext );

    //arreglo que sirve para mapear los elementos de la seccion casos de uso mas comunes
    const items = [
        { id: 1, title: lambda.c1, icon: 'fa fa-expand' },
        { id: 2, title: lambda.c2, icon: 'fa fa-code' },
        { id: 3, title: lambda.c3, icon: 'fas fa-database' },
        { id: 4, title: lambda.c4, icon: 'fas fa-signal' },
    ];

  return (
    <PageLayout 
        title={ lambda.metaTitle }
        description={ lambda.metaDescription }
    >

    <HeaderSections
        portada={'/images/lambda_bg.png'}
        titulo={ lambda.title }
        texto3={ lambda.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

            <div className="flex flex-col lg:flex-row items-center justify-center mx-auto">
                <div className="flex flex-col">
                    <h3 className='font-normal text-3xl ms-10'>{ lambda.acerca }</h3>
                    <p className="p-8 text-gray-900 text-lg">
                    { lambda.description }
                    </p>
                </div>
                <img
                src="/images/Lambda_badge.png"
                className="w-full w-[180px] lg:w-[170px]"
                />
            </div>

            <h3 className='font-normal text-3xl ms-10 mt-20'>{ lambda.title2 }</h3>
            <p className="p-8 text-gray-900 text-lg">
            { lambda.description2 }
            </p>
            <Link className='text-sky-600 ms-8' href={'https://aws.amazon.com/es/lambda/'} target='_blank'>{ lambda.link }</Link>

            <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                <h3 className='text-center text-2xl mb-4'>{ lambda.title3 }</h3>

                <ul className='ms-10 mt-6 list-disc p-10'>
                    <li className='text-lg'>{ lambda.v1 }</li>
                    <li className='text-lg'>{ lambda.v2 }</li>
                    <li className='text-lg'>{ lambda.v3 }</li>
                    <li className="text-lg">{ lambda.v4 }</li>
                    <li className="text-lg">{ lambda.v5 }</li>
                    <li className="text-lg">{ lambda.v6 }</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>{ lambda.title4 }</h3>

                <img src="/images/Framework-03_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20'>{ lambda.title5 }</h3>

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 mb-20">
            {
                items.map( item=> (
                <div key={ item.id } className='mx-auto flex flex-col items-center'>
                    <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                    <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
                </div>
                ))
            }
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20 mb-12'>{ lambda.title6 }</h3>

        <hr className='mt-10 mb-10' />

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full mx-auto">
                    <Link href="/caso-de-estudio-ieu">
                        <img className="rounded-t-lg" src="/images/IEU_case.png" alt=""/>
                    </Link>
                    <div className="p-5">
                        <Link href="/caso-de-estudio-ieu">
                            <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">{ lambda.card1Title }</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{ lambda.card1Description }</p>
                    </div>
                </div>
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full mx-auto">
                <Link href="/caso-de-estudio-erbessd">
                    <img className="rounded-t-lg h-[170px]" src="/images/erbessd-case.png" width='320px'/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-erbessd">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">{ lambda.card2Title }</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{ lambda.card2Description }</p>
                </div>
            </div>
        </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default LambdaPage