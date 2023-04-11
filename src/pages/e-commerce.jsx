import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import Link from 'next/link';
import React from 'react'

const soluciones = [
    { id: 1, titulo: 'Diseño y desarrollo de comercio electrónico', description: 'Diseñamos y desarrollamos proyectos de comercio electrónico que se adaptan a sus requerimientos, ya sea para la comercialización de productos físicos y/o virtuales, pudiendo administrar sus inventarios, envíos, precios, métodos de pago y la administración generar de su tienda en línea.' },
    { id: 2, titulo: 'Instalación y configuración de módulos', description: 'Actualmente las plataformas de comercio electrónico permiten la instalación de nuevos módulos o plugins como herramientas de apoyo para la gestión de ventas o nuevas funcionalidades como apoyo a la administración de los sistemas. ' },
    { id: 3, titulo: 'Implementación en la nube', description: 'Existe una gran cantidad de servicios en la nube de AWS, es importante manejar los servicios adecuados para cada tipo de uso, de esta manera podemos obtener mayores beneficios técnicos y comerciales.' },
    { id: 4, titulo: 'Migración de comercio electrónico', description: 'Manejamos los procedimientos y herramientas adecuadas para una migración exitosa de tu comercio electrónico, desde servidores físicos, hosting o vpc hacía la nube o en ambientes híbridos.' },
    { id: 5, titulo: 'Actualización de plataformas', description: 'Contamos con arquitecturas robustas que permiten la generación de ambientes de pruebas o desarrollo para la actualización de los sistemas, permitiendo realizar las configuraciones necesarias y validar la plataforma antes de pasarla a producción.' },
    { id: 6, titulo: 'Integración con proveedores ', description: 'Nuestro equipo de desarrollo tiene la experiencia para la generación de conexiones vía API o Web Service hacía sus proveedores, de tal manera que podemos interconectar la información de los productos o servicios que comercialice a través o desde terceras empresas.' },
    { id: 7, titulo: 'Importación de productos', description: 'Manejamos herramientas y métodos que nos permiten realizar la importación o actualización de nuevos productos hacía nuestras bases de datos. ' },
    { id: 8, titulo: 'Propiedades avanzadas de productos', description: 'Diseñamos y configuramos la funcionalidad que busque darle a sus productos o servicios, ya sea con características muy especificas o reglas de negocio particulares.' },
];

const items = [
    { id: 1, title: 'Instalación', icon: 'fas fa-laptop-code' },
    { id: 2, title: 'Configuración', icon: 'fas fa-cogs' },
    { id: 3, title: 'Diseño personalizado', icon: 'fas fa-paint-brush' },
    { id: 4, title: 'Personalización avanzada del eCommerce', icon: 'fas fa-user-cog' },
    { id: 5, title: 'Instalación y configuración de Módulos', icon: 'fas fa-code' },
    { id: 6, title: 'Integración con sistemas', icon: 'fas fa-external-link-alt' },
    { id: 7, title: 'Importación de productos', icon: 'fas fa-exchange-alt' },
    { id: 8, title: 'Propiedades avanzada de productos', icon: 'fas fa-shopping-cart' },
    { id: 9, title: 'Formas de pago', icon: 'fas fa-dollar-sign' },
];

const ECommercePage = () => {
  return (
    <PageLayout title={'E-ecommerce | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/Mxmart_Empresarial_Ecommerce.png'}
        titulo={'E-commerce'}
        texto3={'Aplicaciones de comercio electrónico'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20">

        <h2 className='text-3xl mb-6 mt-20 ms-4'>Aplicaciones de comercio electrónico</h2>
        <p className='p-4'>
            En Mxmart somos especialistas en el desarrollo de comercios electrónicos a la medida de sus necesidades, brindamos servicios de consultoría técnica y planes de desarrollo para sus proyectos. Generamos arquitecturas en la nube para obtener el mayor potencial de las plataformas de comercio electrónico que existen en el mercado, y así proporcionar sistemas seguros, flexibles, personalizados y de alta escalabilidad.
        </p>

        <h2 className='text-3xl mb-6 mt-20 ms-4'>Comercio electrónico en la nube</h2>
        <p className='p-4'>
            El tráfico de un comercio electrónico puede cambiar considerablemente de un momento a otro, sin embargo, al alojar su tienda en la nube la capacidad puede aumentar o disminuir dependiendo las necesidades o cargas de trabajo y con esto solo pagar por los recursos que se utilicen, sin costos iniciales ni contratos a largo plazo, permitiendo que pueda invertir en diferenciadores de su negocio. Reciba visitas de clientes desde cualquier parte del mundo sin inconvenientes de retraso en tiempos de respuesta y con la seguridad que los servicios en la nube ofrecen.
        </p>

    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
            <h2 className='text-3xl mb-6 mt-20 ms-4'>Soluciones</h2>
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

    <h3 className='text-center text-3xl mb-6 mt-20'>Servicios</h3>

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

    <hr />

    <h3 className='text-center text-3xl mb-6 mt-20'>Plataformas</h3>

    <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-10'>
        <div className='mx-auto'>
            <img src="/images/Ecommerce_PrestaShop_Logo_sm.png" alt="" />
        </div>
        <div className='mx-auto'>
            <img src="/images/Ecommerce_Magento_Logo_sm.png" alt="" />
        </div>
    </div>

    <h3 className='text-center text-3xl mb-6 mt-40 mb-12'>Caso de éxito</h3>

    <div className="flex justify-center items-center">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-80 min-h-full">
                <Link href="/caso-de-estudio-mxmart">
                    <img className="rounded-t-lg h-[170px]" src="/images/mxmart_cover.jpg" width='320px'/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-mxmart">
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

export default ECommercePage