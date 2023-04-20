import { PageLayout } from '@/components/layout/PageLayout'
import { CasosDeExito } from '@/components/pages/CasosDeExito';
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react'

const ELearningPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { eLearning } = useContext( LanguageContext );

    //arreglo para mapear los items de la seccion ideal para
    const firstItems = [
        { id: 1, title: eLearning.s1, icon: 'fas fa-school' },
        { id: 2, title: eLearning.s2, icon: 'fas fa-building' },
        { id: 3, title: eLearning.s3, icon: 'fas fa-university' },
    ];
    
    //arreglo para mapear los items de la seccion Sistema de gestión de aprendizaje
    const secondItems = [
        { id: 1, title: eLearning.g1, icon: 'fas fa-paint-brush' },
        { id: 2, title: eLearning.g2, icon: 'fas fa-sign-in-alt' },
        { id: 3, title: eLearning.g3, icon: 'fas fa-clock' },
        { id: 4, title: eLearning.g4, icon: 'fas fa-users' },
        { id: 5, title: eLearning.g5, icon: 'fas fa-shield-alt' },
    
        { id: 6, title: eLearning.g6, icon: 'fas fa-graduation-cap' },
        { id: 7, title: eLearning.g7, icon: 'fas fa-database' },
        { id: 8, title: eLearning.g8, icon: 'fas fa-envelope-open-text' },
        { id: 9, title: eLearning.g9, icon: 'fas fa-chalkboard-teacher' },
    ];

  return (
    <PageLayout 
        title={ eLearning.metaTitle }
        description={ eLearning.metaDescription }
    >

    <HeaderSections
        portada={'/images/elearning_cover.png'}
        titulo={ eLearning.title }
        texto3={ eLearning.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            { eLearning.description }
        </p>

        <h2 className='text-3xl mb-6 mt-20 ms-4'>{ eLearning.title1 }</h2>
        <p className='p-4'>
            { eLearning.description1 }
        </p>

        <h3 className='text-center text-3xl mb-6 mt-20'>{ eLearning.title2 }</h3>

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
            {
                firstItems.map( item=> (
                <div key={ item.id } className='mx-auto flex flex-col items-center'>
                    <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                    <h4 className='mx-auto text-md mt-6 text-center font-bold w-[300px]'>{ item.title }</h4>
                </div>
                ))
            }
        </div>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
            <div className='border-r border-solid border-gray pl-4'>
                <h3 className='text-center text-2xl mb-4'>{ eLearning.ventajas }</h3>

                <ul className='ms-10 mt-6 list-disc p-10'>
                    <li className='text-lg'>{ eLearning.v1 }</li>
                    <li className='text-lg'>{ eLearning.v2 }</li>
                    <li className='text-lg'>{ eLearning.v3 }</li>
                </ul>
            </div>

            <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
            
            <div className='mx-auto'>
                <h3 className='text-center text-2xl mb-4'>{ eLearning.title3 }</h3>

                <img src="/images/Framework-01_1.png" width='400px' alt="" />
            </div>
        </div>

        <h3 className='text-center text-3xl mb-6 mt-20'>{ eLearning.title4 }</h3>

        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-5 mt-10 gap-4 mb-10">
            {
                secondItems.slice(0,5).map( item=> (
                <div key={ item.id } className='mx-auto flex flex-col items-center'>
                    <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                    <h4 className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</h4>
                </div>
                ))
            }
        </div>
        <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 mb-20">
            {
                secondItems.slice(5,9).map( item=> (
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