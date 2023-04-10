import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import Link from 'next/link'
import React from 'react'

const CompetenciaEducacionPage = () => {
  return (
    <PageLayout title={"Educación en la nube | Mxmart Solutions"}>

    <HeaderSections
        portada={'/images/competencia_educacion_cover.png'}
        titulo={'Educación en la nube'}
        descripcion={'Servicios de AWS para el sector educativo'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-5xl mt-10">

            <div className="flex flex-col p-5">
                <h3 className='font-normal text-3xl'>Soluciones en la nube para la educación</h3>
                <p className='mt-4 font-light text-lg'>Las soluciones en la nube han irrumpido en diversos sectores en los últimos años y la industria educativa no es la excepción, la nube permite a las instituciones educativas crear una infraestructura sólida, eficiente y flexible. Les permite escalar de manera rápida y fácil durante los momentos de mayor demanda, como las inscripciones, el regreso a clases, exámenes finales, por mencionar algunos ejemplos, de la misma manera permite reducir la escala durante las vacaciones o fines de semana cuando la demanda es más baja, logrando así un ahorro económico.</p>
            </div>
        
            <div className="flex flex-col lg:flex-row items-center justify-between p-5">
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2">Acerca de nosotros</h3>
                    <div className="flex flex-col lg:flex-row">
                        <p className="mt-4 font-light text-lg pr-2 lg:mr-20">
                        En Mxmart contamos con el conocimiento, el personal certificado y la experiencia para desarrollar e implementar arquitecturas sólidas en la nube de AWS. Somos Consulting Partner Advanced de AWS y acompañamos a nuestros clientes en su paso a la transformación digital, asesorándolos en la implementación de los servicios de Amazon Web Services, buscando siempre la innovación, seguridad y optimización de recursos.
                        <br /><br />
                        Mxmart tiene la competencia de educación de AWS, que avala nuestra competencia técnica y experiencia en ofrecer soluciones para el sector educativo. Mxmart ha diseñado arquitecturas, migraciones y generado soluciones para diferentes instituciones educativas.
                        </p>

                        <img
                        src="https://mxmartsolutions.com/assets/images/badge-education.svg"
                        className="w-[150px] lg:w-[200px] mt-10 mx-auto"
                        />
                    </div>
                </div>
            </div>

            <h3 className='font-normal text-3xl text-center mt-10 mb-20'>Ventajas de nuestras soluciones para educación</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 mx-auto'>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                        <img className='mx-auto' src="/images/icono-infraestructura.png" width='115px' height='115px' /> 
                        <h4 className='text-center'>Infraestructura sólida​ en la nube</h4>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                        <img className='mx-auto' src="/images/icono-ambiente.png" width='115px' height='115px' />
                        <h4 className='text-center'>Ambientes híbridos​ de enseñanza</h4>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                        <img className='mx-auto' src="/images/icono-matricula.png" width='115px' height='115px' />
                        <h4 className='text-center'>Incrementar matricula​ de estudiantes</h4> 
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                        <img className='mx-auto' src="/images/icono-cobertura.png" width='115px' height='115px' />
                        <h4 className='text-center'>Cobertura ​global</h4> 
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                        <img className='mx-auto' src="/images/icono-multisitio.png" width='115px' height='115px' />
                        <h4 className='text-center'>Soporta multisitios de e-learning</h4> 
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                        <img className='mx-auto' src="/images/icono-plan.png" width='115px' height='115px' />
                        <h4 className='text-center'>Continuidad de planes educativos ante situaciones extraordinarias</h4> 
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                        <img className='mx-auto' src="/images/icono-modelo.png" width='115px' height='115px' />
                        <h4>Modelos educativo 100% en línea</h4> 
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                        <img className='mx-auto' src="/images/icono-innovacion.png" width='115px' height='115px' />
                        <h4 className='text-center'>Innovación de proyectos​ con servicios de nube</h4> 
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="flex flex-col">
                        <img className='mx-auto' src="/images/icono-alumno.png" width='115px' height='115px' />
                        <h4 className='text-center'>Herramienta portable para el aprendizaje del alumno</h4> 
                    </div>
                </div>
            </div>

        <hr id='casos-de-exito' className='mt-10 mb-10' />

        <h3 className='font-normal text-3xl text-center mt-10 mb-20'>Casos de éxito</h3>

        <div className="flex justify-center items-center mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-60 min-h-full">
                <Link href="/caso-de-estudio-creson">
                    <img className="rounded-t-lg" src="/images/creson_case.png" alt=""/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-creson">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">Arquitectura de alta disponibilidad para LMS</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">El constante crecimiento de alumnos, maestros y cursos han generado una alta demanda a los cursos en linea que CRESON ofrece...</p>
                </div>
            </div>

            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-60 min-h-full">
                <Link href="/caso-de-estudio-unicla">
                    <img className="rounded-t-lg" src="/images/unicla_case.png" alt=""/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-unicla">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">Sistema de Control Escolar en la nube</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">La UNICLA buscaba migrar todo su entorno de soluciones tecnológicas a la nube para optimizar costos y modernizar el sistema…</p>
                </div>
            </div>

            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-60 min-h-full">
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

            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-60 min-h-full">
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
        </div>
        </div>
        </div>
    </div>

    </PageLayout>
  )
}

export default CompetenciaEducacionPage