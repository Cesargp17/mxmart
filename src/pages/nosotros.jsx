import { PageLayout } from '@/components/layout/PageLayout'
import React from 'react'

const NosotrosPage = () => {
  return (
    <PageLayout
        title={'Nosotros | Mxmart Solutions'}
    >
        <div>
            <section style={{backgroundImage: 'url(/images/Mxmart_Empresarial_Nosotros.png)', paddingTop: '120px', paddingBottom: '120px'}}>
                <div style={{opacity: '0', backgroundColor: 'rgb(32, 99, 138)'}}></div>
                    <div style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }} class="montserrat col-md-8 col-md-offset-2 text-xs-center">
                        <h3 style={{color: 'white !important', marginBottom: '20px', fontSize: '48px'}}>Nosotros</h3>
                        <div ><p style={{ fontSize: '30px', color: 'white' }}>Potenciamos el éxito de su empresa</p></div>
                    </div>
            </section>
        </div>

    <div class="flex justify-center bg-white p-20">
        <div className="container">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
                <div className="flex flex-col gap-6 bg-white p-8 rounded-xl drop-shadow-xl h-56 items-center">
                    <p className="text-gray-500 italic text-center">
                        Generar soluciones tecnológicas innovadoras que resuelvan y fomenten la evolución digital de las organizaciones.
                        <br />
                        <br />
                        <span className='text-blue-950 font-bold'>Misión</span>
                    </p>
                </div>   

                <div className="flex flex-col gap-6 bg-white p-8 rounded-xl drop-shadow-xl h-56 items-center">
                    <p className="text-gray-500 italic text-center">
                        Consolidarse a nivel global como proveedor de soluciones y servicios tecnológicos, basados en la innovación, experiencia y conocimiento de nuestro personal certificado.
                        <br />
                        <br />
                        <span className='text-blue-950 font-bold'>Visión</span>
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
                        <span className='text-blue-950 font-bold'>Valores</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center bg-white">
        <div className="container">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i class="fas fa-graduation-cap text-blue-700 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>E-Learning</span>
                </div>   

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i class="fas fa-store-alt text-blue-700 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>E-Commerce</span>
                </div>  

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i class="fas fa-cogs text-blue-700 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>Servicios avanzados</span>
                </div>  
            </div>
        </div>
    </div>
    <div class="flex justify-center bg-white pb-40">
        <div className="container">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i class="fas fa-laptop-code text-blue-700 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>Desarrollo</span>
                    <p className='text-center'>
                        Web<br />
                        Aplicaciones móviles
                    </p>
                </div>   

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i class="fab fa-aws text-blue-700 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>Amazon Web Services AWS</span>
                    <p className='text-center'>
                        Migración<br />
                        Escritorios Virtuales<br />
                        Bases de datos<br />
                        DRP<br />
                        Servicios de configuración<br /> en la nube<br />
                        Ciberseguridad
                    </p>
                </div>  

                <div className="flex flex-col gap-6 p-8 h-56 items-center">
                    <i class="fas fa-award text-blue-700 text-6xl"></i>
                    <span className='font-bold text-center mt-2 text-lg'>Pólizas de servicios</span>
                </div>  
            </div>
        </div>
    </div>


    </PageLayout>
  )
}

export default NosotrosPage