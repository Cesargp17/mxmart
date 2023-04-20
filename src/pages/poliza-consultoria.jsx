import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react'

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

    //Contexto que trae la logica para el sitio multidioma
    const { poliza } = useContext( LanguageContext );

    //arreglo que mapea los servicios
    const items = [
        { id: 1, title: poliza.s1, icon: 'fa fa-comments-o' },
        { id: 2, title: poliza.s2, icon: 'fa fa-desktop' },
        { id: 3, title: poliza.s3, icon: 'fa fa-refresh' },
        { id: 4, title: poliza.s4, icon: 'fa fa-cogs' },
        { id: 5, title: poliza.s5, icon: 'fa fa-pencil' },
    
        { id: 6, title: poliza.s6, icon: 'fas fa-database' },
        { id: 7, title: poliza.s7, icon: 'fas fa-exchange-alt' },
        { id: 8, title: poliza.s8, icon: 'fa fa-shield' },
        { id: 9, title: poliza.s9, icon: 'fa fa-folder-open' },
    ];

  return (
    <PageLayout 
        title={ poliza.metaTitle }
        description={ poliza.metaDescription }
    >

    <HeaderSections
        portada={'/images/Poliza_de_servicios.png'}
        titulo={ poliza.title }
        texto3={ poliza.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            { poliza.description }
        </p>

        <h3 className='text-center text-3xl mb-6 mt-20'>{ poliza.title3 }</h3>
        <hr />

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-5 mt-10 gap-4">
            {
                items.slice(0, 5).map( item=> (
                <div key={ item.id } className='mx-auto flex flex-col items-center'>
                    <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                    <h4 className='mx-auto text-md mt-6 text-center'>{ item.title }</h4>
                </div>
                ))
            }
        </div>
        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4">
            {
                items.slice(5, 9).map( item=> (
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