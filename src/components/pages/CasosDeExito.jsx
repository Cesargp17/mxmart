import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link'
import React, { useContext } from 'react'

export const CasosDeExito = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { educacion } = useContext( LanguageContext );

  return (
    <>
            <h3 className='font-normal text-3xl text-center mt-10 mb-20'>{ educacion.casos }</h3>

        <div className="flex justify-center items-center mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-60 min-h-full">
                <Link href="/caso-de-estudio-creson">
                    <img className="rounded-t-lg" src="/images/creson_case.png" alt=""/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-creson">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">{ educacion.caso1 }</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{ educacion.caso1P }</p>
                </div>
            </div>

            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-60 min-h-full">
                <Link href="/caso-de-estudio-unicla">
                    <img className="rounded-t-lg" src="/images/unicla_case.png" alt=""/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-unicla">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">{ educacion.caso2 }</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{ educacion.caso2P }</p>
                </div>
            </div>

            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-60 min-h-full">
                <Link href="/caso-de-estudio-univa">
                    <img className="rounded-t-lg" src="/images/sector_educativo_cover.jpg" alt=""/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-univa">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">{ educacion.caso3 }</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{ educacion.caso3P }</p>
                </div>
            </div>

            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-60 min-h-full">
                <Link href="/caso-de-estudio-ieu">
                    <img className="rounded-t-lg" src="/images/IEU_case.png" alt=""/>
                </Link>
                <div className="p-5">
                    <Link href="/caso-de-estudio-ieu">
                        <h5 className="text-sky-900 font-bold text-md tracking-tight mb-2">{ educacion.caso4 }</h5>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{ educacion.caso4P }</p>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}