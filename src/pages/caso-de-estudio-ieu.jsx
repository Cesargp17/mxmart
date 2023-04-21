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
    { id: 1, titulo: 'Amazon Amplify', img: '/images/AWS-Amplify.png', link: 'https://aws.amazon.com/es/amplify/' },
    { id: 2, titulo: 'Amazon API Gateway', img: '/images/Amazon-API-Gateway.png', link: 'https://aws.amazon.com/es/api-gateway/' },
    { id: 3, titulo: 'Amazon CloudFront', img: '/images/AWS_CloudFront.png', link: 'https://aws.amazon.com/es/cloudfront/' },
    { id: 4, titulo: 'Amazon Aurora', img: '/images/AWS_Aurora_Serverless.png', link: 'https://aws.amazon.com/es/rds/aurora/serverless/' },
    { id: 5, titulo: 'AWS Lambda', img: '/images/AWS_Lambda.png', link: 'https://aws.amazon.com/es/lambda/' },
]

const CaseIEUPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { casoIeu } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ casoIeu.metaTitle }
        description={ casoIeu.metaDescription }
    >

    <HeaderSections
        portada={'/images/IEU_cover.png'}
        titulo={ casoIeu.title }
        descripcion={ casoIeu.title2 }
        texto3={'Universidad IEU'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'/images/IEU.png'}
                title={ casoIeu.acerca }
                subtitle={ casoIeu.description }
            />

            <Desafio
                text={ casoIeu.description2 }
                text2={ casoIeu.description3 }
            />

            <PorqueAWS
                text={ casoIeu.description4 }
                text2={ casoIeu.description5 }
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoIeu.title3 }</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    { casoIeu.t1 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/about-aws/global-infrastructure/regions_az/?p=ngi&loc=2' target='_blank'> { casoIeu.link } </Link>
                    { casoIeu.t2 }

                    <br /><br />

                    { casoIeu.t3 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/vpc/' target='_blank'> Amazon Virtual Private Cloud (Amazon VPC), </Link>
                    { casoIeu.t4 }

                    <br /><br />

                    { casoIeu.t5 }

                    <br /><br />

                    { casoIeu.t6 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/api-gateway/' target='_blank'> Amazon API Gateway </Link>
                    { casoIeu.t7 }

                    <br /><br />

                    { casoIeu.t8 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/dms/' target='_blank'> AWS Database Migration Service. </Link>

                    <br /><br />

                    { casoIeu.t9 }
                    </p>
                    
                </div>
            </div>

            <Diagrama text={ casoIeu.diagrama }/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20 text-center">{ casoIeu.title4 }</h3>
                <div className="flex flex-col lg:flex-row items-center justify-between mt-4 ms-20">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={'https://www.youtube.com/embed/qPsfXsJ6ixQ'}
                        allowFullScreen
                        className='w-96 h-56'
                    />
                </div>
                <p className="p-8 text-gray-900 text-lg">
                { casoIeu.description6 }
                <br /><br />
                { casoIeu.description7 }
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/education/awseducate/' target='_blank'> AWS Educate. </Link>
                </p>
            </div>
            </div>

            <Mxmart/>
        
        </div>
    </div>

    </PageLayout>
  )
}

export default CaseIEUPage