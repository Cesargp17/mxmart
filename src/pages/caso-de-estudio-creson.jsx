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
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const navItems = [
    { id: 1, titulo: 'Amazon EC2', img: '/images/AWS_EC2.png', link: 'https://aws.amazon.com/es/ec2/' },
    { id: 2, titulo: 'Amazon CloudFront', img: '/images/AWS_CloudFront.png', link: 'https://aws.amazon.com/es/cloudfront/' },
    { id: 3, titulo: 'Amazon Aurora', img: '/images/AWS_Aurora_Serverless.png', link: 'https://aws.amazon.com/es/rds/aurora/serverless/' },
    { id: 4, titulo: 'AWS Backup', img: '/images/AWS_Backup.png', link: 'https://aws.amazon.com/es/backup/' },
    { id: 5, titulo: 'AWS WAF', img: '/images/AWS_Web_Applicatioon_Firewall.png', link: 'https://aws.amazon.com/es/waf/' },
]

const CasoCresonPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { casoCreson } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ casoCreson.metaTitle }
        subtitle={ casoCreson.metaDescription }
    >

    <HeaderSections
        portada={'/images/creson-cover.png'}
        titulo={ casoCreson.title }
        descripcion={ casoCreson.title2 }
        texto3={ casoCreson.subtitle }
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'/images/creson-logo.png'}
                title={ casoCreson.acerca }
                subtitle={ casoCreson.description }
            />

            <Desafio
                text={ casoCreson.description2 }
            />

            <PorqueAWS
                text={ casoCreson.description3 }
            />

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoCreson.title3 }</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                { casoCreson.t1 }
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/elasticache/redis/' target='_blank'> ElastiCache </Link>
                { casoCreson.t2 } <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/efs/' target='_blank'>  Elastic File System, </Link>
                { casoCreson.t3 }
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/rds/aurora/serverless/' target='_blank'> Aurora Serverless </Link>
                { casoCreson.t4 }

                <br /><br />

                { casoCreson.t5 }
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/waf/' target='_blank'> Web Application Firewall </Link>
                { casoCreson.t6 }
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/certificate-manager/' target='_blank'> Certificate Manager </Link>
                { casoCreson.t7 }

                <br /><br />

                { casoCreson.t8 } <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/elasticloadbalancing/' target='_blank'> Elastic Load Balancer </Link>
                { casoCreson.t9 }
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/autoscaling/' target='_blank'> Auto Scaling Groups, </Link>
                { casoCreson.t10 }

                </p>
            </div>

            <Diagrama text={ casoCreson.diagrama }/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoCreson.title4 }</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                { casoCreson.description4 }
                </p>
            </div>

            <Mxmart/>

        </div>
    </div>

    </PageLayout>
  )
}

export default CasoCresonPage