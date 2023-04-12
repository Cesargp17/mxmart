import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import Link from 'next/link'
import React from 'react'

const EscritoriosVirtualesPage = () => {
  return (
    <PageLayout title='Escritorios Virtuales | Mxmart Solutions'>

    <HeaderSections
        portada={'/images/Mxmart_Escritorios.png'}
        titulo={'Escritorios Virtuales'}
        texto3={'Soluciones de TI que superan las expectativas'}
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
                    <h3 className="font-normal text-3xl ms-8">Amazon WorkSpaces</h3>
                    <p className="p-8 text-gray-900 text-[17px]">
                    WorkSpaces de Amazon es un escritorio en la nube que te permite acceder a todas las aplicaciones y documentos que necesites desde cualquier lugar y momento, y desde cualquier dispositivo compatible.
                    <br /><br />
                    Proporciona escritorios Windows o Linux en minutos, selecciona entre una gran variedad de configuraciones entre hardware y software, y proporciona miles de escritorios a empleados de todo el mundo. Una solución totalmente administrada, segura, y más rentable que los equipos tradicionales.
                    </p>
                </div>
            </div>

            <h3 className="font-normal text-3xl ms-8 text-center mb-20 mt-20">Servicio de Escritorio Remoto</h3>

            <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl ms-8">Amazon WorkSpaces</h3>
                    <p className="p-8 text-gray-900 text-[17px]">
                    WorkSpaces de Amazon es un escritorio en la nube que te permite acceder a todas las aplicaciones y documentos que necesites desde cualquier lugar y momento, y desde cualquier dispositivo compatible.
                    <br /><br />
                    Proporciona escritorios Windows o Linux en minutos, selecciona entre una gran variedad de configuraciones entre hardware y software, y proporciona miles de escritorios a empleados de todo el mundo. Una solución totalmente administrada, segura, y más rentable que los equipos tradicionales.
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
                <h3 className='text-center text-2xl mb-4'>Ventajas de escritorios virtuales</h3>

                <ul className='ms-10 mt-6 list-disc p-10'>
                    <li className='text-lg'>Seguridad</li>
                    <li className='text-lg'>Trabajo en cualquier sitio</li>
                    <li className='text-lg'>Arquitectura robusta</li>
                    <li className='text-lg'>Ambientes Windows y Linux</li>
                    <li className='text-lg'>Directorio Activo</li>
                    <li className='text-lg'>Utilización de sistemas internos</li>
                    <li className='text-lg'>Costo por hora o mensual</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>Framework utilizado</h3>

                <img src="/images/Framework-02_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20 mb-12'>Caso de éxito</h3>

        <div className="flex justify-center items-center mb-20">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full">
                <Link href="/caso-de-estudio-finec">
                    <img className="rounded-t-lg h-[170px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/White_paper.jpg/640px-White_paper.jpg" width='320px'/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-finec">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">Ecommerce montado en AWS</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">El comercio electrónico durante los últimos años ha venido evolucionando y acelerando las ventas a través de internet desde cualquier dispositivo y en cualquier horario...</p>
                </div>
            </div>
        </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default EscritoriosVirtualesPage