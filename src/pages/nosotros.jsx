import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const NosotrosPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { nosotros } = useContext( LanguageContext );

  return (
    <PageLayout
        title={nosotros.metaTitle}
        description={nosotros.metaDescription}
    >

    <HeaderSections
        portada={'/images/Mxmart_Empresarial_Nosotros.png'}
        titulo={nosotros.nosotrosTitle}
        descripcion={nosotros.nosotrosDescription}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-5xl">

        <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={'https://www.youtube.com/embed/MUdErMRBh2k'}
                        allowFullScreen
                        className='lg:w-[550px] lg:h-[300px]'
                    />
                </div>
                <p className="p-8 text-gray-900 text-lg">
                { nosotros.p1 }
                <br /><br />
                { nosotros.p2 }
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between">
                <p className="p-8 text-gray-900 text-lg">
                { nosotros.p3 }
                </p>
            </div>


        <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col">
                <h2 className='ms-8 mt-8 font-medium text-2xl'>{ nosotros.t1 }</h2>
                <p className="p-8 text-gray-900 text-lg">
                { nosotros.p4 }
                </p>
            </div>
                <Image
                    src='/images/PublicSectorPartner_ImmersionDayPartner.svg'
                    alt='Mxmart Solutions Public Sector Partner'
                    width={500}
                    height={168}
                    className='lg:p-0 p-8'
                />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:order-1 order-2 w-full lg:p-0 p-8">
                    <Image
                        src='/images/Certificaciones.png'
                        alt='Mxmart Solutions Certificaciones'
                        width={400}
                        height={265}
                    />
                    </div>
                    <div className='max-w-[650px] lg:order-2'>
                    <p className="p-8 text-gray-900 text-lg">
                        { nosotros.p5 }
                    </p>
                    </div>
                </div>
            </div>

            
            <div className="flex flex-col lg:flex-row items-center justify-between mt-4 mb-40">
                <p className="p-8 text-gray-900 text-lg">
                <span className='font-medium text-2xl'>{ nosotros.t2 }</span> <br /><br />
                { nosotros.p6 }
                </p>
                <Image
                    src='/images/AWS-Public-Sector-Rising-Star2.png'
                    alt='Mxmart Solutions AWS Public Sector Rising Star'
                    width={326}
                    height={318}
                />
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 mb-40">
                <div className="flex flex-col gap-6 bg-white p-8 rounded-xl drop-shadow-xl h-56 items-center">
                    <p className="text-gray-500 italic text-center">
                        { nosotros.misionText }
                        <br />
                        <br />
                        <span className='text-sky-800 font-bold'>{ nosotros.mision }</span>
                    </p>
                </div>   

                <div className="flex flex-col gap-6 bg-white p-8 rounded-xl drop-shadow-xl h-56 items-center">
                    <p className="text-gray-500 italic text-center">
                        { nosotros.visionText }
                        <br />
                        <br />
                        <span className='text-sky-800 font-bold'>{ nosotros.vision }</span>
                    </p>
                </div>

                <div className="flex flex-col gap-6 bg-white p-8 rounded-xl drop-shadow-xl h-56 items-center">
                    <p className="text-gray-500 italic text-center">
                        { nosotros.valores1 } <br/>
                        { nosotros.valores2 } <br/>
                        { nosotros.valores3 } <br/>
                        { nosotros.valores4 } <br/>
                        { nosotros.valores5 }
                        <br />
                        <br />
                        <span className='text-sky-800 font-bold'>{ nosotros.valores }</span>
                    </p>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-graduation-cap text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>{ nosotros.eLearning }</span>
                </div>   

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-store-alt text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>{ nosotros.eCommerce }</span>
                </div>  

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-cogs text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>{ nosotros.servicios }</span>
                </div>  
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-laptop-code text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>{ nosotros.desarrollo }</span>
                    <p className='text-center'>
                        { nosotros.desarrollo1 }<br />
                        { nosotros.desarrollo2 }
                    </p>
                </div>   

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-award text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>{ nosotros.poliza }</span>
                </div>  

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fab fa-aws text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>{ nosotros.aws }</span>
                    <p className='text-center'>
                        { nosotros.aws1 }<br />
                        { nosotros.aws2 }<br />
                        { nosotros.aws3 }<br />
                        { nosotros.aws4 }<br />
                        { nosotros.aws5 }<br />
                        { nosotros.aws6 }
                    </p>
                </div><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    </div>


    </PageLayout>
  )
}

export default NosotrosPage