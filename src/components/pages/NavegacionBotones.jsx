import Link from 'next/link'
import React from 'react'

export const NavegacionBotones = ({ anterior, siguiente, isMobile }) => {
  return (
    <>
      {
        isMobile
        ? (
          <div className="framework-footer">
            <div className="f-navegacion-movil">
                <Link className='button' href={`${anterior}`}>Anterior</Link>
                <p></p>
                <Link className='button' href={`${siguiente}`}>Siguiente</Link>
            </div>
          </div>
        ) : (
          <div className="f-navegacion">
            <Link className='button' href={`${anterior}`}>Anterior</Link>
            <p></p>
            <Link className='button' href={`${siguiente}`}>Siguiente</Link>
          </div>
        )
      }
    </>
  )
}
