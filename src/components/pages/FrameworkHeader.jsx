import Link from 'next/link'
import React from 'react'

export const FrameworkHeader = ({ img, pageNumber, title, subtitle }) => {
  return (
    <div class="framework-png-bkg" data-rv-view="100" style={{backgroundImage: `url( ${ img } )`}}>
        <div class="framework-title">
            <h2>{ title }</h2>
            <p>{ subtitle }</p> 
        </div>

        <div class="framework-paginas">
            <Link class={`${ pageNumber === 1 ? 'f-on' : 'f-off' }`} href="/framework"></Link>
            <Link class={`${ pageNumber === 2 ? 'f-on' : 'f-off' }`} href="/framework-seguridad"></Link>
            <Link class={`${ pageNumber === 3 ? 'f-on' : 'f-off' }`} href="/framework-arquitectura"></Link>
            <Link class={`${ pageNumber === 4 ? 'f-on' : 'f-off' }`} href="/framework-recuperacion-ante-desastres"></Link>
            <Link class={`${ pageNumber === 5 ? 'f-on' : 'f-off' }`} href="/framework-desarrollo"></Link>
            <Link class={`${ pageNumber === 6 ? 'f-on' : 'f-off' }`} href="/framework-automatizacion"></Link>
            <Link class={`${ pageNumber === 7 ? 'f-on' : 'f-off' }`} href="/framework-analitica-datos"></Link>
        </div>
    </div>
  )
}
