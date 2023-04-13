import React, { useState } from 'react'
import { AppLocaleContext } from './AppLocaleContext'
import { useRouter } from 'next/router';
import es from '../../public/locale/es';
import en from '../../public/locale/en';
import { useEffect } from 'react';

export const AppLocaleProvider = ({ children }) => {
    
    const [language, setLanguage] = useState('');
    const { push, asPath } = useRouter();

    useEffect(() => {
      setLanguage( window.navigator.language.slice(0,2) === 'es' ? es : en )
    }, [])
    
    const onChangeLangSite = ( lang ) => { 
        push(`/${ lang }/${ asPath.slice(3) }`);
        setLanguage( lang === 'es' ? es : en );
    }

    console.log( language )

  return (
    <AppLocaleContext.Provider value={{ 
        //Valores
        language,
        //Funciones
        onChangeLangSite
     }}>
        { children }
    </AppLocaleContext.Provider>
  )
}
