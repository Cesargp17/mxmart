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
    { id: 2, titulo: 'Amazon WorkSpaces', img: 'https://mxmartsolutions.com/assets/images/Amazon-WorkSpaces.png', link: 'https://aws.amazon.com/es/workspaces/' },
    { id: 3, titulo: 'WorkDocs', img: 'https://mxmartsolutions.com/assets/images/Amazon-WorkDocs.png', link: 'https://aws.amazon.com/es/workdocs/' },
]

const CasoFinecPage = () => {
  return (
    <PageLayout title={'Escritorios virtuales en Amazon Web Services | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/sean-pollock-phyq704ffda-unsplash-2000x1333.png'}
        titulo={'Caso de Estudio'}
        descripcion={'Escritorios virtuales en Amazon Web Services'}
        texto3={'Finec Asset Management'}
    />

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems } cols={3}/>

            <AcercaDe
                img={'https://mxmartsolutions.com/assets/images/finec_logo.jpg'}
                title={'Acerca de Finec Asset Management '}
                subtitle={'Finec Servicios es una empresa que brinda soporte e infraestructura a una firma independiente de asesores de inversión especialistas en finanzas corporativas y patrimoniales. Con más de 20 años de experiencia, y vínculos establecidos en países de gran importancia en el mundo financiero (USA, Suiza, Luxemburgo y Panamá), continúan con su propósito de asesorar a empresarios e inversionistas en la región de Jalisco y la ciudad de México principalmente.'}
            />

            <Desafio
                text={'Por su expansión en la Ciudad de México, la Asesora de inversiones necesitaba crear una infraestructura de TI segura, confiable y eficiente en donde tuviera su información en un servidor físico en la Ciudad de México y poder acceder a ella desde su sede en Guadalajara o desde cualquier otro lugar. También necesitaba una solución dinámica para sus colaboradores, en donde la información que manejaran estuviera sincronizada, sin poner en riesgo la seguridad de sus datos. '}
            />

            <PorqueAWS
                text={`Finec Servicios entendía que la solución que buscaba debería estar basada en un entorno en la nube, después de analizar distintas opciones, decidió que Amazon Web Services ofrecía las herramientas y servicios necesarios para la solución que buscaba. Mxmart al ser un proveedor con el conocimiento y la experiencia necesaria fue elegido para trabajar con el proyecto, ya que planteaba la mejor arquitectura y diseño para el despliegue de la solución. `}
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">La solución</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    La ejecución de sus sistemas se basa en servidores virtuales
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/ec2/' target='_blank'> (EC2), </Link>
                    en conjunto con escritorios virtuales <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/workspaces/' target='_blank'>  ( Amazon Workspaces) </Link>
                    que utilizan los colaboradores para un trabajo de colaboración, todo esto dentro de un entorno seguro, flexible y sincronizado con otros servidores dentro de la compañía, permitiendo así cumplir con los mayores estándares de seguridad y confidencialidad. Así mismo se tiene configurada la sincronización y respaldos de la información, el monitoreo automático del entorno en la nube, pudiendo así responder de manera eficiente ante cualquier contingencia. 
                    </p>
                </div>
            </div>

            <Diagrama img={'arquitectura-finec_w.png'}/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">Los beneficios</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                Al tener su infraestructura en nube con Amazon Web Services, Finec Servicios ahorra en gran medida con los costos de servidores físicos, infraestructura de data center, energía eléctrica, mantenimientos, red, seguridad, en fin, todo lo que conlleva tener al 100% la infraestructura on premise. 
                <br /><br />
                Los responsables de tecnologías de información tienen el control de la infraestructura desde cualquier lugar y momento, así como también los colaboradores pueden acceder a su información de manera segura desde cualquier sitio. 
                <br /><br />
                El crecimiento de la compañía en cuanto a información, oficinas o colaboradores se permite realizar de manera dinámica, ya que la solución es completamente escalable y replicable para cualquier requerimiento tecnológico a futuro.  
                </p>
            </div>

            <Mxmart/>
        
        </div>
    </div>

    </PageLayout>
  )
}

export default CasoFinecPage