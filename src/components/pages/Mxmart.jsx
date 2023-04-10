import Link from 'next/link'
import React from 'react'

export const Mxmart = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-5 mb-10">
        <div className="flex flex-col lg:flex-row items-center">    
            <div className="flex flex-col">
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">Acerca de Mxmart Solutions</h3>
                <p className="mt-4 font-light text-lg pr-10 lg:ms-20">
                    En <Link className='text-sky-700 font-normal' href='/nosotros'> MXMART </Link> 
                    nos enfocamos en ofrecerte soluciones tecnológicas de vanguardia a través de nuestros servicios. Estamos comprometidos con nuestros clientes, nos especializamos en el análisis, diseño, arquitectura, generación, implementación y migración de servicios en la nube de Amazon Web Services (AWS).

                    <br /><br />

                    Implementamos y migramos plataformas de E-Learning para instituciones, permitiendo optimizar recursos y costos en la nube. Diseñamos, desarrollamos e implementamos proyectos para E-Commerce en plataformas como Magento, Prestashop y Shopify. Así como la integración de CMS como WordPress y WooCommerce en desarrollos web.

                    <br /><br />

                    Nos gustaría conocer más de su compañía o institución y juntos definir una solución que se adapte a sus necesidades, buscando siempre la innovación.
                </p>
            </div>
            <img
                src="https://mxmartsolutions.com/assets/images/logo-empresarial-completo-d-510x115.png"
                className="w-[300px] h-[100px] mt-10 mx-auto"
                />
        </div>
    </div>
  )
}
