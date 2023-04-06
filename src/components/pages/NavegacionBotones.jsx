import Link from 'next/link'
import React from 'react'

export const NavegacionBotones = ({ anterior, siguiente, isMobile }) => {
  return (
    <>
      {
        isMobile
        ? (
          <div class="framework-footer">
            <div class="f-navegacion-movil">
                <Link class='button' href={`${anterior}`}>Anterior</Link>
                <p></p>
                <Link class='button' href={`${siguiente}`}>Siguiente</Link>
            </div>
          </div>
        ) : (
          <div class="f-navegacion">
            <Link class='button' href={`${anterior}`}>Anterior</Link>
            <p></p>
            <Link class='button' href={`${siguiente}`}>Siguiente</Link>
          </div>
        )
      }
    </>
  )
}
