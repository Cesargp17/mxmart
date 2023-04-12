import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import React from 'react'

const firstItems = [
    { id: 1, title: 'Nube Pública', description: 'Modelo de TI cuyos servicios informáticos e infraestructura se gestionan por un proveedor externo y se comparten con varias organizaciones a través de la red pública de Internet.', icon: 'fas fa-cloud' },
    { id: 2, title: 'Nube Privada', description: 'A diferencia de la nube pública, en una nube privada se usan recursos informáticos dedicados y de propiedad reservada; por lo que solo una organización aloja y gestiona el sistema.', icon: 'fas fa-cloud' },
    { id: 3, title: 'Nube Híbrida', description: 'Es un modelo que combina al menos una nube privada y al menos una nube pública, que interactúan para proporcionar un conjunto flexible de servicios informáticos de nube.', icon: 'fas fa-cloud' },
    { id: 4, title: 'Multi-Cloud', description: 'Es el uso de múltiples servicios de computación y almacenamiento en la nube de diferentes proveedores en una sola arquitectura heterogénea para mejorar las capacidades y el costo de la infraestructura de la nube.', icon: 'fas fa-cloud' },
];

const InfraestructuraPage = () => {
  return (
    <PageLayout title={'Infraestructura para servidores | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/Modernización-infraestructura-para-servidores-banner.jpg'}
        titulo={'Modernización de'}
        titulo2={'infraestructura para servidores'}
        texto3={'Potenciamos el éxito de su empresa'}
    />  

    <div className="flex justify-center bg-white">  
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            En Mxmart contamos con la experiencia en migración de servidores On Premises u otras nubes públicas o privadas hacia AWS, en la generación de disaster recovery y en la implementación de la estrategía lift and shift
        </p>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                    <h3 className='text-center text-2xl mb-4'>Ventajas de la modernización de infraestructura para servidores</h3>

                    <ul className='ms-10 mt-6 list-disc p-10'>
                        <li className='text-lg'>Reducción en costo de licenciamiento</li>
                        <li className='text-lg'>Pago por uso</li>
                        <li className='text-lg'>Habilitación de soluciones en menor tiempo</li>
                        <li className="text-lg">Recuperación ante desastres</li>
                        <li className="text-lg">Múltiples capacidades de computo</li>
                        <li className="text-lg">Optimización</li>
                    </ul>
                </div>

                <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
                
                <div className='mx-auto'>
                    <h3 className='text-center text-2xl mb-4'>Framework utilizado</h3>

                    <img src="/images/Framework-03_1.png" width='400px' alt="" />
                </div>
            </div>

            <h3 className='text-center text-3xl mb-6 mt-20'>Tipos de migraciones</h3>

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