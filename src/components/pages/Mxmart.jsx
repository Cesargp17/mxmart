import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link'
import React, { useContext } from 'react'

export const Mxmart = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { casoMxmart } = useContext( LanguageContext );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-5 mb-10">
        <div className="flex flex-col lg:flex-row items-center">    
            <div className="flex flex-col">
                <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ casoMxmart.title8 }</h3>
                <p className="mt-4 font-light text-lg pr-10 lg:ms-20">
                    { casoMxmart.t17 } <Link className='text-sky-700 font-normal' href='/nosotros'> MXMART </Link> 
                    { casoMxmart.description4 }

                    <br /><br />

                    { casoMxmart.description5 }

                    <br /><br />

                    { casoMxmart.description6 }
                </p>
            </div>
            <img
                src="https://mxmartsolutions.com/assets/images/logo-empresarial-completo-d-510x115.png"
                className="w-[300px] h-[100px] mt-10 mx-auto"
                />
        </div>
    </div>
  )
}
