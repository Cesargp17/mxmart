import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const VacanteDesarrolladorPage = () => {

    const router = useRouter();

    //Contexto que trae la logica para el sitio multidioma
    const { desarrollador } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ desarrollador.metaTitle } isWhite={ true }
        description={ desarrollador.metaDescription }
    >

    <HeaderSections
        portada={'/images/Vacantes-BKG.png'}
        titulo={ desarrollador.title }
        isDifferent={ true }
    />

    <div className="flex justify-center bg-white  p-2">
        <div className="container max-w-5xl mt-10">

            <p className='text-center text-lg'>{ desarrollador.description }</p>
            <h2 className='font-medium text-2xl mt-10 ms-10'>{ desarrollador.requisitos }</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'><strong>{ desarrollador.escolaridad }</strong>{ desarrollador.escolaridadText }</li>
                <li className='text-lg'><strong>{ desarrollador.edad }</strong>{ desarrollador.edad1 }</li>
                <li className='text-lg'><strong>{ desarrollador.sexo }</strong>{ desarrollador.sexo1 }</li>
                <li className='text-lg'><strong>{ desarrollador.estadoCivil }</strong>{ desarrollador.estadoCivil1 }</li>
            </ul>

            <h2 className='font-medium text-2xl mt-10 ms-10'>{ desarrollador.conocimientos }</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>{ desarrollador.conocimiento1 }</li>
                <li className='text-lg'>{ desarrollador.conocimiento2 }</li>
                <li className='text-lg'>{ desarrollador.conocimiento3 }</li>
                <li className='text-lg'>{ desarrollador.conocimiento4 }</li>
            </ul>

            <h2 className='font-medium text-2xl mt-10 ms-10'>{ desarrollador.ofrecemos }</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>{ desarrollador.prestacion1 }</li>
                <li className='text-lg'><strong>{ desarrollador.sueldo }</strong>{ desarrollador.prestacion2 }</li>
                <li className='text-lg'><strong>{ desarrollador.horario }</strong>{ desarrollador.prestacion3 }</li>
                <li className='text-lg'>{ desarrollador.prestacion4 }</li>
                <li className="text-lg">{ desarrollador.prestacion5 }</li>
            </ul>

            <h3 className="font-medium text-2xl mt-10 ms-10">{ desarrollador.enviar }<span className='text-sky-700'> mxmartsolutions@mxmart.mx</span></h3>

            <div className="flex ms-6 items-center flex justify-center mt-10 mb-10">
                <button onClick={ () => router.push('/vacantes') } className="bg-sky-900 hover:bg-sky-700 text-white py-2 px-4 rounded-md w-56">{ desarrollador.button }</button>
            </div>
        </div>
    </div>
    </PageLayout>
  )
}

export default VacanteDesarrolladorPage