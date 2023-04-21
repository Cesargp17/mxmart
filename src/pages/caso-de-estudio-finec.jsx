import { PageLayout } from '@/components/layout/PageLayout'
import { AcercaDe } from '@/components/pages/AcercaDe'
import { CasosHeader } from '@/components/pages/CasosHeader'
import { Desafio } from '@/components/pages/Desafio'
import { Diagrama } from '@/components/pages/Diagrama'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { Mxmart } from '@/components/pages/Mxmart'
import { PorqueAWS } from '@/components/pages/PorqueAWS'
import { LanguageContext } from '@/context/LanguageContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const navItems = [
    { id: 1, titulo: 'Amazon EC2', img: '/images/AWS_EC2.png', link: 'https://aws.amazon.com/es/ec2/' },
    { id: 2, titulo: 'Amazon WorkSpaces', img: '/images/Amazon-WorkSpaces.png', link: 'https://aws.amazon.com/es/workspaces/' },
    { id: 3, titulo: 'WorkDocs', img: '/images/Amazon-WorkDocs.png', link: 'https://aws.amazon.com/es/workdocs/' },
]

const CasoFinecPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { casoFinec } = useContext( LanguageContext );

  return (
    <PageLayout 
        title={ casoFinec.metaTitle }
        description={ casoFinec.metaDescription }
    >

    <HeaderSections
        portada={'/images/sean-pollock-phyq704ffda-unsplash-2000x1333.png'}
        titulo={ casoFinec.title }
        descripcion={ casoFinec.title2 }
        texto3={'Finec Asset Management'}
    />

    <div className="bg-white flex justify-center">
        <div className="container max-w-7xl">

            <CasosHeader items={ navItems } cols={3}/>

            <AcercaDe
                img={'/images/finec_logo.jpg'}
                title={ casoFinec.acerca }
                subtitle={ casoFinec.description }
            />

            <Desafio
                text={ casoFinec.description2 }
                text2={ casoFinec.description3 }
            />

            <PorqueAWS
                text={ casoFinec.description4 }
            />

            <div className='flex flex-col lg:flex-row p-5'>
                <div className="flex flex-col">
                    <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoFinec.title3 }</h3>
                    <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                    { casoFinec.t1 }
                    <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/ec2/' target='_blank'> (EC2), </Link>
                    { casoFinec.t2 } <Link className='text-sky-700 font-bold' href='https://aws.amazon.com/es/workspaces/' target='_blank'>  ( Amazon Workspaces) </Link>
                    { casoFinec.t3 } 
                    </p>
                </div>
            </div>

            <Diagrama img={'arquitectura-finec_w.png'} text={ casoFinec.diagrama }/>

            <div className='p-5'>
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoFinec.title4 }</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                { casoFinec.description5 }
                <br /><br />
                { casoFinec.description6 }
                <br /><br />
                { casoFinec.description7 }
                </p>
            </div>

            <Mxmart/>
        
        </div>
    </div>

    </PageLayout>
  )
}

export default CasoFinecPage