import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const AvisoPrivacidadPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { policy } = useContext( LanguageContext );

  return (
    <PageLayout title={ policy.metaTitle } description={ policy.metaDescription }>

    <HeaderSections
        portada={'/images/Mxmart_Empresarial_Aviso_de_Privacidad.png'}
        titulo={ policy.title }
        descripcion={ policy.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-5xl mb-10">

            <div className='flex flex-col md:flex-row justify-center mt-20 p-6'>
                <div className='order-2'>
                    <h2 className='text-center text-sky-700 text-2xl font-bold'>{ policy.title2 }</h2>

                    <p className='mt-6'>
                        { policy.d1 }
                    </p>
                    <h3 className='text-2xl mt-4'>{ policy.title3 }</h3>
                    <p>
                    { policy.d2 }
                    <br id='datos-personales' /><br />
                    { policy.d3 }
                    <Link href='/' className='text-sky-600'>www.mxmartsolutions.com</Link> { policy.d4 }
                    </p>
                    
                    <h3 id='datos-mxmart' className='text-2xl mt-10'>{ policy.title4 }</h3>
                    <p className='mt-2'>
                    { policy.d5 }
                    </p>

                    <h3 id='datos-sensibles' className='text-2xl mt-10'>{ policy.title5 }</h3>
                    <p className='mt-2'>
                    { policy.d6 }
                    <br /><br />
                    { policy.d7 }
                    <br /><br />
                    { policy.d8 }
                    <br /><br />
                    { policy.d9 }
                    </p>

                    <h3 id='obtencion-datos' className='text-2xl mt-10'>{ policy.title6 }</h3>
                    <p className='mt-2'>
                    { policy.d10 }
                    </p>

                    <h3 className='text-2xl mt-10'>{ policy.title7 }</h3>
                    <p className='mt-2'>
                   { policy.d11 }
                    <br /><br />
                    { policy.d12 }
                    <br /><br />
                    { policy.d13 }
                    <br /><br />
                    { policy.d14 }
                    <br /><br />
                    { policy.d15 }
                    <br /><br id='uso-datos' />
                    { policy.d16 }
                    </p>

                    <h3 className='text-2xl mt-10'>{ policy.title8 }</h3>
                    <p className='mt-2'>
                    { policy.d17 }
                    <br /><br />
                    { policy.d18 }
                    <br /><br />
                    { policy.d19 }
                    <br /><br />
                    { policy.d20 }
                    <br /><br id='transferencia' />
                    { policy.d21 }
                    </p>

                    <h3 className='text-2xl mt-10'>{ policy.title9 }</h3>
                    <p className='mt-2'>
                    { policy.d22 }
                    <br /><br />
                    { policy.d23 }
                    <br /><br />
                    { policy.d24 }
                    <br /><br id='arco' />
                    { policy.d25 }
                    </p>

                    <h3 className='text-2xl mt-10'>{ policy.title10 }</h3>
                    <p className='mt-2'>
                    { policy.d26 }
                    <a className='text-sky-600' href="mailto:proyectos@mxmart.mx"> proyectos@mxmart.mx</a>
                    <br /><br id='dudas' />
                    { policy.d27 }
                    </p>

                    <h3 className='text-2xl mt-10'>{ policy.title11 }</h3>
                    <p className='mt-2'>
                    { policy.d28 }
                    <br /><br />
                    { policy.d29 }
                    <br /><br />
                    { policy.d30 } <a className='text-sky-600' href="mailto:proyectos@mxmart.mx"> proyectos@mxmart.mx</a>
                    <br /><br id='privacidad' />
                    { policy.d31 }
                    <a className='text-sky-600' href="mailto:proyectos@mxmart.mx"> proyectos@mxmart.mx</a>
                    </p>

                    <h3 className='text-2xl mt-10'>{ policy.title12 }</h3>
                    <p className='mt-2'>
                    { policy.d32 }
                    <br /><br />
                    { policy.d33 }
                    <br /><br />
                    { policy.d34 }
                    <br /><br />
                    { policy.d35 }
                    <br /><br />
                    { policy.d36 }
                    <br /><br />
                    { policy.d37 }
                    <br /><br />
                    { policy.d38 }
                    <br /><br />
                    { policy.d39 }
                    <br /><br id='edad' />
                    { policy.d40 }
                    </p>

                    <h3 id='modificaciones' className='text-2xl mt-10'>{ policy.title13 }</h3>
                    <p className='mt-2'>
                    { policy.d41 }
                    </p>

                    <h3 className='text-2xl mt-10'>{ policy.title14 }</h3>
                    <p className='mt-2'>
                    { policy.d42 }
                    <br /><br />
                    { policy.d43 }
                    </p>

                    <h3 className='text-2xl mt-10'>{ policy.title15 }</h3>
                    <p className='mt-2'>
                    { policy.d44 }
                    </p>
                </div>
                <div className='hidden lg:block mr-20'>
                    <ul>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#datos-personales'>{ policy.l1 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#datos-mxmart'>{ policy.l2 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#datos-sensibles'>{ policy.l3 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#obtencion-datos'>{ policy.l4 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#uso-datos'>{ policy.l5 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#transferencia'>{ policy.l6 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#arco'>{ policy.l7 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#dudas'>{ policy.l8 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#privacidad'>{ policy.l9 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#edad'>{ policy.l10 }</Link></li>
                        <li className='w-[200px] mb-3 font-bold text-sky-600 text-sm'><Link href='/aviso-de-privacidad/#modificaciones'>{ policy.l11 }</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

    </PageLayout>
  )
}

export default AvisoPrivacidadPage