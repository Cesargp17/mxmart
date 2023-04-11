import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import React from 'react'

const items = [
    { id: 1, title: 'Optimización y evaluación de licencias', description: 'Evalúa el consumo, costo y aprovisionamiento de las cargas de trabajo en Windows en las instalaciones locales y en AWS', img: 'Assessment01.png', arrow: true },
    { id: 2, title: 'Cargas de trabajo al alcance', description: 'Determinar de que manera se pueden optimizar las cargas de trabajo de forma objetiva', img: 'Assessment02.png', arrow: true },
    { id: 3, title: 'Recolección de datos', description: 'Recopilar los datos que se utilizan para las cargas de trabajo, mediante el servicio de AWS “Migration Evaluator” o herramientas de terceros', img: 'Assessment03.png', arrow: true },
    { id: 4, title: 'Análisis', description: 'Mxmart analizará los datos para poder modelar los posibles escenarios de costos y optimización', img: 'Assessment04.png', arrow: true },
    { id: 5, title: 'Plan', description: 'Revisa los resultados del OLA para la construción del caso de negocios o iniciar una prueba concepto de migración', img: 'Assessment05.png', arrow: false },
]

const AssesmentsPage = () => {
  return (
    <PageLayout title={'Assessments | Mxmart Solutions'}>
 
    <HeaderSections
        portada={'/images/Assessments.png'}
        titulo={'Evaluación de optimización'}
        texto3={'Evaluación y optimización para migración de servidores y licenciamiento.'}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            Es una evaluación y auditoria de la infraestructura tecnológica de los servidores del cliente, en la que se implementa un programa 
            gratuito (AWS OLA) para identificar hallazgos de optimización de infraestructura y licenciamiento justificando una migración hacia 
            la nube de AWS, este programa nos permite evaluar y optimizar entornos locales y en la nube actuales, a través de un agente 
            que recolecta datos en un lapso de tiempo determinado en función de la utilización real de los recursos, las licencias de terceros y las 
            dependencias de las aplicaciones. Para ejecutar esta evaluación se requiere un mínimo de 20 servidores (ya sean físicos o virtuales).
        </p>

        <h3 className='text-center mt-20 text-3xl'>Como funciona:</h3>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-10 items-center gap-10 mt-10'>
            {
                items.map( item =>(
                <>
                <div key={ item.id } className='bg-gray-50 justify-center items-center flex flex-col p-3 w-[170px] mx-auto h-full'>
                    <img src={`/images/${ item.img }`}  width='110px' height='110px' alt="" />
                    <p className='text-center text-xs'>
                    <span className='font-bold'>{ item.title }</span><br /><br />
                        { item.description }
                    </p>
                </div>
                
                {
                    item.arrow && (
                    <div className="mx-auto z-50">
                        <img className='lg:ms-10 p-6 transform rotate-90 lg:rotate-0' src="https://mxmartsolutions.com/assets/images/Assessment%20-%20row.png" alt="" />
                    </div>
                    )
                }
                </>
                ))
            }
        </div>

    
            <h3 className='font-medium text-2xl mt-20 p-4'>Ventajas de las evaluaciones</h3>
            <ul className='ms-10 mt-6 list-disc p-4'>
                <li className='text-lg'>Descubra cargas de trabajo en su entorno local o en la nube y crea un inventario de sus recursos informáticos.</li>
                <li className='text-lg'>Permite determinar sus requisitos de utilización reales para ayudarlo a seleccionar de manera óptima el tamaño y el tipo de instancia de AWS EC2 de menor costo para cada carga de trabajo.</li>
                <li className='text-lg'>Los datos pueden ser usados para determinar la combinación adecuada de instancias puntuales y bajo demanda, hosts dedicados, plan de ahorro y otras opciones adaptadas a su entorno.
                    Reduce costos</li>
                <li className='text-lg'>Con los resultados puede explorar opciones de licencia flexibles</li>
            </ul>

        </div>
    </div>

    </PageLayout>
  )
}

export default AssesmentsPage