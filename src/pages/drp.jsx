import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import React, { useContext } from 'react'

const DrpPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { drp } = useContext( LanguageContext );

    //arreglo que sirve para mapear los elementos de beneficios
    const firstItems = [
        { id: 1, title: drp.b1, icon: 'fas fa-walking' },
        { id: 2, title: drp.b2, icon: 'fas fa-shield-alt' },
        { id: 3, title: drp.b3, icon: 'fas fa-balance-scale-left' },
        { id: 4, title: drp.b4, icon: 'fas fa-sign-in-alt' },
        { id: 5, title: drp.b5, icon: 'fas fa-tachometer-alt' },
        { id: 6, title: drp.b6, icon: 'fas fa-user-shield' },
        { id: 7, title: drp.b7, icon: 'fas fa-headset' },
        { id: 8, title: drp.b8, icon: 'fas fa-history' },
    ];

  return (
    <PageLayout title={ drp.metaTitle } description={ drp.metaDescription }>

    <HeaderSections
        portada={'/images/Mxmart_DRP.png'}
        titulo={ drp.title }
        texto3={ drp.subtitle }
    /> 

    <div className="flex justify-center bg-white">  
        <div className="container max-w-6xl mb-20 mt-20">

            <p className='p-4'>
            { drp.description }
            <br /><br />
            { drp.description2 }
            </p>

            <h3 className='text-center text-3xl mb-6 mt-20'>{ drp.title2 }</h3>

            <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 mb-20">
                {
                    firstItems.map( item=> (
                    <div key={ item.id } className='mx-auto flex flex-col items-center'>
                        <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                        <p className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</p>
                    </div>
                    ))
                }
            </div>

            <hr className='mt-10 mb-10' />

            <p className='p-4'>
            { drp.description3 }
            <br /><br />
            { drp.description4 }
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
                <img
                src="/images/CloudEndure.png"
                className="w-full lg:w-[400px]"
                />
                <p className="p-8 text-gray-900 text-lg">
                { drp.description5 } <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/cloudendure-disaster-recovery/' target='_blank'> AWS Elastic Disaster Recovery (AWS DRS) </Link>
                { drp.description6 }
                </p>
            </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default DrpPage