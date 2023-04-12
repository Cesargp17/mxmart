import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import Link from 'next/link'
import React from 'react'

const items = [
    { id: 1, title: 'Procesar datos a escala', icon: 'fa fa-expand' },
    { id: 2, title: 'Aplicaciones basadas en eventos', icon: 'fa fa-code' },
    { id: 3, title: 'Backends para IoT y backends móviles', icon: 'fas fa-database' },
    { id: 4, title: 'Procesamiento de transmisiones', icon: 'fas fa-signal' },
];

const LambdaPage = () => {
  return (
    <PageLayout title={'AWS Lambda | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/lambda_bg.png'}
        titulo={'AWS Lambda'}
        texto3={'Ejecute código sin pensar en la infraestructura'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

            <div className="flex flex-col lg:flex-row items-center justify-center mx-auto">
                <div className="flex flex-col">
                    <h3 className='font-normal text-3xl ms-10'>Acerca de nosotros</h3>
                    <p className="p-8 text-gray-900 text-lg">
                    En Mxmart somos socios nivel "Advanced" de Amazon Web Services y contamos con la especialidad en servicios de informática sin servidor con el Service Delivery Program (SDP) de AWS Lambda. Esto nos permite brindar las mejores soluciones relacionadas a la informática sin servidores.
                    </p>
                </div>
                <img
                src="/images/Lambda_badge.png"
                className="w-full w-[180px] lg:w-[170px]"
                />
            </div>

            <h3 className='font-normal text-3xl ms-10 mt-20'>AWS Lambda</h3>
            <p className="p-8 text-gray-900 text-lg">
            Lambda es un servicio informático que permite ejecutar código sin aprovisionar ni administrar servidores. Lambda ejecuta el código en una infraestructura de computación de alta disponibilidad y realiza todas las tareas de administración de los recursos de computación, incluido el mantenimiento del servidor y del sistema operativo, el aprovisionamiento de capacidad y el escalado automático, así como las funciones de registro. Con Lambda, puede ejecutar código para prácticamente cualquier tipo de aplicación o servicio de backend.
            </p>
            <Link className='text-sky-600 ms-8' href={'https://aws.amazon.com/es/lambda/'} target='_blank'>Conocer más acerca de AWS Lambda</Link>

            <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                <h3 className='text-center text-2xl mb-4'>Ventajas de la informática sin servidores</h3>

                <ul className='ms-10 mt-6 list-disc p-10'>
                    <li className='text-lg'>Nula administración de la infraestructura</li>
                    <li className='text-lg'>Automatización</li>
                    <li className='text-lg'>Ahorro en costos</li>
                    <li className="text-lg">Recuperación ante desastres</li>
                    <li className="text-lg">Escabilidad</li>
                    <li className="text-lg">Optimización</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>Framework utilizado</h3>

                <img src="/images/Framework-03_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20'>Casos de uso más comunes</h3>

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

        <h3 className='text-center text-3xl mb-6 mt-20 mb-12'>Caso de éxito</h3>

        <hr className='mt-10 mb-10' />

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full mx-auto">
                    <Link href="/caso-de-estudio-ieu">
                        <img className="rounded-t-lg" src="/images/IEU_case.png" alt=""/>
                    </Link>
                    <div className="p-5">
                        <Link href="/caso-de-estudio-ieu">
                            <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">Campus Online basado en AWS</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">IEU necesitaba dar continuidad al plan de estudios a sus alumnos y docentes de manera virtual, así como entregar una plataforma...</p>
                    </div>
                </div>
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full mx-auto">
                <Link href="/caso-de-estudio-erbessd">
                    <img className="rounded-t-lg h-[170px]" src="/images/erbessd-case.png" width='320px'/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-erbessd">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">Replicación y Retención de Amazon WorkDocs</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">Mover manualmente objetos individuales de Amazon WorkDocs a Amazon S3 puede resultar...</p>
                </div>
            </div>
        </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default LambdaPage