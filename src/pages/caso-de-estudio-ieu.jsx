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
    { id: 1, titulo: 'Amazon Amplify', img: 'https://mxmartsolutions.com/assets/images/AWS-Amplify.png', link: 'https://aws.amazon.com/es/amplify/' },
    { id: 2, titulo: 'Amazon API Gateway', img: 'https://mxmartsolutions.com/assets/images/Amazon-API-Gateway.png', link: 'https://aws.amazon.com/es/api-gateway/' },
    { id: 3, titulo: 'Amazon CloudFront', img: 'https://mxmartsolutions.com/assets/images/AWS_CloudFront.png', link: 'https://aws.amazon.com/es/cloudfront/' },
    { id: 4, titulo: 'Amazon Aurora', img: 'https://mxmartsolutions.com/assets/images/AWS_Aurora_Serverless.png', link: 'https://aws.amazon.com/es/rds/aurora/serverless/' },
    { id: 5, titulo: 'AWS Lambda', img: 'https://mxmartsolutions.com/assets/images/AWS_Lambda.png', link: 'https://aws.amazon.com/es/lambda/' },
]

const CaseIEUPage = () => {
  return (
    <PageLayout title={'Campus Online basado en AWS | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/IEU_cover.png'}
        titulo={'Caso de Estudio'}
        descripcion={'Campus Online basado en AWS'}
        texto3={'Universidad IEU'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'https://mxmartsolutions.com/assets/images/IEU.png'}
                title={'Acerca de IEU'}
                subtitle={'La Universidad IEU es una universidad mexicana con más de 44 años de existencia, ofrece más de 150 programas educativos entre bachillerato, licenciaturas, maestrías y doctorados, en modalidades presenciales, online y ejecutivas a miles de estudiantes a lo largo de la República Mexicana con el respaldo internacional de Galileo Global Education.'}
            />

            <Desafio
                text={'El Instituto de Estudios Universitarios (IEU) cuenta con más de 15 años de experiencia en educación en línea y con más de 60 programas online a través de la plataforma de gestión de aprendizaje Moodle. La llegada de la pandemia de COVID-19 trajo consigo grandes cambios a los cuales las instituciones educativas tenían que adaptarse, entre ellos, el cierre de planteles educativos para evitar una mayor propagación del virus. IEU necesitaba dar continuidad al plan de estudios a sus alumnos y docentes de manera virtual, así como entregar una plataforma integral, segura y altamente disponible donde se pudiera tener la identidad de la propia institución para generar un paso más natural de las clases presenciales a las clases en línea. Se buscaba que los usuarios pudieran identificarse con el ADN de la Institución, es decir, colores corporativos, logos, diseño del campus; la parte grafica jugo un papel muy importante no sólo en lo visual, sino también en lo funcional.'}
            />

            <PorqueAWS
                text={`El trabajo en equipo que predominó en el proyecto fue clave para la generación de este, ya que los sistemas utilizados por varios años, así como los procesos internos de cada área lo hacían un reto muy interesante para integrarlo de manera adecuada. Así mismo, la arquitectura diseñada debía contar con todos los estándares de seguridad, conectividad y autenticación de los usuarios, y al mismo tiempo ser automática y escalable para soportar las cargas de trabajo. Mxmart, en conjunto con el Instituto de Estudios Universitarios, iniciaron el plan de trabajo para el diseño, desarrollo e integración de los diferentes sistemas y orígenes de datos, así como la generación de una arquitectura en AWS que fuera segura, eficiente, optimizada y escalable, capaz de interactuar con alrededor de 20,000 usuarios. Todo esto llevando a cabo una integración hacia sus diferentes plataformas LMS (Sistema de gestión de aprendizaje) para creación de contenido e-learning y la distribución de las actividades de formación académica.`}
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">La solución</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    La arquitectura fue diseñada en alta disponibilidad para desplegarse en una región que cuenta con
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/about-aws/global-infrastructure/regions_az/?p=ngi&loc=2' target='_blank'> seis zonas de disponibilidad (AZ) </Link>
                    y hacerlo de manera automatizada.

                    <br /><br />

                    Los servicios se encuentran generados dentro de un
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/vpc/' target='_blank'> Amazon Virtual Private Cloud (Amazon VPC), </Link>
                    aprovechando subredes públicas y privadas para temas de seguridad, así como una configuración con las mejores prácticas para las aplicaciones, bases de datos e información.

                    <br /><br />

                    Se implementaron diversas capas de seguridad con servicios especializados, grupos de seguridad, roles, así como una integración hacía la plataforma para la autenticación de los usuarios a través de Onelogin el cual fue un requisito por parte del corporativo.

                    <br /><br />

                    El campus online es un hub de información, en donde los alumnos pueden ver la información más relevante en su carrera, como sus cursos, su progreso en el mismo y sus calificaciones. De esta forma el campus debe de comunicarse con múltiples sistemas por medio de API’s,
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/api-gateway/' target='_blank'> Amazon API Gateway </Link>
                    es otro de los principales servicios utilizados, además de la conectividad a múltiples bases de datos, las cuales mucha de esta información es generada en On Premises y en donde la conexión está basada en el servicio de AWS VPN Site to Site en donde contamos con una conexión privada, segura y encriptada, asegurando la transferencia de la información de forma segura.

                    <br /><br />

                    Para que la información del origen fuera consistente, disminuyendo la latencia de transferencia de la información y minimizando cualquier tipo de downtime, se generó una arquitectura de servicios de base de datos en la nube de AWS, en donde pudiera tener la misma información en On Premises, está arquitectura consiste en instancias de base de datos en el Servicio de Amazon Aurora Serverless con un motor de base de PostgreSQL, Instancias de AWS RDS con SQL Server e Instancias Aurora Clúster para servicios de Business Intelligence y para mantener sincronizada las bases de datos On Premises con respecto a su contraparte en AWS, se utilizó el servicio de
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/dms/' target='_blank'> AWS Database Migration Service. </Link>

                    <br /><br />

                    La aplicación está desarrollada utilizando las librerías de AWS Amplify, la cual nos permitió desarrollar el frontend con el Lenguaje de React y el desarrollo del backend utilizando funciones AWS Lambda en varios lenguajes como NodeJs y Python, utilizando el servicio de Aws API Gateway para la generación de múltiples APIs. El almacenamiento de los contenidos se realiza con servicio de Amazon S3, generando una exposición del sitio a nivel global por medio de AmazonCloudFront y asegurando las APIs públicas con AWS WAF.
                    </p>
                    
                </div>
            </div>

            <Diagrama/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">Los beneficios</h3>
                <div className="flex flex-col lg:flex-row items-center justify-between mt-4 ms-20">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={'https://www.youtube.com/embed/qPsfXsJ6ixQ'}
                        allowFullScreen
                        className='w-96 h-56'
                    />
                </div>
                <p className="p-8 text-gray-900 text-lg">
                Teniendo una infraestructura en la nube de AWS el Instituto de Estudios Universitarios cuenta ahora con una plataforma intuitiva con alta disponibilidad, escalabilidad y seguridad donde los más de 15,000 alumnos pueden interactuar con sus maestros para el seguimiento educativo de manera práctica.
                <br /><br />
                Con esta nueva arquitectura y con la creación del Campus Online se mejoró la experiencia de usuario respecto a la interfaz y las pantallas, así como una mayor administración de la solución y del contenido, asegurando una transición suave a la educación en línea. Además, esto fue el primer punto de contacto para generar un convenio colaborativo entre IEU y Amazon Web Services para formar parte de
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