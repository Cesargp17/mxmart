import Link from 'next/link'
import React from 'react'

export const FrameworkHeader = ({ img, pageNumber, title, subtitle }) => {
  return (
    <>
    <div className='h-[220px] flex flex-col items-center justify-center' style={{backgroundImage: `url( ${ img } )`}}>
      <h1 className='text-[36px] text-white text-center mt-auto'>{ title }</h1>
      <h2 className='text-center text-white text-[14px]'>{ subtitle }</h2>
      <div className="framework-paginas mt-auto flex">
            <Link className={`${ pageNumber === 1 ? 'f-on' : 'f-off' }`} href="/framework"></Link>
            <Link className={`${ pageNumber === 2 ? 'f-on' : 'f-off' }`} href="/framework-seguridad"></Link>
            <Link className={`${ pageNumber === 3 ? 'f-on' : 'f-off' }`} href="/framework-arquitectura"></Link>
            <Link className={`${ pageNumber === 4 ? 'f-on' : 'f-off' }`} href="/framework-recuperacion-ante-desastres"></Link>
            <Link className={`${ pageNumber === 5 ? 'f-on' : 'f-off' }`} href="/framework-desarrollo"></Link>
            <Link className={`${ pageNumber === 6 ? 'f-on' : 'f-off' }`} href="/framework-automatizacion"></Link>
            <Link className={`${ pageNumber === 7 ? 'f-on' : 'f-off' }`} href="/framework-analitica-datos"></Link>
        </div>
    </div>
    {/* <div className="framework-png-bkg" data-rv-view="100" style={{backgroundImage: `url( ${ img } )`}}>
      <br />
        <div className="framework-title">
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2> 
        </div>

        <div className="framework-paginas">
            <Link className={`${ pageNumber === 1 ? 'f-on' : 'f-off' }`} href="/framework"></Link>
            <Link className={`${ pageNumber === 2 ? 'f-on' : 'f-off' }`} href="/framework-seguridad"></Link>
            <Link className={`${ pageNumber === 3 ? 'f-on' : 'f-off' }`} href="/framework-arquitectura"></Link>
            <Link className={`${ pageNumber === 4 ? 'f-on' : 'f-off' }`} href="/framework-recuperacion-ante-desastres"></Link>
            <Link className={`${ pageNumber === 5 ? 'f-on' : 'f-off' }`} href="/framework-desarrollo"></Link>
            <Link className={`${ pageNumber === 6 ? 'f-on' : 'f-off' }`} href="/framework-automatizacion"></Link>
            <Link className={`${ pageNumber === 7 ? 'f-on' : 'f-off' }`} href="/framework-analitica-datos"></Link>
        </div>
    </div> */}
    </>
  )
}
