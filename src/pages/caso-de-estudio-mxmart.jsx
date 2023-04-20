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
    { id: 1, titulo: 'Amazon EC2', img: '/images/ec2.png', link: 'https://aws.amazon.com/es/ec2/' },
    { id: 2, titulo: 'Amazon ELB', img: '/images/AWS_Elastic-Load-Balancing.png', link: 'https://aws.amazon.com/es/elasticloadbalancing/' },
    { id: 3, titulo: 'Amazon RDS', img: '/images/AWS_RDS.png', link: 'https://aws.amazon.com/es/rds/' },
    { id: 4, titulo: 'Amazon ElastiCache', img: '/images/elastic.png', link: 'https://aws.amazon.com/es/elasticache/' },
    { id: 5, titulo: 'AWS Lambda', img: '/images/AWS_Lambda.png', link: 'https://aws.amazon.com/es/lambda/' },
]

const CasoMxmartPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { casoMxmart } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ casoMxmart.metaTitle }
        description={ casoMxmart.metaDescription }
    >

    <HeaderSections
        portada={'/images/mxmart_cover.png'}
        titulo={ casoMxmart.title }
        descripcion={ casoMxmart.title2 }
        texto3={'Mxmart'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'/images/Mxmart.png'}
                title={ casoMxmart.title3 }
                subtitle={ casoMxmart.description }
            />

            <Desafio
                text={ casoMxmart.d1 }
                text2={ casoMxmart.d2 }
                text3={ casoMxmart.d3 }
            />

            <PorqueAWS
                text={ casoMxmart.d4 }
                text2={ casoMxmart.d5 }
                text3={ casoMxmart.d6 }
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoMxmart.title6 }</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    { casoMxmart.t1 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/about-aws/global-infrastructure/regions_az/' target='_blank'> (AZ), </Link>
                    { casoMxmart.t2 }

                    <br /><br />

                    { casoMxmart.t3 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/ec2/' target='_blank'> EC2 </Link>
                    { casoMxmart.t4 }

                    <br /><br />

                    { casoMxmart.t5 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/elasticache/' target='_blank'> ElastiCache </Link> { casoMxmart.t6 } 
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/redis/' target='_blank'> Redis </Link>
                    { casoMxmart.t7 }

                    <br /><br />

                    { casoMxmart.t8 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/s3/' target='_blank'> Amazon S3 </Link>
                    { casoMxmart.t10 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/cloudfront/features/?nc=sn&loc=2' target='_blank'> Edges Locations </Link>
                    { casoMxmart.t11 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/cloudfront/' target='_blank'> Amazon CloudFront </Link>
                    { casoMxmart.t12 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/waf/' target='_blank'> AWS WAF, </Link>
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/shield/' target='_blank'> AWS Shield y </Link>
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/certificate-manager/' target='_blank'> Certificate Manager </Link>
                    { casoMxmart.t13 }

                    <br /><br />

                    { casoMxmart.t14 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/lambda/' target='_blank'> AWS Lambda, </Link>
                    { casoMxmart.t15 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/rds/' target='_blank'> Amazon RDS </Link>
                    { casoMxmart.t16 }
                    </p>
                    
                </div>
            </div>

            <Diagrama/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoMxmart.title7 }</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                { casoMxmart.description2 }
                <br /><br />
                { casoMxmart.description3 }
                </p>
            </div>

            <Mxmart/>

        </div>
    </div>

    </PageLayout>
  )
}

export default CasoMxmartPage