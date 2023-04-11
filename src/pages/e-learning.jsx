import { PageLayout } from '@/components/layout/PageLayout'
import { CasosDeExito } from '@/components/pages/CasosDeExito';
import { HeaderSections } from '@/components/pages/HeaderSections'
import React from 'react'

const firstItems = [
    { id: 1, title: 'Instituciones Educativas', icon: 'fas fa-school' },
    { id: 2, title: 'Empresas', icon: 'fas fa-building' },
    { id: 3, title: 'Instituciones o dependencia de Gobierno', icon: 'fas fa-university' },
];

const secondItems = [
    { id: 1, title: 'Personalizable', icon: 'fas fa-paint-brush' },
    { id: 2, title: 'Fácil y accesible', icon: 'fas fa-sign-in-alt' },
    { id: 3, title: 'Permite crear cursos en minutos', icon: 'fas fa-clock' },
    { id: 4, title: 'Escalamiento ante cualquier número de usuarios', icon: 'fas fa-users' },
    { id: 5, title: '5 capas de seguridad', icon: 'fas fa-shield-alt' },

    { id: 6, title: 'Configurado por carrera o especialidad dependiendo las necesidades', icon: 'fas fa-graduation-cap' },
    { id: 7, title: 'Alta disponibilidad', icon: 'fas fa-database' },
    { id: 8, title: 'Envío masivo de correo', icon: 'fas fa-envelope-open-text' },
    { id: 9, title: 'Con interfaz para alumnos e interfaz para maestros', icon: 'fas fa-chalkboard-teacher' },
];

const ELearningPage = () => {
  return (
    <PageLayout title={'E-learning | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/elearning_cover.png'}
        titulo={'E-learning + AWS'}
        texto3={'Evolucionando en el proceso de enseñanza'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            En Mxmart podemos ofrecerle una solución de aprendizaje en línea diseñada para soportar los ecosistemas más exigentes y complejos, disponible en cualquier momento gracias a su arquitectura en la nube totalmente resiliente y de alta disponibilidad.
        </p>

        <h2 className='text-3xl mb-6 mt-20 ms-4'>Seguridad</h2>
        <p className='p-4'>
            Proporciona a tu institución una serie de filtros de seguridad y de herramientas administrativas. Conoce los beneficios y ventajas del cifrado avanzado de datos y archivos, un amplio control de quien accede a la plataforma e información, registros para auditorías e informes, autentificación de dos factores y demás características de alta seguridad de nivel empresarial que mantienen los datos seguros en todo momento.
        </p>

        <h3 className='text-center text-3xl mb-6 mt-20'>Ideal para</h3>

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
            {
                firstItems.map( item=> (
                <div key={ item.id } className='mx-auto flex flex-col items-center'>
                    <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                    <h4 className='mx-auto text-md mt-6 text-center font-bold w-[150px]'>{ item.title }</h4>
                </div>
                ))
            }
        </div>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                <h3 className='text-center text-2xl mb-4'>Ventajas de e-learning:</h3>

                <ul className='ms-10 mt-6 list-disc p-10'>
                    <li className='text-lg'>Arquitectura robusta</li>
                    <li className='text-lg'>Seguridad</li>
                    <li className='text-lg'>Alta disponibilidad</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>Framework utilizado</h3>

                <img src="/images/Framework-01_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20'>Sistema de gestión de aprendizaje</h3>

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-5 mt-10 gap-4 mb-20">
            {
                secondItems.map( item=> (
                <div key={ item.id } className='mx-auto flex flex-col items-center'>
                    <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                    <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
                </div>
                ))
            }
        </div>

        <CasosDeExito/>

        </div>
    </div>

    </PageLayout>
  )
}

export default ELearningPage