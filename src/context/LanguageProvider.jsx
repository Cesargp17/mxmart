import React from 'react'
import { LanguageContext } from './LanguageContext'
import { useRouter } from 'next/router';
import en from '../../public/locale/en';
import es from '../../public/locale/es';

export const LanguageProvider = ({ children }) => {

    const { locale } = useRouter();
    const language = locale === 'en' ? en : es;
    
    const { 
        index, 
        footer, 
        nosotros, 
        framework, 
        frameworkSeguridad, 
        frameworkArquitectura, 
        frameworkDisasterRecovery,
        frameworkDevelopment,
        frameworkAutomatizacion,
        frameworkAnalitica,
        navbar 
      } = language;

  return (
    <LanguageContext.Provider value={{
        //Valores
        index,
        footer,
        nosotros,
        framework,
        frameworkSeguridad,
        frameworkArquitectura,
        frameworkDevelopment,
        frameworkAutomatizacion,
        frameworkAnalitica,
        frameworkDisasterRecovery,
        navbar,

        //Funciones
    }}>
        { children }
    </LanguageContext.Provider>
  )
}
