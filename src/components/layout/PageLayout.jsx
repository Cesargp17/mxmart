import Head from 'next/head'
import React, { useEffect } from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

const currentUrl = typeof window == 'undefined' ? '' : window.location.origin;

export const PageLayout = ({ children, title, description, isWhite, isHome = false }) => {

    const { asPath }= useRouter();

    useEffect(() => {
        AOS.init();
    }, [])
    

  return (
    <>
        <Head>
            <link rel="canonical" href={`${currentUrl}${ asPath }`} />

            <title>{ title }</title>

            <meta name="title" content={ title }/>
            <meta name="DC.title" content={ title } />
            <meta property="og:title" content={ title }/>

            <meta name="description" content={ description }/>
            <meta property="og:description" content={ description }/>

            <link rel="shortcut icon" href="/images/Mxmart_Empresarial_Favicon.png"/>

            <meta property="og:type" content="tech:company"/>
            <meta property="og:url" content={ currentUrl }/>
            {/* <meta property="og:image" content="/statics/images/Logo-Bip-Charters-Renta-Yates-Puerto-Vallarta.png"/> */}
            <meta property="business:contact_data:street_address" content="Av. Labna #1530 Col. Mirador del Sol"/>
            <meta property="business:contact_data:locality" content="Zapopan"/>
            <meta property="business:contact_data:region" content="Jalisco"/>
            <meta property="business:contact_data:postal_code" content="45054"/>
            <meta property="business:contact_data:country_name" content="Mexico"/>
        </Head>

        <nav>
            <Navbar isHome={ isHome }/>
        </nav>

        <main className={ isWhite && 'bg-white' }>
            { children }
        </main>

        {
            asPath !== '/recursos' && <Footer/>
        }
    </>
  )
}
