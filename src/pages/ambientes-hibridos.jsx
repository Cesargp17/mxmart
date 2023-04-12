import { PageLayout } from '@/components/layout/PageLayout'
import { Diagrama } from '@/components/pages/Diagrama'
import { HeaderSections } from '@/components/pages/HeaderSections'
import React from 'react'

const servicios = [
    { id: 1, title: 'AWS Outposts', description: 'Ejecute infraestructura y servicios de AWS localmente para una experiencia híbrida verdaderamente establ', img: '/images/AWS_Outposts.png', href: 'https://aws.amazon.com/es/outposts/' },
    { id: 2, title: 'Amazon EC2', description: 'Capacidad de cómputo de tamaño variable en la nube.', img: '/images/AWS_EC2.png', href: 'https://aws.amazon.com/es/ec2/' },
    { id: 3, title: 'Amazon EBS', description: 'Continuidad empresarial escalable y rentable para servidores físicos, virtuales y en la nube', img: '/images/Amazon_EBS.png', href: 'https://aws.amazon.com/es/ebs/' },
    { id: 4, title: 'Amazon EKS', description: 'Acelere el aprovisionamiento en la nube con infrastructure as code', img: '/images/Amazon_EKS.png', href: 'https://aws.amazon.com/es/eks/' },
    { id: 5, title: 'Amazon RDS', description: 'Servicio de bases de datos relacionales administrado para MySQL, PostgreSQL, MariaDB, Oracle BYOL o SQL Server.', img: '/images/AWS_RDS.png', href: 'https://aws.amazon.com/es/rds/' },
    { id: 6, title: 'AWS Direct Connect', description: 'Una solución de servicios en la nube que facilita el establecimiento de una conexión de red exclusiva entre un entorno local y AWS', img: '/images/AWS_Direct_Connect.png', href: 'https://aws.amazon.com/es/directconnect/?nc1=h_ls' },
];

const AmbientesHibridosPage = () => {
  return (
    <PageLayout title={'Ambientes Híbridos | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/Mxmart_Ambientes.png'}
        titulo={'Ambientes Híbridos'}
        texto3={'Potenciamos el éxito de su empresa'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-10">

            <p className='p-4'>
            Los ambientes híbridos pueden implementarse cuando se requiere seguir con algunas cargas de trabajo en un servidor on-premise pero otras aplicaciones o servicios requieren ir a la nube, lo cual facilita el acceso a centros de datos on-premise sin perderse de los beneficios en la nube.
            <br /><br />
            Las arquitecturas de nube híbrida ayudan a las organizaciones a integrar sus operaciones en las instalaciones y en la nube para admitir un amplio espectro de casos de uso mediante un conjunto común de servicios, herramientas y API en la nube en entornos en las instalaciones y en la nube.
            <br /><br />
            Manejamos soluciones que brinda a prácticamente cualquier centro de datos, espacio de coubicación o instalación local la misma infraestructura, servicios, API, herramientas de administración, soporte y modelo operativo de AWS. Puede ejecutar Amazon EC2, Amazon EBS, servicios basados en contenedores, como Amazon EKS, servicios de bases de datos, como Amazon RDS, en AWS Outposts, y servicios de análisis, como Amazon EMR, de manera local.
            </p>

            <Diagrama img={'Ambiente-hibrido-Diagrama.png'} text={'Diagrama de una arquitectura híbrida simplificada'}/>

            <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
                <div className='border-r border-solid border-gray pl-4'>
                    <h3 className='text-center text-2xl mb-4'>Ventajas de ambientes híbridos</h3>

                    <ul className='ms-10 mt-6 list-disc p-10'>
                        <li className='text-lg'>Trabajo en oficina como en la nube</li>
                        <li className='text-lg'>Seguridad</li>
                        <li className='text-lg'>Un solo punto de autenticación</li>
                        <li className="text-lg">Arquitectura robusta</li>
                        <li className="text-lg">Ambientes Windows y Linux</li>
                        <li className="text-lg">Directorio Activo</li>
                        <li className="text-lg">Utilización de sistemas internos</li>
                    </ul>
                </div>

                <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
                
                <div className='mx-auto'>
                    <h3 className='text-center text-2xl mb-4'>Framework utilizado</h3>

                    <img src="/images/Framework-02_1.png" width='400px' alt="" />
                </div>
            </div>

            <hr className='mt-10 mb-10' />

            <h3 className='text-center text-3xl mb-6 mt-20'>Servicios</h3>

            <div className='flex flex-col lg:flex-row justify-center grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    servicios.map( servicio =>(
                        <a href={ servicio.href } target='_blank' key={servicio.id}>
                            <img className='mx-auto' src={ servicio.img } alt="" width='150px' />
                            <h4 className='text-center font-bold'>{ servicio.title }</h4>
                            <p className='text-center mx-auto w-[300px] mt-2'>{ servicio.description }</p>
                        </a>
                    ))
                }
            </div>

        </div>
    </div>

    </PageLayout>
  )
}
 
export default AmbientesHibridosPage