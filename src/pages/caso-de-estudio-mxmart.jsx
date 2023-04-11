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
    { id: 1, titulo: 'Amazon EC2', img: 'https://mxmartsolutions.com/assets/images/AWS-Amplify.png', link: 'https://aws.amazon.com/es/ec2/' },
    { id: 2, titulo: 'Amazon ELB', img: 'https://mxmartsolutions.com/assets/images/AWS_Elastic-Load-Balancing.png', link: 'https://aws.amazon.com/es/elasticloadbalancing/' },
    { id: 3, titulo: 'Amazon RDS', img: 'https://mxmartsolutions.com/assets/images/AWS_RDS.png', link: 'https://aws.amazon.com/es/rds/' },
    { id: 4, titulo: 'Amazon ElastiCache', img: 'https://mxmartsolutions.com/assets/images/Amazon-ElastiCache.png', link: 'https://aws.amazon.com/es/elasticache/' },
    { id: 5, titulo: 'AWS Lambda', img: 'https://mxmartsolutions.com/assets/images/AWS_Lambda.png', link: 'https://aws.amazon.com/es/lambda/' },
]

const CasoMxmartPage = () => {
  return (
    <PageLayout title={'Ecommerce montado en AWS | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/mxmart_cover.png'}
        titulo={'Caso de Estudio'}
        descripcion={'Ecommerce montado en AWS'}
        texto3={'Mxmart'}
    /> 

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems }/>

            <AcercaDe
                img={'https://mxmartsolutions.com/assets/images/Mxmart.png'}
                title={'Acerca de Mxmart'}
                subtitle={'Mxmart es una empresa mexicana que nace en el año 2014 con el objetivo de llevar la tecnología al alcance de la población en México, desarrollando un comercio electrónico de cómputo y tecnología que actualmente ofrece más de 15,000 productos, distribuidos en 10 categorías provenientes de más de 300 fabricantes de tecnología, todo esto con de entregas a nivel nacional y con el apoyo de mayoristas de cómputo.'}
            />

            <Desafio
                text={'El comercio electrónico durante los últimos años ha venido evolucionando y acelerando las ventas a través de internet desde cualquier dispositivo y en cualquier horario, todo esto tuvo un incremento acelerado durante el año 2020, motivo por el cual era necesario invertir en una infraestructura tecnológica segura, escalable y con alta disponibilidad para ofrecer la mejor experiencia hacia el cliente. La migración tuvo varios retos, entre ellos el cambio de plataforma, la migración de la información y las bases de datos, el desarrollo de nuevas API´s, Web Services, la integración de nuevas funcionalidades y tecnologías. Otro de los desafíos era el tema del almacenamiento y distribución del contenido por la cantidad de gráficos que se manejan, todo esto sin dejar a un lado la optimización de recursos y costos.'}
            />

            <PorqueAWS
                text={`Mxmart llegó a la conclusión de que la solución que necesitaba debería estar basada en un entorno de nube, al analizar distintos proveedores encontró que Amazon Web Services ofrece las herramientas y servicios necesarios para la solución que buscaba. La seguridad como parte de los servicios en la nube es fundamental, AWS ofrece servicios especializados para este propósito, así como servicios que nos permiten mantener nuestra operación de manera automatizada y sin necesidad de aprovisionar recursos innecesarios. La escalabilidad y elasticidad de los servicios nos permiten la flexibilidad de administrar las cargas de trabajo durante cualquier temporada o evento masivo sin preocuparnos por la infraestructura tecnológica.`}
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">La solución</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    La arquitectura está diseñada para desplegarse de manera automatizada en seis diferentes zonas de disponibilidad
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/about-aws/global-infrastructure/regions_az/' target='_blank'> (AZ), </Link>
                    gracias a balanceadores de carga internos y externos, logrando con esto una alta disponibilidad de los servicios, las instancias de cómputo se encuentran dentro de subredes privadas mediante Amazon VPC por temas de seguridad.

                    <br /><br />

                    Dentro de una instancia
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/ec2/' target='_blank'> EC2 </Link>
                    se ha instalado Varnish Cache que es un acelerador de aplicaciones web, configurado para almacenar en caché una copia de los recursos solicitados. En esta misma instancia se encuentra el motor de búsqueda y analítica de Elasticsearch que otorgan una mayor velocidad y eficiencia en las búsquedas de información.

                    <br /><br />

                    Para mejorar los tiempos de respuesta de las peticiones y el rendimiento de la plataforma se implementó el servicio de
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/elasticache/' target='_blank'> ElastiCache </Link> con 
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/redis/' target='_blank'> Redis </Link>
                    como almacén de cache en memoria, mejorando así la experiencia del usuario.

                    <br /><br />

                    Respecto al almacenamiento de contenidos, se cuenta con buckets de
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/s3/' target='_blank'> Amazon S3 </Link>
                    para el contenido estático y el contenido multimedia, que a su vez disponen de una exposición global gracias a los
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/cloudfront/features/?nc=sn&loc=2' target='_blank'> Edges Locations </Link>
                    y su distribución a través de Amazon CloudFront, todo con niveles de seguridad de los servicios como
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/waf/' target='_blank'> AWS WAF, </Link>
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/shield/' target='_blank'> AWS Shield y </Link>
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/certificate-manager/' target='_blank'> Certificate Manager </Link>
                    para los certificados de seguridad.

                    <br /><br />

                    El desarrollo de los procesos internos del sistema fue generado con códigos de programación y ejecutados a través de
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/lambda/' target='_blank'> AWS Lambda, </Link>
                    lo que permite una mayor eficiencia de los procesos dentro de la arquitectura, de la misma forma
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/rds/' target='_blank'> Amazon RDS </Link>
                    nos permite administrar las diferentes bases de datos de manera eficiente y escalable.
                    </p>
                    
                </div>
            </div>

            <Diagrama/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">Los beneficios</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                Al tener la tienda virtual en una infraestructura de la nube de AWS, Mxmart puede obtener el mayor rendimiento de su nueva plataforma de comercio electrónico, así como agregar una gran cantidad de nuevos productos y servicios, también expandir su mercado hacia otras áreas sin verse limitado por la infraestructura tecnológica, esto da paso hacia la innovación de nuevos modelos de negocio y de expansión hacia un mercado que seguirá creciendo.
                <br /><br />
                Los beneficios no sólo han sido tecnológicos, sino que también han sido operativos y económicos, logrando una mayor productividad y reducción de costos, pagando únicamente por el tiempo utilizado de los servicios.
                </p>
            </div>

            <Mxmart/>

        </div>
    </div>

    </PageLayout>
  )
}

export default CasoMxmartPage