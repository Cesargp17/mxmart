import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react'

export const FooterContent = () => {

    //Contexto que trae la logica de la traduccion del sitio
    const { footer } = useContext( LanguageContext );

  return (
    <footer>
        <div className="social_block">
            <a href="https://www.facebook.com/MxmartSolutions/" target="_blank ">
                <div className="facebook_block"></div>
            </a>
            <a href="https://mx.linkedin.com/company/mxmartempresarial" target="_blank ">
                <div className="linkedin_block"></div>
            </a>
            <a href="https://www.youtube.com/user/mxmartmx" target="_blank ">
                <div className="youtube_block"></div>
            </a>
        </div>
        <div className="menu_block">
            <a href='#' onClick={ ( e ) => e.preventDefault() }>
                <span>{ footer.casosExito }</span>
            </a>
            <img src="/images/square.svg " width="4px " alt=""/>
            <a href='#' onClick={ ( e ) => e.preventDefault() }>
                <span>Partners</span>
            </a>
        </div>
        <hr/>
        <div className="disclaimer_block ">
            <span>©2014-2023 MXMART DE MEXICO SA DE CV</span>
            <a href='#' onClick={ ( e ) => e.preventDefault() }>
                <span>{ footer.privacy }</span>     
            </a>
        </div>
    </footer> 
  )
}
