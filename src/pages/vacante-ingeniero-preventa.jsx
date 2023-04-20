import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const VacanteIngenieroPage = () => {

    const router = useRouter();

    //Contexto que trae la logica para el sitio multidioma
    const { preventa } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ preventa.metaTitle } 
        isWhite={ true }
    >

    <HeaderSections
        portada={'/images/Vacantes-BKG.png'}
        titulo={ preventa.title }
        isDifferent={ true }
    />

    <div className="flex justify-center bg-white  p-2">
        <div className="container max-w-5xl mt-10">

            <p className='text-center text-lg'>{ preventa.description }</p>
            <h2 className='font-medium text-2xl mt-10 ms-10'>{ preventa.requisitos }</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>{ preventa.escolaridad }</li>
                <li className='text-lg'><strong>{ preventa.semestre }</strong>{ preventa.semestre1 }</li>
                <li className='text-lg'><strong>{ preventa.sexo }</strong>{ preventa.sexo1 }</li>
                <li className='text-lg'><strong>{ preventa.estadoCivil }</strong>{ preventa.estadoCivil1 }</li>
            </ul>

            <h2 className='font-medium text-2xl mt-10 ms-10'>{ preventa.conocimientos }</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>{ preventa.conocimiento1 }</li>
                <li className='text-lg'>{ preventa.conocimiento2 }</li>
                <li className='text-lg'>{ preventa.conocimiento3 }</li>
                <li className='text-lg'>{ preventa.conocimiento4 }</li>
            </ul>

            <h2 className='font-medium text-2xl mt-10 ms-10'>{ preventa.ofrecemos }</h2>
            <ul className='ms-10 mt-6 list-disc'>
                <li className='text-lg'>{ preventa.prestacion1 }</li>
                <li className='text-lg'>{ preventa.sueldo }</li>
                <li className='text-lg'><strong>{ preventa.horario }</strong>{ preventa.prestacion3 }</li>
                <li className='text-lg'>{ preventa.prestacion4 }</li>
                <li className="text-lg">{ preventa.prestacion5 }</li>
            </ul>

            <h3 className="font-medium text-2xl mt-10 ms-10">{ preventa.enviar } <span className='text-sky-700'>mxmartsolutions@mxmart.mx</span></h3>

            <div className="flex ms-6 items-center flex justify-center mt-10 mb-10">
                <button onClick={ () => router.push('/vacantes') } className="bg-sky-900 hover:bg-sky-700 text-white py-2 px-4 rounded-md w-56">{ preventa.button }</button>
            </div>
        </div>
    </div>
    </PageLayout>
  )
}

export default VacanteIngenieroPage