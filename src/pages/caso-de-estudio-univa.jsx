import { PageLayout } from '@/components/layout/PageLayout'
import { AcercaDe } from '@/components/pages/AcercaDe'
import { CasosHeader } from '@/components/pages/CasosHeader'
import { Desafio } from '@/components/pages/Desafio'
import { Diagrama } from '@/components/pages/Diagrama'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { Mxmart } from '@/components/pages/Mxmart'
import { PorqueAWS } from '@/components/pages/PorqueAWS'
import Link from 'next/link'
import React from 'react'

const navItems = [
    { id: 1, titulo: 'Amazon EC2', img: 'https://mxmartsolutions.com/assets/images/AWS_EC2.png', link: 'https://aws.amazon.com/es/ec2/' },
    { id: 2, titulo: 'Amazon CloudFront', img: 'https://mxmartsolutions.com/assets/images/AWS_CloudFront.png', link: 'https://aws.amazon.com/es/cloudfront/' },
    { id: 3, titulo: 'Amazon Aurora', img: 'https://mxmartsolutions.com/assets/images/AWS_Aurora_Serverless.png', link: 'https://aws.amazon.com/es/rds/aurora/serverless/' },
    { id: 4, titulo: 'AWS Backup', img: 'https://mxmartsolutions.com/assets/images/AWS_Backup.png', link: 'https://aws.amazon.com/es/backup/' },
    { id: 5, titulo: 'AWS WAF', img: 'https://mxmartsolutions.com/assets/images/AWS_Web_Applicatioon_Firewall.png', link: 'https://aws.amazon.com/es/waf/' },
]

const CasoUnivaPage = () => {
  return (
    <PageLayout title={'Moodle sobre Amazon Web Services | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/sector_educativo_cover.png'}
        titulo={'Caso de Estudio'}
        descripcion={'Moodle sobre Amazon Web Services'}
        texto3={'Universidad del Valle Atemajac'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'https://mxmartsolutions.com/assets/images/UNIVA_logo.png'}
                title={'Acerca de UNIVA'}
                subtitle={'Fundada en 1962, la Universidad del Valle de Atemajac (UNIVA), ofrece servicios educativos de nivel bachillerato, licenciatura, maestría, doctorado, diplomados, talleres, así como educación en línea, ofreciendo a miles de estudiantes cursos en línea en todas sus sedes ubicadas en 6 estados de la República Mexicana, generando una solución a las necesidades sociales de cada región.'}
            />

            <Desafio
                text={'La UNIVA ha implementado educación en línea a través de la plataforma de gestión de aprendizaje, Moodle, así como en diferentes planes de estudio como herramienta de apoyo para alumnos y maestros, además de su programa Univa online en la cual ofrece licenciaturas y posgrados 100% en línea. A medida que aumenta la cantidad de alumnos, maestros y cursos, así como las nuevas modalidades de educación a distancia, la interacción hacía la plataforma es cada vez mayor, por lo cual se necesita una solución tecnológica segura, innovadora, elástica y en alta disponibilidad. Uno de los desafíos más interesantes fue lograr la autenticación de más de 15,000 usuarios del directorio activo con la plataforma de Moodle, esto de manera segura y sincronizada entre los servidores físicos controladores de dominio y los servidores virtuales en la nube de AWS.  '}
            />

            <PorqueAWS
                text={`Después de una revisión profunda de los proyectos presentados por tres proveedores y cada uno planteando la solución en diferentes nubes públicas, se tomó la decisión de trabajar con la nube de Amazon Web Services, esto gracias al trabajo en equipo entre el personal de AWS y el partner Mxmart que siempre estuvieron en comunicación con el cliente para comprender el requerimiento y poder ofrecer la mejor solución tecnológica. Entre varios factores para la toma de decisión cabe mencionar la capacidad, profundidad e innovación constante de los diferentes servicios de AWS que los caracteriza desde 2006, otro factor importante fue el conocimiento y experiencia del partner Mxmart sobre el sistema LMS Moodle ya que esto le permitió generar una arquitectura única en su tipo, pudiendo integrar los servicios más recientes para ofrecer la mejor solución y optimizando los costos de consumo. `}
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">La solución</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    La arquitectura se encuentra configurada con una extensa gama de tecnologías como balanceadores elásticos, sistemas de cache y sesiones por medio de
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/elasticache/redis/' target='_blank'> ElastiCache </Link>
                    con Redis, distribución de información por medio de cluster de <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/efs/' target='_blank'>  Elastic File System, </Link>
                    base de datos elástica la cual se adapta a los requerimientos de las instancias gracias al servicio de
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/rds/aurora/serverless/' target='_blank'> Aurora Serverless </Link>
                    utilizando el motor de PostgreSQL.

                    <br /><br />

                    La arquitectura ha sido creada con la optimización de costos en mente, buscando el balance perfecto en costo-beneficio sin que el desempeño o la disponibilidad de la solución se viera afectada. Tanto el sistema administrativo como el sitio de WordPress han sido migrados a una instancia de
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/ec2/' target='_blank'> EC2 </Link>
                    la cual se encuentra en un <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/autoscaling/' target='_blank'> Auto Scaling Group </Link>
                    que mantiene siempre una instancia en funcionamiento, evitando así tener que lanzar una nueva instancia cada vez que una se detenga, esta nueva instancia que se lanza de manera automática lo hace con un respaldo que
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/backup/' target='_blank'> AWS Backup </Link>
                    realiza en dos ocasiones al día de la propia instancia y de sus dispositivos de almacenamiento, logrando así mantener cierta continuidad.

                    <br /><br />

                    Estas instancias son redirigidas por un <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/elasticloadbalancing/' target='_blank'> Elastic Load Balancer </Link>
                    que a su vez está detrás de distribuciones de
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/cloudfront/' target='_blank'> CloudFront, </Link>
                    protegidas con <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/waf/' target='_blank'> Web Application Firewall </Link>
                    y con certificados SSL gracias a <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/certificate-manager/' target='_blank'> Certificate Manager </Link>
                    garantizando la seguridad de la solución.
                    </p>
                </div>
            </div>

            <Diagrama/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">Los beneficios</h3>
                <div className="flex flex-col lg:flex-row items-center justify-between mt-4 ms-20">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={'https://www.youtube.com/embed/KJHohMpFZc4'}
                        allowFullScreen
                        className='w-96 h-56'
                    />
                </div>
                <p className="p-8 text-gray-900 text-lg">
                Al tener una infraestructura en la nube de AWS con una arquitectura distribuida en diferentes servicios, todos ellos configurados con las mejores prácticas, se está generando un proceso de innovación respecto al esquema tradicional de grandes servidores en donde se concentran todos los procesos, esto es un paso muy importante rumbo a la transformación digital.
                <br /><br />
                Los beneficios no sólo son tecnológicos, sino que también se convierten en una reducción de costos en las diferentes partidas presupuestales de los departamentos, pero sobre todo y lo más importante la experiencia del usuario.
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