import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react'

export const Desafio = ({ text, text2, text3 }) => {

    //Contexto que trae la logica para el sitio multidioma
    const { casoMxmart } = useContext( LanguageContext );

  return (
  <div className='p-5'>
      <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoMxmart.title4 }</h3>
      <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
          {text}
          {text2 && (
              <>
                  <br /><br />
                  {text2}
              </>
          )}
          {text3 && (
              <>
                  <br /><br />
                  {text3}
              </>
          )}
      </p>
  </div>
  )
}
