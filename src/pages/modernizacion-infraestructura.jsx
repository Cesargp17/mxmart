import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import React from 'react'

const items = [
    { id: 1, title: 'E-commerce', icon: 'fa fa-shopping-cart' },
    { id: 2, title: 'CMS', icon: 'fa fa-window-restore' },
    { id: 3, title: 'Aplicaciones móviles', icon: 'fa fa-mobile' },
    { id: 4, title: 'Aplicativos Web', icon: 'fa fa-desktop' },
    { id: 5, title: 'LMS', icon: 'fa fa-book' },
];

const ModernizacionPage = () => {
  return (
    <PageLayout title={'Modernización de infraestructura para sistemas | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/Modernización-infraestructura-para-sistemas.png'}
        titulo={'Modernización infraestructura'}
        titulo2={' para sistemas / plataformas'}
        texto3={'Potenciamos el éxito de su empresa'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            Migración de CMS (WordPress, Joomla, Drupal), LMS (Moodle, Blackboard), Frameworks para desarrollo (Laravel, React, Angular, Vue, CodeIgniter), ERP (Oracle, SAP) y sistemas web.
        </p>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                <h3 className='text-center text-2xl mb-4'>Ventajas de la modernización de infraestructura para sistemas</h3>

                <ul className='ms-10 mt-6 list-disc p-10'>
                    <li className='text-lg'>Reducción de costos de licenciamiento</li>
                    <li className='text-lg'>Pago por uso</li>
                    <li className='text-lg'>Seguridad en los servicios</li>
                    <li className='text-lg'>Alta disponibilidad</li>
                    <li className='text-lg'>Resiliencia de los datos</li>
                    <li className='text-lg'>Elasticidad</li>
                    <li className='text-lg'>Habilitación de soluciones en menor tiempo</li>
                    <li className='text-lg'>Múltiples capacidades de computo</li>
                    <li className='text-lg'>Optimización de recursos</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>Framework utilizado</h3>

                <img src="/images/Framework-03_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20'>Casos de uso</h3>
        <hr />

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-5 mt-10">
            {
                items.map( item=> (
                <div key={ item.id } className='mx-auto flex flex-col items-center'>
                    <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                    <h4 className='mx-auto text-lg mt-6'>{ item.title }</h4>
                </div>
                ))
            }
        </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default ModernizacionPage