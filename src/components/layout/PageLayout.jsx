import Head from 'next/head'
import React, { useEffect } from 'react'
import { Header } from '../pages/Header'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export const PageLayout = ({
    children,
    title = 'Inicio | Mxmart Solutions'
}) => {

    useEffect(() => {
        AOS.init();
    }, [])
    

  return (
    <>
        <Head>
            <title>{ title }</title>
        </Head>

        <nav>
            <Navbar/>
        </nav>
        <Header/>
        <main>
            { children }
        </main>

        <Footer/>
    </>
  )
}
