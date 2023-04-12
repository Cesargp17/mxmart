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
    { id: 1, titulo: 'WorkDocs', img: 'https://mxmartsolutions.com/assets/images/Amazon-WorkDocs.png', link: 'https://aws.amazon.com/es/workdocs/' },
    { id: 2, titulo: 'Amazon API Gateway', img: 'https://mxmartsolutions.com/assets/images/Amazon-API-Gateway.png', link: 'https://aws.amazon.com/api-gateway/' },
    { id: 3, titulo: 'AWS Lambda', img: 'https://mxmartsolutions.com/assets/images/AWS_Lambda.png', link: 'https://aws.amazon.com/lambda/' },
]

const CasoErbessdPage = () => {
  return (
    <PageLayout title={'Replicación y Retención de Amazon WorkDocs | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/erbessd-cover.png'}
        titulo={'Caso de Estudio'}
        descripcion={'Replicación y Retención de Amazon WorkDocs'}
        texto3={'ERBESSD Instruments'}
    />

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems } cols={3}/>

            <AcercaDe
                img={'/images/ERBESSD-logo.png'}
                title={'Acerca de ERBESSD'}
                subtitle={'ERBESSD Instruments es una empresa innovadora que desarrolla tecnología de monitoreo de vibración y del estado de maquinaria. Durante más de treinta años, la familia de empresas ERBESSD ha liderado la industria en el suministro de productos de análisis de vibraciones y balanceo dinámico intuitivos y fáciles de usar que facilitan el trabajo y a un precio accesible.'}
                width='w-[400px]'
                height='h-[80px]'
            />

            <Desafio
                text={'Amazon WorkDocs es un servicio completamente administrado y seguro de creación de contenido, almacenamiento y colaboración. Con Amazon WorkDocs, puede crear, editar y compartir contenido de manera sencilla y, como se almacena de manera centralizada en AWS, puede acceder a él desde cualquier lugar o dispositivo. Por medio de Amazon WorkDocs, es fácil colaborar con otras personas, compartir contenido, ofrecer comentarios enriquecedores y editar documentos de manera colaborativa. Por razones de cumplimiento ERBESSD requería que la información almacenada en WorkDocs pueda ser enviada de manera automática a 2 regiones diferentes de la región donde encuentra el sitio de WorkDocs y que pueda retenerse por una periodo de tiempo determinado.'}
            />

            <PorqueAWS
                text={`ERBESSD sabía que la solución que buscaba debería estar en un entorno en la nube, y después de analizar distintos proveedores, ademas de la guia de Mxmart, encontró que Amazon Web Services ofrecía las herramientas y servicios necesarios para la solución que requería.`}
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">La solución</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    Mover manualmente objetos individuales de
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/workdocs/' target='_blank'> Amazon WorkDocs </Link>a
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/s3/' target='_blank'> Amazon S3 </Link>
                    <br /><br />
                    La solucion esta basada en una constante comunicación en donde <Link className='text-sky-700 font-bold' href='Amazon API Gateway' target='_blank'>  Amazon API Gateway </Link>
                    esta escuchando las notificaciones de WorkDocs para procesar todos los eventos generados, Amazon API Gateway esta integrado con
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/sqs/' target='_blank'> Amazon SQS </Link>
                    que pone en cola los eventos de Amazon API Gateway y activa una
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/lambda/' target='_blank'> Lambda </Link>
                    que se encarga de mover los archivos a un bucket S3 previamente creado y configurado. Amazon SQS utiliza una fila para volver a procesar los eventos de la API en caso de que se produzca un fallo al sincronizar los archivos de Amazon WorkDocs con Amazon S3.
                    <br /><br />
                    Finalmente, el bucket S3 en donde llegan los archivos de Amazon WorkDocs esta configurado para replicar de forma asíncrona todos los archivos a otros dos buckets que estab en regiones diferentes.
                    </p>
                </div>
            </div>

            <Diagrama img={'erbessd-arquitectura.png'}/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">Los beneficios</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                La solución permite a ERBESSD centrarse en el análisis de los datos y evitar los esfuerzos manuales de mover los archivos desde Amazon WorkDocs a Amazon S3, ahorrando tiempo y mejorando así la productividad y la eficiencia en general cumpiendo con todos los requesitos de compliance y archivado que necesitaban.
                </p>
            </div>

            <Mxmart/>

        </div>
    </div>

    </PageLayout>
  )
}

export default CasoErbessdPage