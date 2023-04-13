import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useRouter } from 'next/router';
import { AppLocaleContext } from '@/context/AppLocaleContext';
// ..

export const PageLayout = ({ children, title, isWhite, isHome = false }) => {

    const { asPath }= useRouter();
    const { lang } = useContext( AppLocaleContext );

    useEffect(() => {
        AOS.init();
    }, [])
    

  return (
    <>
        <Head>
            <title>{ title }</title>
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
