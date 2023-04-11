import Link from 'next/link'
import React from 'react'

export const CasosDeExito = () => {
  return (
    <>
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
    </>
  )
}
