import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { useRouter } from 'next/router'
import React from 'react'

const VacanteIngenieroPage = () => {

    const router = useRouter();

  return (
    <PageLayout title={' Vacante Ingeniero en preventa de TI | Mxmart Solutions'} isWhite={ true }>

    <HeaderSections
        portada={'/images/Vacantes-BKG.png'}
        titulo={'Únete a nuestro equipo'}
        isDifferent={ true }
    />

    <div className="flex justify-center bg-white  p-2">
        <div className="container max-w-5xl mt-10">

            <p className='text-center text-lg'>Mxmart, empresa especializada en soluciones en la nube ubicada en Zapopan, Jalisco, busca ingeniero de preventa.</p>
            <h2 className='font-medium text-2xl mt-10 ms-10'>Requisitos:</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>Licenciatura en sistemas o similar</li>
                <li className='text-lg'><strong>Semestre:</strong> Último año</li>
                <li className='text-lg'><strong>Sexo:</strong> Indistinto</li>
                <li className='text-lg'><strong>Estado civil:</strong> Indiferente</li>
            </ul>

            <h2 className='font-medium text-2xl mt-10 ms-10'>Conocimientos y habilidades:</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>Al menos 2 años en arquitectura o preventa de soluciones que impliquen diferentes componentes, comunicaciones y redes, virtualización, almacenamiento, respaldo, servidores, consultoría en tecnologías de información, soluciones de cloud.</li>
                <li className='text-lg'>Dinámico y proactivo</li>
                <li className='text-lg'>Innovador</li>
                <li className='text-lg'>Capacidad de resolución de problemas</li>
            </ul>

            <h2 className='font-medium text-2xl mt-10 ms-10'>Ofrecemos:</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>Forma de trabajo Hibrida</li>
                <li className='text-lg'>Sueldo nominal</li>
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

export default VacanteIngenieroPage