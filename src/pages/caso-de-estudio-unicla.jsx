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
    { id: 3, titulo: 'AWS Backup', img: '/images/AWS_Backup.png', link: 'https://aws.amazon.com/es/backup/' },
    { id: 4, titulo: 'AWS WAF', img: '/images/AWS_Web_Applicatioon_Firewall.png', link: 'https://aws.amazon.com/es/waf/' },
]

const CasoUniclaPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { casoUnicla } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ casoUnicla.metaTitle }
        description={ casoUnicla.metaDescription }
    >

    <HeaderSections
        portada={'/images/unicla-cover.png'}
        titulo={ casoUnicla.title }
        descripcion={ casoUnicla.title2 }
        texto3={'UNICLA'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'/images/unicla-logo.svg'}
                title={ casoUnicla.acerca }
                subtitle={ casoUnicla.description }
            />

            <Desafio
                text={ casoUnicla.description2 }
            />

            <PorqueAWS
                text={ casoUnicla.description3 }
            />

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoUnicla.title3 }</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                { casoUnicla.t1 }
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/ec2/' target='_blank'> EC2 </Link>
                { casoUnicla.t2 } <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/autoscaling/' target='_blank'> Auto Scaling Group </Link>
                { casoUnicla.t3 }
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/backup/' target='_blank'> AWS Backup </Link>
                { casoUnicla.t4 }

                <br /><br />

                { casoUnicla.t5 } <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/elasticloadbalancing/' target='_blank'> Elastic Load Balancer </Link>
                { casoUnicla.t6 }
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/cloudfront/' target='_blank'> CloudFront, </Link>
                { casoUnicla.t7 } <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/waf/' target='_blank'> Web Application Firewall </Link>
                { casoUnicla.t8 } <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/certificate-manager/' target='_blank'> Certificate Manager </Link>
                { casoUnicla.t9 }
                </p>
            </div>

            <Diagrama text={ casoUnicla.diagrama }/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoUnicla.title4 }</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                { casoUnicla.description4 }
                </p>
            </div>

            <Mxmart/>
        
        </div>
    </div>

    </PageLayout>
  )
}

export default CasoUniclaPage