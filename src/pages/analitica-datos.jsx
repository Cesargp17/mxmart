import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import React from 'react'

const items = [
    { id: 1, title: 'Conección a multiples orígenes de datos', icon: 'fa fa-database' },
    { id: 2, title: 'Generación de insights', icon: 'fa fa-star' },
    { id: 3, title: 'Reportes automatizados', icon: 'fa fa-file-text-o' },
    { id: 4, title: 'Dashboards personalizados', icon: 'fa fa-th' },
    { id: 5, title: 'Cobro por conexión', icon: 'fa fa-dollar' },
];

const AnaliticaDatosPage = () => {
  return (
    <PageLayout title={'Analítica de datos | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/Assessments.png'}
        titulo={'Data Warehouse y Data Lake'}
        texto3={'Potenciamos el éxito de su empresa'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-10">

            <p className='p-4'>
                Extracción, transformación y carga de datos desde múltiples orígenes: Bases de datos relacionales, Bases de datos no relacionales, Información estructurada o semi estructurada. Envío hacia un data warehouse y data lake para su análisis y publicación de la información por medio de dashboards dinámicos en herramientas de reportes de Business Intelligence.
            </p>

            <h3 className='text-center text-3xl mb-6 mt-20'>Sistema de gestión de aprendizaje</h3>

            <hr className='mb-10 mt-10' />

            <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-5 mt-10 gap-4 mb-20">
                {
                    items.map( item=> (
                    <div key={ item.id } className='mx-auto flex flex-col items-center'>
                        <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                        <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
                    </div>
                    ))
                }
            </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default AnaliticaDatosPage