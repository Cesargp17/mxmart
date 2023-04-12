import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import Link from 'next/link';
import React from 'react'

const firstItems = [
    { id: 1, title: 'Continuidad de los servicios', icon: 'fas fa-walking' },
    { id: 2, title: 'Proteger la institución de fallas generales en los servicios informáticos', icon: 'fas fa-shield-alt' },
    { id: 3, title: 'Minimizar los riesgos generados por la falta de servicios', icon: 'fas fa-balance-scale-left' },
    { id: 4, title: 'Garantizar el acceso de la información', icon: 'fas fa-sign-in-alt' },
    { id: 5, title: 'Mantener la disponibilidad de los recursos informáticos', icon: 'fas fa-tachometer-alt' },
    { id: 6, title: 'Minimizar la toma de decisiones erróneas al presentarse algún desastre', icon: 'fas fa-user-shield' },
    { id: 7, title: 'Atención continua a los clientes, proveedores, accionistas, colaboradores', icon: 'fas fa-headset' },
    { id: 8, title: 'Capacidad de recuperación exitosa', icon: 'fas fa-history' },
];

const DrpPage = () => {
  return (
    <PageLayout title={'Recuperación ante Desastres | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/Mxmart_DRP.png'}
        titulo={'Recuperación ante Desastres'}
        texto3={'Potenciamos el éxito de su empresa'}
    /> 

    <div className="flex justify-center bg-white">  
        <div className="container max-w-6xl mb-20 mt-20">

            <p className='p-4'>
            Como parte de la seguridad informática es importante considerar siempre un DR (Recuperación ante Desastres) que ayuda a reducir al máximo los efectos de un desastre en las funciones de las organizaciones, ante cualquier eventualidad, poder ser capaces de reanudar rápidamente las funciones de la organización.
            <br /><br />
            El 70% de instituciones en Latinoamérica no tienen un plan de continuidad, y ante cualquier eventualidad, solamente el 18% de la información es la que pueden recuperar sin un Plan de Continuidad. Contar con un DR reducirá el riesgo de parar operaciones y garantizará la continuidad de la organización.
            </p>

            <h3 className='text-center text-3xl mb-6 mt-20'>Beneficios de implementar un DR</h3>

            <div className="flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 mb-20">
                {
                    firstItems.map( item=> (
                    <div key={ item.id } className='mx-auto flex flex-col items-center'>
                        <i className={`${ item.icon } text-sky-800 text-6xl mt-8 self-center`} aria-hidden="true"></i>
                        <p className='mx-auto text-md mt-6 text-center w-[150px]'>{ item.title }</p>
                    </div>
                    ))
                }
            </div>

            <hr className='mt-10 mb-10' />

            <p className='p-4'>
            El primer paso para una estrategia de recuperación de desastres es tener copias de seguridad y componentes de cargas de trabajo redundantes. Establecer objetivos de tiempo y punto de recuperación mismos que se establecen en función de la ubicación y la función de los recursos y los datos de la carga de trabajo.
            <br /><br />
            Es importante utilizar estrategias de recuperación definidas para cumplir los objetivos de recuperación, probar la implementación de recuperación de desastres (para validar la implementación haga pruebas regularmente). Administre la desviación de configuración en el sitio o región DR: Asegúrese de que su infraestructura, sus datos y su configuración se encuentren en su sitio o región DR según sea necesario. Con los servicios de AWS configure una recuperación automática.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
                <img
                src="/images/CloudEndure.png"
                className="w-full lg:w-[400px]"
                />
                <p className="p-8 text-gray-900 text-lg">
                Servicios como <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/cloudendure-disaster-recovery/' target='_blank'> AWS Elastic Disaster Recovery (AWS DRS) </Link>
                minimiza el tiempo de inactividad y la pérdida de datos con una recuperación rápida y confiable de las aplicaciones en las instalaciones y las que estén basadas en la nube a través de almacenamiento asequible, informática mínima y recuperación a un momento dado. Reduzca sus costos mediante la eliminación de los recursos del sitio de recuperación inactivo, y solo pague por la totalidad de su sitio de recuperación de desastres cuando sea necesario.
                </p>
            </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default DrpPage