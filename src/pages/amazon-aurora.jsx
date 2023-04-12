import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import Link from 'next/link'
import React from 'react'

const firstItems = [
    { id: 1, title: 'Migrar a bases de datos administradas', icon: 'fas fa-database' },
    { id: 2, title: 'Actualización de versiones de motores de bases de datos (SQL Server, MySql, Postgress, Oracle y MariaDB)', icon: 'fa fa-refresh' },
    { id: 3, title: 'Aplicaciones empresariales (SAP, Oracle) y aplicaciones tipo Saas', icon: 'fas fa-laptop' },
    { id: 4, title: 'Crear aplicaciones web y móviles para uso en alta disponibilidad', icon: 'fas fa-mobile' },
];

const secondItems = [
    { id: 1, title: 'Seguridad y gestión de múltiples bases de datos.', icon: 'fas fa-coins' },
    { id: 2, title: 'Modernización de plataformas web.', icon: 'far fa-window-restore' },
    { id: 3, title: 'Optimización de recursos informáticos para el despliegue de las bases de datos', icon: 'fa fa-files-o' },
];

const AuroraPage = () => {
  return (
    <PageLayout title={'Amazon Aurora | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/aurora_bg.png'}
        titulo={'Modernización de base de datos'}
        texto3={'Potenciamos el éxito de su empresa'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto">
                <div className="flex flex-col">
                    <h3 className='font-normal text-3xl ms-10'>Especialistas en bases de datos</h3>
                    <p className="p-8 text-gray-900 text-lg">
                    En Mxmart somos socios nivel "Select" de Amazon Web Services y contamos con la especialidad en bases de datos con el Service Delivery Program (SDP) de Relational Database Service (RDS) en la nube de AWS. Esto nos permite brindar las mejores soluciones relacionadas a la migración de bases de datos On Premises hacia servicios administrados en AWS, permitiendo la administración y gestión de diferentes motores de Bases de Datos relacionales y no relacionales.
                    </p>
                </div>
                <img
                src="/images/Base_Datos.png"
                className="w-full w-[270px] lg:w-[300px]"
                />
            </div>

            <h3 className='font-normal text-3xl ms-10 mt-20'>Amazon Aurora</h3>
            <p className="p-8 text-gray-900 text-lg">
            Amazon Aurora es una base de datos relacional compatible con MySQL y PostgreSQL creada especialmente para la nube y que combina el rendimiento y disponibilidad de las bases de datos tradicionales con la simplicidad y rentabilidad de las bases de datos de código abierto.
            <br /><br />
            Es hasta cinco veces más rápida que las bases de datos de MySQL estándar y tres veces más rápida que las bases de datos de PostgreSQL estándar. Ofrece la seguridad, disponibilidad y fiabilidad de las bases de datos de nivel comercial a una décima parte del costo. Amazon Aurora está completamente administrada por Amazon Relational Database Service (RDS), que automatiza las tareas administrativas demandantes como el aprovisionamiento de hardware, la configuración de bases de datos, la aplicación de parches y las copias de seguridad.
            </p>
            <Link className='text-sky-600 ms-8' href={'https://aws.amazon.com/es/rds/aurora/'} target='_blank'>Conocer más acerca de Amazon Aurora</Link>

            <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
                <div className='border-r border-solid border-gray pl-4'>
                    <h3 className='text-center text-2xl mb-4'>Ventajas de la modernización y migración de bases de datos</h3>

                    <ul className='ms-10 mt-6 list-disc p-10'>
                        <li className='text-lg'>Reducción en costo de licenciamiento</li>
                        <li className='text-lg'>Pago por uso</li>
                        <li className='text-lg'>Habilitación de soluciones en menor tiempo</li>
                        <li className="text-lg">Recuperación ante desastres</li>
                        <li className="text-lg">Base de datos (Relacionales, noSQL, grafos, etc)</li>
                        <li className="text-lg">Múltiples capacidades de computo</li>
                        <li className="text-lg">Seguridad</li>
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
                    firstItems.map( item=> (
                    <div key={ item.id } className='mx-auto flex flex-col items-center'>
                        <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                        <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
                    </div>
                    ))
                }
            </div>

            <h3 className='text-center text-3xl mb-6 mt-20'>Otros casos de uso</h3>

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

            <h3 className='text-center text-3xl mb-6 mt-10 mb-12'>Caso de éxito</h3>

            <div className="flex justify-center items-center">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full">
                    <Link href="/caso-de-estudio-univa">
                        <img className="rounded-t-lg" src="/images/sector_educativo_cover.jpg" alt=""/>
                    </Link>
                    <div className="p-5">
                        <Link href="/caso-de-estudio-univa">
                            <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">Moodle sobre Amazon Web Services y Amazon Aurora</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">La UNIVA ha implementado educación en línea a través de la plataforma de gestión de aprendizaje, Moodle, así...</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default AuroraPage