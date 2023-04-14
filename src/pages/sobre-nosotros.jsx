import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import React from 'react'

const NosotrosPage = () => {
  return (
    <PageLayout
        title={'Nosotros | Mxmart Solutions'}
    >

    <HeaderSections
        portada={'/images/Mxmart_Empresarial_Nosotros.png'}
        titulo={'Nosotros'}
        descripcion={'Potenciamos el éxito de su empresa '}
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-5xl">

        <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={'https://www.youtube.com/embed/MUdErMRBh2k'}
                        allowFullScreen
                        className='w-96 h-56'
                    />
                </div>
                <p className="p-8 text-gray-900 text-lg">
                Ofrecemos soluciones que superan las expectativas y objetivos de las empresas gracias a nuestros métodos y estrategias las cuales aplicamos en cada proyecto.
                <br /><br />
                Nuestra misión en Mxmart es ofrecer consultoría y soluciones eficaces e innovadoras que se adapten a las necesidades de las empresas, instituciones educativas, así como otras entidades,
                                    fomentando su crecimiento y desarrollo a través de un equipo profesional con alta capacitación y experiencia.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between">
                <p className="p-8 text-gray-900 text-lg">
                Contamos con la experiencia y especialización en el análisis, diseño, generación de arquitecturas, implementación, migración de servidores, todo hacia la nube de AWS, así como el desarrollo o modernización de aplicaciones gracias a nuestro modelo de trabajo basado en DevOps con microservicios y tecnologías Serverless, ofreciendo compromiso y profesionalismo en cada proyecto.
                </p>
            </div>


        <div className="flex flex-col lg:flex-row items-center justify-between">
                <p className="p-8 text-gray-900 text-lg">
                Contamos con un equipo de trabajo profesional con experiencia de más de 15 años desarrollando e implementando sistemas de comercio electrónico como Magento, PrestaShop y Shopify, así como sistemas LMS como Moodle y Chamilo, también contamos con la experiencia en implementaciones de WordPress, Drupal, entre otros, todos estos sistemas pudiéndose integrar hacia un ERP o la generación de sistemas a la medida, nuestras soluciones avanzadas nos permiten realizar integraciones o migraciones de sistemas hacia la nube o en esquemas híbridos.  
                </p>
                <img
                src="https://mxmartsolutions.com/assets/images/PublicSectorPartner_ImmersionDayPartner.svg"
                className="w-full lg:w-[400px]"
                />
            </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
                <img
                src="https://mxmartsolutions.com/assets/images/Certificaciones.png"
                className="w-full lg:w-[400px]"
                />
                <p className="p-8 text-gray-900 text-lg">
                Contamos con la experiencia y especialización en el análisis, diseño, generación de arquitecturas, implementación, migración de servidores, todo hacia la nube de AWS, así como el desarrollo o modernización de aplicaciones gracias a nuestro modelo de trabajo basado en DevOps con microservicios y tecnologías Serverless, ofreciendo compromiso y profesionalismo en cada proyecto.
                </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between mt-4 mb-40">
                <p className="p-8 text-gray-900 text-lg">
                <span className='font-medium text-2xl'>Reconocimientos de AWS</span> <br /><br />
                En el evento de AWS Partner Summit 2022 México, fuimos sorprendidos gratamente con el reconocimiento AWS Public Sector Rising Star, estamos muy agradecidos de contar con este valioso reconocimiento que significa un gran logro en la trayectoria de Mxmart. Esto ha sido posible gracias a nuestro maravilloso equipo de trabajo y a todos los clientes de Mxmart, así como al gran apoyo recibido por parte del equipo de AWS.
                </p>
                <img
                src="https://mxmartsolutions.com/assets/images/AWS-Public-Sector-Rising-Star2.png"
                className="w-full lg:w-[400px]"
                />
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 mb-40">
                <div className="flex flex-col gap-6 bg-white p-8 rounded-xl drop-shadow-xl h-56 items-center">
                    <p className="text-gray-500 italic text-center">
                        Generar soluciones tecnológicas innovadoras que resuelvan y fomenten la evolución digital de las organizaciones.
                        <br />
                        <br />
                        <span className='text-sky-800 font-bold'>Misión</span>
                    </p>
                </div>   

                <div className="flex flex-col gap-6 bg-white p-8 rounded-xl drop-shadow-xl h-56 items-center">
                    <p className="text-gray-500 italic text-center">
                        Consolidarse a nivel global como proveedor de soluciones y servicios tecnológicos, basados en la innovación, experiencia y conocimiento de nuestro personal certificado.
                        <br />
                        <br />
                        <span className='text-sky-800 font-bold'>Visión</span>
                    </p>
                </div>

                <div className="flex flex-col gap-6 bg-white p-8 rounded-xl drop-shadow-xl h-56 items-center">
                    <p className="text-gray-500 italic text-center">
                        Calidad <br/>
                        Compromiso <br/>
                        Confiabilidad <br/>
                        Colaboración <br/>
                        Continuidad
                        <br />
                        <br />
                        <span className='text-sky-800 font-bold'>Valores</span>
                    </p>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-graduation-cap text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>E-Learning</span>
                </div>   

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-store-alt text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>E-Commerce</span>
                </div>  

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-cogs text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>Servicios avanzados</span>
                </div>  
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-laptop-code text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>Desarrollo</span>
                    <p className='text-center'>
                        Web<br />
                        Aplicaciones móviles
                    </p>
                </div>   

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fas fa-award text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>Pólizas de servicios</span>
                </div>  

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i className="fab fa-aws text-sky-800 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>Amazon Web Services AWS</span>
                    <p className='text-center'>
                        Migración<br />
                        Escritorios Virtuales<br />
                        Bases de datos<br />
                        DRP<br />
                        Servicios de configuración<br /> en la nube<br />
                        Ciberseguridad
                    </p>
                </div><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    </div>


    </PageLayout>
  )
}

export default NosotrosPage