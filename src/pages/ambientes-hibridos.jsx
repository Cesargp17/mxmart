import { PageLayout } from '@/components/layout/PageLayout'
import { Diagrama } from '@/components/pages/Diagrama'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react'

const AmbientesHibridosPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { ambientesHibridos } = useContext( LanguageContext );

    //arreglo que sirve para mapear los elementos de la seccion servicios
    const servicios = [
        { id: 1, title: 'AWS Outposts', description: ambientesHibridos.s1, img: '/images/AWS_Outposts.png', href: 'https://aws.amazon.com/es/outposts/' },
        { id: 2, title: 'Amazon EC2', description: ambientesHibridos.s2, img: '/images/AWS_EC2.png', href: 'https://aws.amazon.com/es/ec2/' },
        { id: 3, title: 'Amazon EBS', description: ambientesHibridos.s3, img: '/images/Amazon_EBS.png', href: 'https://aws.amazon.com/es/ebs/' },
        { id: 4, title: 'Amazon EKS', description: ambientesHibridos.s4, img: '/images/Amazon_EKS.png', href: 'https://aws.amazon.com/es/eks/' },
        { id: 5, title: 'Amazon RDS', description: ambientesHibridos.s5, img: '/images/AWS_RDS.png', href: 'https://aws.amazon.com/es/rds/' },
        { id: 6, title: 'AWS Direct Connect', description: ambientesHibridos.s6, img: '/images/AWS_Direct_Connect.png', href: 'https://aws.amazon.com/es/directconnect/?nc1=h_ls' },
    ];

  return (
    <PageLayout 
        title={ ambientesHibridos.metaTitle }
        description={ ambientesHibridos.metaDescription }
    >

    <HeaderSections
        portada={'/images/Mxmart_Ambientes.png'}
        titulo={ ambientesHibridos.title }
        texto3={ ambientesHibridos.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-10">

            <p className='p-4'>
            { ambientesHibridos.description }
            <br /><br />
            { ambientesHibridos.description2 }
            <br /><br />
            { ambientesHibridos.description3 }
            </p>

            <Diagrama img={'Ambiente-hibrido-Diagrama.png'} text={ ambientesHibridos.diagrama }/>

            <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2 mt-20 items-center'>
                <div className='border-r border-solid border-gray pl-4'>
                    <h3 className='text-center text-2xl mb-4'>{ ambientesHibridos.title2 }</h3>

                    <ul className='ms-10 mt-6 list-disc p-10'>
                        <li className='text-lg'>{ ambientesHibridos.v1 }</li>
                        <li className='text-lg'>{ ambientesHibridos.v2 }</li>
                        <li className='text-lg'>{ ambientesHibridos.v3 }</li>
                        <li className="text-lg">{ ambientesHibridos.v4 }</li>
                        <li className="text-lg">{ ambientesHibridos.v5 }</li>
                        <li className="text-lg">{ ambientesHibridos.v6 }</li>
                        <li className="text-lg">{ ambientesHibridos.v7 }</li>
                    </ul>
                </div>

                <hr className='transform mb-10 mt-10 lg:mb-0 lg:mt-0 rotate-0 lg:rotate-90 lg:hidden' />
                
                <div className='mx-auto'>
                    <h3 className='text-center text-2xl mb-4'>{ ambientesHibridos.title3 }</h3>

                    <img src="/images/Framework-02_1.png" width='400px' alt="" />
                </div>
            </div>

            <hr className='mt-10 mb-10' />

            <h3 className='text-center text-3xl mb-6 mt-20'>{ ambientesHibridos.title4 }</h3>

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