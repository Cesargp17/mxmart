import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const VacantesPage = () => {

    const router = useRouter();

    //Contexto que trae la logica para el sitio multidioma
    const { vacantes } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ vacantes.metaTitle }
        description={ vacantes.metaDescription } 
        isWhite={ true }
    >

    <HeaderSections
        portada={'/images/Vacantes-BKG.png'}
        titulo={ vacantes.title }
        descripcion={ vacantes.subtitle }
        isDifferent={ true }
    />

<div className="flex justify-center bg-white">
    
    <div className="container max-w-6xl mt-8">
        <h2 className='text-center text-2xl font-medium mt-8'>{ vacantes.title2 }</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-12 mb-12">
            <div onClick={ () => router.push('/vacante-desarrollador') } style={{ width: '340px' }} className="flex hover:cursor-pointer flex-col bg-gray hover:bg-gray-100 p-8 mb-8 rounded-xl drop-shadow-xl h-10 items-center justify-center lg:mr-60">
                <div className="flex flex-row">
                    <i className="text-4xl text-sky-800 fa fa-laptop"></i>
                    <div className="flex flex-col items-center">
                        <span className="ml-4 font-medium">{ vacantes.op1Title }</span>
                        <div className="flex flex-row">
                            <span className='text-xs'>{ vacantes.op1Description }&nbsp;&nbsp;</span>
                            <i className="text-blue-600 text-xs fa fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={ () => router.push('/vacante-ingeniero-preventa') } style={{ width: '340px' }} className="flex hover:cursor-pointer flex-col bg-gray hover:bg-gray-100 p-8 mb-8 rounded-xl drop-shadow-xl h-10 items-center justify-center">
                <div className="flex flex-row">
                    <i className="text-4xl text-sky-800 fa fa-group"></i>
                    <div className="flex flex-col items-center">
                        <span className="ml-4 font-medium">{ vacantes.op2Title }</span>
                        <div className="flex flex-row">
                            <span className='text-xs'>{ vacantes.op2Description }&nbsp;&nbsp;</span>
                            <i className="text-blue-600 text-xs fa fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
    
</div>

    </PageLayout>
  )
}

export default VacantesPage