import Head from 'next/head'
import React, { useEffect } from 'react'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useRouter } from 'next/router';
// ..

export const PageLayout = ({ children, title, isWhite }) => {

    const { asPath }= useRouter();

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

        <main className={ isWhite && 'bg-white' }>
            { children }
        </main>

        {
            asPath !== '/recursos' && <Footer/>
        }
    </>
  )
}
