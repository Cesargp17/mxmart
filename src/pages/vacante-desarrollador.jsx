import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { useRouter } from 'next/router'
import React from 'react'

const VacanteDesarrolladorPage = () => {

    const router = useRouter();

  return (
    <PageLayout title={'Vacante Desarrollador de Software | Mxmart Solutions'} isWhite={ true }>

    <HeaderSections
        portada={'/images/Vacantes-BKG.png'}
        titulo={'Únete a nuestro equipo'}
        isDifferent={ true }
    />

    <div className="flex justify-center bg-white  p-2">
        <div className="container max-w-5xl mt-10">

            <p className='text-center text-lg'>Mxmart, empresa especializada en soluciones en la nube ubicada en Zapopan, Jalisco, busca Developer.</p>
            <h2 className='font-medium text-2xl mt-10 ms-10'>Requisitos:</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'><strong>Escolaridad:</strong> Licenciatura y/o especialidad</li>
                <li className='text-lg'><strong>Edad:</strong> 21 a 30 años</li>
                <li className='text-lg'><strong>Sexo:</strong> Indistinto</li>
                <li className='text-lg'><strong>Estado civil:</strong> Indiferente</li>
            </ul>

            <h2 className='font-medium text-2xl mt-10 ms-10'>Conocimientos en:</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>Código abierto, Python, React JS, VUE JS, Node JS</li>
                <li className='text-lg'>1 año control de versiones github, bitbucket</li>
                <li className='text-lg'>Desarrollo de microservicios, Web Services, API's</li>
                <li className='text-lg'>Orden y limpieza, honestidad, trabajo en equipo, proactividad, apegado a normas y procedimientos.</li>
            </ul>

            <h2 className='font-medium text-2xl mt-10 ms-10'>Ofrecemos:</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>Forma de trabajo Hibrida</li>
                <li className='text-lg'><strong>Sueldo:</strong> Según aptitudes</li>
                <li className='text-lg'><strong>Horario:</strong> lunes a viernes de 9 a 6 de la tarde</li>
                <li className='text-lg'>Prestaciones de ley</li>
                <li className="text-lg">Capacitaciones y certificaciones constantes</li>
            </ul>

            <h3 className="font-medium text-2xl mt-10 ms-10">Envía tu CV a <span className='text-sky-700'>mxmartsolutions@mxmart.mx</span></h3>

            <div className="flex ms-6 items-center flex justify-center mt-10 mb-10">
                <button onClick={ () => router.push('/vacantes') } className="bg-sky-900 hover:bg-sky-700 text-white py-2 px-4 rounded-md w-56">Regresar a vacantes</button>
            </div>
        </div>
    </div>
    </PageLayout>
  )
}

export default VacanteDesarrolladorPage