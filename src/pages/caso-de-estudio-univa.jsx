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
    { id: 1, titulo: 'Amazon EC2', img: '/images/AWS_EC2.png', link: 'https://aws.amazon.com/es/ec2/' },
    { id: 2, titulo: 'Amazon CloudFront', img: '/images/AWS_CloudFront.png', link: 'https://aws.amazon.com/es/cloudfront/' },
    { id: 3, titulo: 'Amazon Aurora', img: '/images/AWS_Aurora_Serverless.png', link: 'https://aws.amazon.com/es/rds/aurora/serverless/' },
    { id: 4, titulo: 'AWS Backup', img: '/images/AWS_Backup.png', link: 'https://aws.amazon.com/es/backup/' },
    { id: 5, titulo: 'AWS WAF', img: '/images/AWS_Web_Applicatioon_Firewall.png', link: 'https://aws.amazon.com/es/waf/' },
]

const CasoUnivaPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { casoUniva } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ casoUniva.metaTitle }
        description={ casoUniva.metaDescription }
    >

    <HeaderSections
        portada={'/images/sector_educativo_cover.png'}
        titulo={ casoUniva.title }
        descripcion={ casoUniva.title2 }
        texto3={'Universidad del Valle Atemajac'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'/images/UNIVA_logo.png'}
                title={ casoUniva.acerca }
                subtitle={ casoUniva.description }
            />

            <Desafio
                text={ casoUniva.description2 }
                text2={ casoUniva.description3 }
                text3={ casoUniva.description4 }
            />

            <PorqueAWS
                text={ casoUniva.description5 }
                text2={ casoUniva.description6 }
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoUniva.title3 }</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    { casoUniva.t1 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/rds/aurora/serverless/' target='_blank'> Aurora Serverless </Link>
                    { casoUniva.t2 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/efs/' target='_blank'>  Elastic File System, </Link>
                    { casoUniva.t3 }

                    <br /><br />
                    { casoUniva.t4 }

                    <br /><br />
                    { casoUniva.t5 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/redis/' target='_blank'>  Redis </Link>
                    { casoUniva.t6 }

                    <br /><br />
                    { casoUniva.t7 }

                    <br /><br />
                    { casoUniva.t8 }
                    </p>
                </div>
            </div>

            <Diagrama text={ casoUniva.diagrama } />
 
            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoUniva.title4 }</h3>
                <div className="flex flex-col lg:flex-row items-center justify-between mt-4 ms-20">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={'https://www.youtube.com/embed/KJHohMpFZc4'}
                        allowFullScreen
                        className='w-96 h-56'
                    />
                </div>
                <p className="p-8 text-gray-900 text-lg">
                { casoUniva.description7 }
                <br /><br />
                { casoUniva.description8 }
                </p>
            </div>
            </div>

            <Mxmart/>

        </div>
    </div>

    </PageLayout>
  )
}

export default CasoUnivaPage