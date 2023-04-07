import React from 'react'

export const FooterContent = () => {
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
            <a href="">
                <span>Casos de éxito</span>
            </a>
            <img src="/images/square.svg " width="4px " alt=""/>
            <a href="">
                <span>Partners</span>
            </a>
        </div>
        <hr/>
        <div className="disclaimer_block ">
            <span>©2014-2023 MXMART DE MEXICO SA DE CV</span>
            <a href="">
                <span>Política de privacidad y cookies</span>     
            </a>
        </div>
    </footer> 
  )
}
