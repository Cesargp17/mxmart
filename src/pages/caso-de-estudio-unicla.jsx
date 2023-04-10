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
    { id: 3, titulo: 'AWS Backup', img: 'https://mxmartsolutions.com/assets/images/AWS_Backup.png', link: 'https://aws.amazon.com/es/backup/' },
    { id: 4, titulo: 'AWS WAF', img: 'https://mxmartsolutions.com/assets/images/AWS_Web_Applicatioon_Firewall.png', link: 'https://aws.amazon.com/es/waf/' },
]

const CasoUniclaPage = () => {
  return (
    <PageLayout title={'Sistema de Control Escolar en la nube | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/unicla-cover.png'}
        titulo={'Caso de Estudio'}
        descripcion={'Sistema de Control Escolar en la nube'}
        texto3={'UNICLA'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'https://mxmartsolutions.com/assets/images/unicla-logo.svg'}
                title={'Acerca de UNICLA'}
                subtitle={'La Universidad Contemporánea de las Américas (UNICLA) es una institución educativa cuya oferta académica va desde el bachillerato hasta programas de posgrados en diversas áreas del conocimiento y que busca siempre estar a la vanguardia educativa, con excelencia académica y calidez humana. Con más de 23 planteles a lo largo de México, y una oferta de educación a distancia, UNICLA busca contribuir al desarrollo de una sociedad preparada, justa y equitativa.'}
            />

            <Desafio
                text={'La UNICLA buscaba migrar todo su entorno de soluciones tecnológicas (entre ellas un sistema administrativo de control escolar y un sitio web en WordPress) a la nube para optimizar costos y modernizar el sistema administrativo que habían desarrollado y que no podían continuar actualizando por las limitaciones de servidores físicos.'}
            />

            <PorqueAWS
                text={'La Universidad Contemporánea de las Américas sabía que la nube ofrecía las ventajas de optimización de costos y la liberación de las limitaciones de los servidores físicos, por lo cual después de analizar diferentes nubes públicas y al presentarle una prueba de concepto de su posible arquitectura en AWS llegaron a la conclusión que la nube de AWS tenía justo lo que estaban buscando y veían incluso un mayor potencial.'}
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

            <Diagrama/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">Los beneficios</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                Al tener su infraestructura en la nube de AWS la UNICLA ahorra todos los costos que conlleva tener la infraestructura on premise, pero aún mejor que esto se han deshecho de la limitante que les impedía entrar en un ciclo de mejora continua para su sistema administrativo, ahora pueden sin problema alguno implementar nuevas funcionalidades, actualizar versiones y seguir innovando.
                </p>
            </div>

            <Mxmart/>
        
        </div>
    </div>

    </PageLayout>
  )
}

export default CasoUniclaPage