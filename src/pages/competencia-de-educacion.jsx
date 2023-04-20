import { PageLayout } from '@/components/layout/PageLayout'
import { CasosDeExito } from '@/components/pages/CasosDeExito'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const CompetenciaEducacionPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { educacion } = useContext( LanguageContext );

    //Arreglo que mapea las ventajas
    const ventajas = [
        { id: 1, img: '/images/icono-infraestructura.png', text: educacion.ventaja1 },
        { id: 2, img: '/images/icono-ambiente.png', text: educacion.ventaja2 },
        { id: 3, img: '/images/icono-matricula.png', text: educacion.ventaja3 },
        { id: 4, img: '/images/icono-cobertura.png', text: educacion.ventaja4 },
        { id: 5, img: '/images/icono-multisitio.png', text: educacion.ventaja5 },
        { id: 6, img: '/images/icono-plan.png', text: educacion.ventaja6 },
        { id: 7, img: '/images/icono-modelo.png', text: educacion.ventaja7 },
        { id: 8, img: '/images/icono-innovacion.png', text: educacion.ventaja8 },
        { id: 9, img: '/images/icono-alumno.png', text: educacion.ventaja9 },
    ];

  return (
    <PageLayout 
        title={ educacion.metaTitle }
        description={ educacion.metaDescription }
    >

    <HeaderSections
        portada={'/images/competencia_educacion_cover.png'}
        titulo={ educacion.title }
        descripcion={ educacion.subtitle }
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-5xl mt-10">

            <div className="flex flex-col p-5">
                <h3 className='font-normal text-3xl'>{ educacion.t1 }</h3>
                <p className='mt-4 font-light text-lg'>{ educacion.p1 }</p>
            </div>
        
            <div className="flex flex-col lg:flex-row items-center justify-between p-5">
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2">{ educacion.t2 }</h3>
                    <div className="flex flex-col lg:flex-row">
                        <p className="mt-4 font-light text-lg pr-2 lg:mr-20">
                        { educacion.p2 }
                        <br /><br />
                        { educacion.p3 }
                        </p>

                        <img
                        src="/images/badge-education.svg"
                        className="w-[150px] lg:w-[200px] mt-10 mx-auto"
                        />
                    </div>
                </div>
            </div>

            <h3 className='font-normal text-3xl text-center mt-10 mb-20'>{ educacion.t3 }</h3>

            <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 mx-auto'>
                {
                    ventajas.slice(0, 5).map( (ventaja, index) => (
                        <div className={`flex justify-center`}>
                            <div className={`flex flex-col content-center`}>
                                <img className='mx-auto' src={ ventaja.img } width='115px' height='115px' /> 
                                <h4 className='text-center'>{ ventaja.text }</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 mx-auto mt-6'>
                {
                    ventajas.slice(5, 9).map( (ventaja, index) => (
                        <div className={`flex justify-center`}>
                            <div className={`flex flex-col content-center`}>
                                <img className='mx-auto' src={ ventaja.img } width='115px' height='115px' /> 
                                <h4 className='text-center'>{ ventaja.text }</h4>
                            </div>
                        </div>
                    ))
                }
            </div>

        <hr id='casos-de-exito' className='mt-10 mb-10' />

        <CasosDeExito/>

        </div>
    </div>

    </PageLayout>
  )
}

export default CompetenciaEducacionPage