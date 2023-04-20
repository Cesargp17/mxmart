import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import React, { useContext } from 'react'

const ECommercePage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { eCommerce } = useContext( LanguageContext );

    //arreglo para mapear los items de soluciones
    const soluciones = [
        { id: 1, titulo: eCommerce.s1Title, description: eCommerce.s1Parrafo },
        { id: 2, titulo: eCommerce.s2Title, description: eCommerce.s2Parrafo },
        { id: 3, titulo: eCommerce.s3Title, description: eCommerce.s3Parrafo },
        { id: 4, titulo: eCommerce.s4Title, description: eCommerce.s4Parrafo },
        { id: 5, titulo: eCommerce.s5Title, description: eCommerce.s5Parrafo },
        { id: 6, titulo: eCommerce.s6Title, description: eCommerce.s6Parrafo },
        { id: 7, titulo: eCommerce.s7Title, description: eCommerce.s7Parrafo },
        { id: 8, titulo: eCommerce.s8Title, description: eCommerce.s8Parrafo },
    ];
    
    //arreglo para mapear los items de servicios
    const items = [
        { id: 1, title: eCommerce.s1, icon: 'fas fa-laptop-code' },
        { id: 2, title: eCommerce.s2, icon: 'fas fa-cogs' },
        { id: 3, title: eCommerce.s3, icon: 'fas fa-paint-brush' },
        { id: 4, title: eCommerce.s4, icon: 'fas fa-user-cog' },
        { id: 5, title: eCommerce.s5, icon: 'fas fa-code' },
        { id: 6, title: eCommerce.s6, icon: 'fas fa-external-link-alt' },
        { id: 7, title: eCommerce.s7, icon: 'fas fa-exchange-alt' },
        { id: 8, title: eCommerce.s8, icon: 'fas fa-shopping-cart' },
        { id: 9, title: eCommerce.s9, icon: 'fas fa-dollar-sign' },
    ];

  return (
    <PageLayout 
        title={ eCommerce.metaTitle }
        description={ eCommerce.metaDescription }
    >

    <HeaderSections
        portada={'/images/Mxmart_Empresarial_Ecommerce.png'}
        titulo={ eCommerce.title }
        texto3={ eCommerce.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20">

        <h2 className='text-3xl mb-6 mt-20 ms-4'>{ eCommerce.title1 }</h2>
        <p className='p-4'>
            { eCommerce.p1 }
        </p>

        <h2 className='text-3xl mb-6 mt-20 ms-4'>{ eCommerce.title2 }</h2>
        <p className='p-4'>
            { eCommerce.p2 }
        </p>

    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
            <h2 className='text-3xl mb-6 mt-20 ms-4'>{ eCommerce.title3 }</h2>
        </div>
        {
            soluciones.map( solucion =>(
            <div key={ solucion.id } className="grid divide-y divide-neutral-200 max-w-5xl mx-auto mt-2">
                <hr />
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span className='text-xl'>{ solucion.titulo }</span>
                            <span className="transition group-open:rotate-180">
                        <svg className='text-sky-800 font-bold' fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            { solucion.description }
                        </p>
                    </details>
                </div>
            </div>
            ))
        }
    </div>

    <h3 className='text-center text-3xl mb-6 mt-20'>{ eCommerce.title4 }</h3>

    <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-5 mt-10 gap-4 mb-10">
        {
            items.slice(0,5).map( item=> (
            <div key={ item.id } className='mx-auto flex flex-col items-center'>
                <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
            </div>
            ))
        }
    </div>
    <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 mb-20">
        {
            items.slice(5,9).map( item=> (
            <div key={ item.id } className='mx-auto flex flex-col items-center'>
                <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
            </div>
            ))
        }
    </div>

    <hr />

    <h3 className='text-center text-3xl mb-6 mt-20'>{ eCommerce.title5 }</h3>

    <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-10'>
        <div className='mx-auto'>
            <img src="/images/Ecommerce_PrestaShop_Logo_sm.png" alt="" />
        </div>
        <div className='mx-auto'>
            <img src="/images/Ecommerce_Magento_Logo_sm.png" alt="" />
        </div>
    </div>

    <h3 className='text-center text-3xl mb-6 mt-40 mb-12'>{ eCommerce.casos }</h3>

    <div className="flex justify-center items-center">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full">
                <Link href="/caso-de-estudio-mxmart">
                    <img className="rounded-t-lg h-[170px]" src="/images/mxmart_cover.jpg" width='320px'/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-mxmart">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">{ eCommerce.cardTitle }</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{ eCommerce.cardDescription }</p>
                </div>
            </div>
        </div>
        </div>
    </div> 

    </PageLayout>
  )
}

export default ECommercePage