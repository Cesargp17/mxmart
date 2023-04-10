import { PageLayout } from '@/components/layout/PageLayout'
import { AcercaDe } from '@/components/pages/AcercaDe'
import { CasosHeader } from '@/components/pages/CasosHeader'
import { Desafio } from '@/components/pages/Desafio'
import { Diagrama } from '@/components/pages/Diagrama'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { Mxmart } from '@/components/pages/Mxmart'
import { PorqueAWS } from '@/components/pages/PorqueAWS'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const navItems = [
    { id: 1, titulo: 'Amazon EC2', img: 'https://mxmartsolutions.com/assets/images/AWS_EC2.png', link: 'https://aws.amazon.com/es/ec2/' },
    { id: 2, titulo: 'Amazon CloudFront', img: 'https://mxmartsolutions.com/assets/images/AWS_CloudFront.png', link: 'https://aws.amazon.com/es/cloudfront/' },
    { id: 3, titulo: 'Amazon Aurora', img: 'https://mxmartsolutions.com/assets/images/AWS_Aurora_Serverless.png', link: 'https://aws.amazon.com/es/rds/aurora/serverless/' },
    { id: 4, titulo: 'AWS Backup', img: 'https://mxmartsolutions.com/assets/images/AWS_Backup.png', link: 'https://aws.amazon.com/es/backup/' },
    { id: 5, titulo: 'AWS WAF', img: 'https://mxmartsolutions.com/assets/images/AWS_Web_Applicatioon_Firewall.png', link: 'https://aws.amazon.com/es/waf/' },
]

const CasoCresonPage = () => {

  return (
    <PageLayout title={"Arquitectura de alta disponibilidad para LMS | Mxmart Solutions"}>

    <HeaderSections
        portada={'/images/creson-cover.png'}
        titulo={'Caso de Estudio'}
        descripcion={'Arquitectura de alta disponibilidad para LMS'}
        texto3={'CRESON'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'https://mxmartsolutions.com/assets/images/creson-logo.png'}
                title={'Acerca de CRESON'}
                subtitle={'El Centro Regional de Formación Profesional Docente de Sonora es una institución de educación superior que tiene como responsabilidad esencial garantizar la calidad de la formación docente ejerciendo la rectoría en la formación de profesionales de la educación en el estado de Sonora; comprende la formación inicial, la formación continua y el impulso de los procesos de desarrollo profesional e investigación en materia educativa.'}
            />

            <Desafio
                text={'El constante crecimiento de alumnos, maestros y cursos han generado una alta demanda a los cursos en linea que CRESON ofrece para sus miles de alumnos, estos cursos en linea se ofrecen en la plataforma de LMS Moodle, este crecimiento en la interacción con los múltiples sistemas Moodle de CRESON ha derivado en la necesidad de encontrar una solución tecnológica que permita a CRESON tener sus sistemas con el menor downtime posible, estar siempre disponible y buscar la optimización de costos.'}
            />

            <PorqueAWS
                text={'CRESON llegó a la conclusión de que la solución que buscaba debería estar en un entorno en la nube, después de analizar distintos proveedores encontró que Amazon Web Services ofrecía las herramientas y servicios necesarios para la solución que requería.'}
            />

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">La solución</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                La arquitectura se encuentra configurada con una extensa gama de tecnologías como balanceadores elásticos, sistemas de cache y sesiones por medio de
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/elasticache/redis/' target='_blank'> ElastiCache </Link>
                con Redis, distribución de información por medio de cluster de <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/efs/' target='_blank'>  Elastic File System, </Link>
                base de datos elástica la cual se adapta a los requerimientos de las instancias gracias al servicio de
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/rds/aurora/serverless/' target='_blank'> Aurora Serverless </Link>
                utilizando el motor de PostgreSQL.

                <br /><br />

                El sistema además se encuentra con servicios de seguridad entre estos Security Groups, los cuales actúan como firewall virtuales en donde se restringe el trafico por medio re reglas de puertos y protocolos,
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/waf/' target='_blank'> Web Application Firewall </Link>
                por medio del cual se filtran las peticiones desde el origen pudiendo analizar las mismas y bloquear aquellas que se identifican como riesgos potenciales, además de Subnets privadas en donde la mayoría de la arquitectura se encuentra, con lo cual los servicios no son expuestos directamente al público,
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/certificate-manager/' target='_blank'> Certificate Manager </Link>
                por medio del cual se aplican certificados SSL a todos los sitios por lo cual las peticiones se encuentran encriptadas.

                <br /><br />

                Para tener alta disponibilidad se cuentan con servicios con <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/elasticloadbalancing/' target='_blank'> Elastic Load Balancer </Link>
                por medio del cual se balancean las cargas entre los servidores productivos, y estos a su vez son administrados por
                <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/autoscaling/' target='_blank'> Auto Scaling Groups, </Link>
                los cuales son capaces de conocer su rendimiento e incrementara el numero de instancias cuando se necesita mayor capacidad de computo y la regulación de estas.

                </p>
            </div>

            <Diagrama/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">Los beneficios</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                La arquitectura además de estar preparada para soportar cientos de usuarios simultáneos, también lo esta para configurar múltiples plataformas Moodle, bajo esta misma premisa la arquitectura cuenta con los sitios para 17 planteles. Los beneficios no sólo han sido tecnológicos, sino que también han sido operativos y económicos, logrando una mayor productividad y reducción de costos, pagando únicamente por el tiempo utilizado de los servicios
                </p>
            </div>

            <Mxmart/>

        </div>
    </div>

    </PageLayout>
  )
}

export default CasoCresonPage