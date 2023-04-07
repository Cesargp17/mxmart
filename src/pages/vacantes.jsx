import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { useRouter } from 'next/router'
import React from 'react'

const VacantesPage = () => {

    const router = useRouter();

  return (
    <PageLayout title={'Trabaja con nosotros | Mxmart Solutions'} isWhite={ true }>

    <HeaderSections
        portada={'/images/Vacantes-BKG.png'}
        titulo={'Únete a nuestro equipo'}
        descripcion={'Descubre nuestras vacantes disponibles'}
        isDifferent={ true }
    />

<div className="flex justify-center bg-white">
    
    <div className="container max-w-6xl mt-8">
        <h2 className='text-center text-2xl font-medium mt-8'>Oportunidades: </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-12 mb-12">
            <div onClick={ () => router.push('/vacante-desarrollador') } style={{ width: '340px' }} className="flex hover:cursor-pointer flex-col bg-gray hover:bg-gray-100 p-8 mb-8 rounded-xl drop-shadow-xl h-10 items-center justify-center">
                <div className="flex flex-row">
                    <i className="fa fa-laptop text-4xl text-sky-800"></i>
                    <div className="flex flex-col items-center">
                        <span className="ml-4 font-medium">Desarrollador de software</span>
                        <div className="flex flex-row">
                            <span>Ver más información&nbsp;&nbsp;</span>
                            <i className="fa fa-arrow-right mt-1"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={ () => router.push('/vacante-ingeniero-preventa') } style={{ width: '340px' }} className="flex hover:cursor-pointer flex-col bg-gray hover:bg-gray-100 p-8 mb-8 rounded-xl drop-shadow-xl h-10 items-center justify-center">
                <div className="flex flex-row">
                    <i className="fa fa-group text-4xl text-sky-800"></i>
                    <div className="flex flex-col items-center">
                        <span className="ml-4 font-medium">Ingeniero de preventa TI</span>
                        <div className="flex flex-row">
                            <span>Ver más información&nbsp;&nbsp;</span>
                            <i className="fa fa-arrow-right mt-1"></i>
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