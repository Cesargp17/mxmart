import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import React from 'react'

const items = [
    { id: 1, title: 'Asesoría', icon: 'fa fa-comments-o' },
    { id: 2, title: 'Creación de máquinas virtuales en AWS', icon: 'fa fa-desktop' },
    { id: 3, title: 'Actualización de máquinas virtuales en AWS', icon: 'fa fa-refresh' },
    { id: 4, title: 'Configuración y verificación de los servicios', icon: 'fa fa-cogs' },
    { id: 5, title: 'Diseño e implementación de nuevos servicios', icon: 'fa fa-pencil' },

    { id: 6, title: 'Respaldos y restauración de respaldos', icon: 'fas fa-database' },
    { id: 7, title: 'Verificación de fallos de conexión', icon: 'fas fa-exchange-alt' },
    { id: 8, title: 'Verificación de seguridad', icon: 'fa fa-shield' },
    { id: 9, title: 'Administración de los servicios', icon: 'fa fa-folder-open' },
];

const PolizaPage = () => {
  return (
    <PageLayout title={'Póliza de consultoría | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/Poliza_de_servicios.png'}
        titulo={'Póliza de servicios'}
        texto3={'Potenciamos el éxito de su empresa'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            Es una póliza de soporte y consultoría de servicios profesionales a través de bolsa de horas, esto nos permite dar soporte, consultoría y/o capacitación a todas las arquitecturas AWS, sistemas, herramientas y actividades para el óptimo funcionamiento de proyectos realizados y/o configurados por Mxmart.
        </p>

        <h3 className='text-center text-3xl mb-6 mt-20'>Servicios que se pueden incluir en la póliza</h3>
        <hr />

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-5 mt-10 gap-4">
            {
                items.map( item=> (
                <div key={ item.id } className='mx-auto flex flex-col items-center'>
                    <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                    <h4 className='mx-auto text-md mt-6 text-center'>{ item.title }</h4>
                </div>
                ))
            }
        </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default PolizaPage