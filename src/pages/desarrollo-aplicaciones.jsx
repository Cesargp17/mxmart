import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import React from 'react'

const DesarrolloAppsPage = () => {

    const items = [
        { id: 1, title: 'Serverless', icon: 'fa fa-cloud' },
        { id: 2, title: 'Refactorización', icon: 'fa fa-code' },
    ];

  return (
    <PageLayout title={'Desarrollo de aplicaciones modernas | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/Desarrollo-aplicaciones.png'}
        titulo={'Desarrollo de aplicaciones'}
        titulo2={' modernas'}
        texto3={'Potenciamos el éxito de su empresa'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            Análisis, diseño, generación y puesta a punto de nuevas aplicaciones o integración de aplicaciones existentes, esto con la finalidad de construir soluciones seguras, con nuevas tecnologías, eficientes, en microservicios, pudiendo vivir en infraestructura tradicional, contenedores o servicios serverless en la nube de AWS.
        </p>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                <h3 className='text-center text-2xl mb-4'>Ventajas del desarrollo de aplicaciones modernas</h3>

                <ul className='ms-10 mt-6 list-disc p-10 lg:mb-40'>
                    <li className='text-lg'>Recuperación de inversión en menor tiempo</li>
                    <li className='text-lg'>Desarrollo ágil</li>
                    <li className='text-lg'>Escalabilidad</li>
                    <li className='text-lg'>Seguridad</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>Framework utilizado</h3>

                <img src="/images/Framework-01_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20'>Casos de uso</h3>

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-10">
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

export default DesarrolloAppsPage