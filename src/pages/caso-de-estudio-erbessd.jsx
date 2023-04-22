import { PageLayout } from '@/components/layout/PageLayout'
import { AcercaDe } from '@/components/pages/AcercaDe'
import { CasosHeader } from '@/components/pages/CasosHeader'
import { Desafio } from '@/components/pages/Desafio'
import { Diagrama } from '@/components/pages/Diagrama'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { Mxmart } from '@/components/pages/Mxmart'
import { PorqueAWS } from '@/components/pages/PorqueAWS'
import { LanguageContext } from '@/context/LanguageContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const navItems = [
    { id: 1, titulo: 'WorkDocs', img: '/images/Amazon-WorkDocs.png', link: 'https://aws.amazon.com/es/workdocs/' },
    { id: 2, titulo: 'Amazon API Gateway', img: '/images/Amazon-API-Gateway.png', link: 'https://aws.amazon.com/api-gateway/' },
    { id: 3, titulo: 'AWS Lambda', img: '/images/AWS_Lambda.png', link: 'https://aws.amazon.com/lambda/' },
]

const CasoErbessdPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { casoErbessd } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ casoErbessd.metaTitle }
        description={ casoErbessd.metaDescription }
    >

    <HeaderSections
        portada={'/images/erbessd-cover.png'}
        titulo={ casoErbessd.title }
        descripcion={ casoErbessd.title2 }
        texto3={'ERBESSD Instruments'}
    />

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems } cols={3}/>

            <AcercaDe
                img={'/images/ERBESSD-logo.png'}
                title={ casoErbessd.acerca }
                subtitle={ casoErbessd.description }
                width='w-[400px]'
                height='h-[80px]'
            />

            <Desafio
                text={ casoErbessd.description2 }
                text2={ casoErbessd.description3 }
            />

            <PorqueAWS
                text={ casoErbessd.description4 }
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoErbessd.title3 }</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    { casoErbessd.t1 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/workdocs/' target='_blank'> Amazon WorkDocs </Link>{ casoErbessd.t2 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/s3/' target='_blank'> Amazon S3 </Link>
                    { casoErbessd.t3 } 
                    <br /><br />

                    { casoErbessd.t4 }
                    <Link className='text-sky-700 font-bold' href='Amazon API Gateway' target='_blank'>  Amazon API Gateway </Link>
                    { casoErbessd.t5 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/sqs/' target='_blank'> Amazon SQS </Link>
                    { casoErbessd.t6 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/lambda/' target='_blank'> Lambda </Link>
                    { casoErbessd.t7 }
                    <br /><br />
                    { casoErbessd.t8 }
                    </p>
                </div>
            </div>

            <Diagrama img={'erbessd-arquitectura.png'} text={ casoErbessd.diagrama }/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoErbessd.title4 }</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                { casoErbessd.description5 }
                </p>
            </div>

            <Mxmart/>

        </div>
    </div>

    </PageLayout>
  )
}

export default CasoErbessdPage