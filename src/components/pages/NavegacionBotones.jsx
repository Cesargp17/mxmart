import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link'
import React, { useContext } from 'react'

export const NavegacionBotones = ({ anterior, siguiente, isMobile }) => {

    //Contexto que trae la logica para el sitio multidioma
    const { framework } = useContext( LanguageContext );

  return (
    <>
      {
        isMobile
        ? (
          <div className="framework-footer">
            <div className="f-navegacion-movil">
                <Link className='button text-center items-center' href={`${anterior}`}>{ framework.buttonAnterior }</Link>
                <p></p>
                <Link className='button text-center items-center' href={`${siguiente}`}>{ framework.buttonSiguiente }</Link>
            </div>
          </div>
        ) : (
          <div className="f-navegacion">
            <Link className='button text-center items-center' href={`${anterior}`}>{ framework.buttonAnterior }</Link>
            <p></p>
            <Link className='button text-center items-center' href={`${siguiente}`}>{ framework.buttonSiguiente }</Link>
          </div>
        )
      }
    </>
  )
}
