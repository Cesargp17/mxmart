import React from 'react'
import { LanguageContext } from './LanguageContext'
import { useRouter } from 'next/router';
import en from '../../public/locale/en';
import es from '../../public/locale/es';

export const LanguageProvider = ({ children }) => {

    const { locale } = useRouter();
    const language = locale === 'en' ? en : es;
    
    const { index, footer, nosotros, navbar } = language;

  return (
    <LanguageContext.Provider value={{
        //Valores
        index,
        footer,
        nosotros,
        navbar,

        //Funciones
    }}>
        { children }
    </LanguageContext.Provider>
  )
}
