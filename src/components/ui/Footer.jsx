import React, { useContext } from 'react'
import { FooterContent } from './FooterContent'
import { LanguageContext } from '@/context/LanguageContext';

export const Footer = () => {

    //Contexto que trae la logica de la traduccion del sitio
    const { footer } = useContext( LanguageContext );

  return (
    <>
    <section id="main_h">
        <div className="side_a">
            <div className="title">
                    <div className="flex items-center mt-10 text-center">
                        <h2 className='text-3xl lg:text-5xl text-white font-bold' data-aos="fade-up" data-aos-duration="1500">{ footer.contactanos }</h2>
                        <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" width={17} height={25} className="arrow_mxmart "/>
                    </div>
                <p data-aos="fade-up" data-aos-duration="1500 ">{ footer.description }</p>    
            </div>
            <div className="content">
                <div data-aos="fade-up" data-aos-duration="1500 " className="row">
                    <img src="/images/map-pin.svg " alt="" height="30px" width='30px'/>
                    <p>Av. Labna #1530 Col. Mirador del Sol<br/>C.P. 45054, Zapopan, Jalisco, México.</p>
                </div>
                <div data-aos="fade-up " data-aos-duration="1500 " className="row">
                    <img src="/images/at-sign.svg " alt="" height="30px" width='30px'/>
                    <p>proyectos@mxmart.mx<br/>33 3271 2247</p>
                </div>
            </div>
        </div>
            <div className="side_b" data-aos="fade-up" data-aos-duration="1500 ">
                <section className="form" group="Form" plugins="formstyler,datepicker " style={{background:'none !important'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto mbr-form contact-form " data-form-type="formoid " style={{padding:'0 !important',width:'100%'}}>
                                <form className="mbr-form form-with-styler " data-form-title="Contacto|Mxmart Empresarial ">
                                    <div className="form-row ">
                                        <div hidden data-form-alert="" className="alert alert-success col-12 " id="succes_message_contact ">¡Gracias por tu mensaje! Le daremos seguimiento y nos contactaremos contigo.</div>
                                        <div hidden data-form-alert-danger="" className="alert alert-danger col-12 " id="error_message_contact ">Oops...! Algo salió mal!</div>
                                    </div>
                                    <div className="dragArea form-row">
                                        <div className="form-row-mx">
                                            <div className="col-lg-6 col-md-12 col-sm-12 form-group form-input-mx " data-for="Nombre ">
                                                <input onChange={ () => console.log('Hola') } type="text " name="Nombre " placeholder={ footer.nombre } data-form-field="Nombre " required="required " className="form-control" value="" id="Nombre-formbuilder-br" />
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 form-group form-input-mx " data-for="Email ">
                                                <input onChange={ () => console.log('Hola') } type="email" name="Email " placeholder="Email*" data-form-field="Email " required="required " className="form-control" value="" id="Email-formbuilder-br" />
                                            </div>
                                        </div>
                                        <div data-for="Teléfono" className="col-lg-6 col-md-12 col-sm-12 form-group " style={{display:'none'}}>
                                            <input onChange={ () => console.log('Hola') } type="tel" name="Teléfono " placeholder="Teléfono " data-form-field="Teléfono " className="form-control" value="Vacío" id="Teléfono-formbuilder-br" />
                                        </div>
                                        <div data-for="Empresa" className="col-lg-6 col-md-12 col-sm-12 form-group " style={{display:'none'}}>
                                            <input onChange={ () => console.log('Hola') } type="text" name="Empresa " placeholder="Empresa " data-form-field="Empresa " className="form-control" value="Vacío" id="Empresa-formbuilder-br" />
                                        </div>
                                        <div data-for="Mensaje" className="col-lg-12 col-md-12 col-sm-12 form-group ">
                                            <textarea onChange={ () => console.log('Hola') } name="Mensaje" placeholder={ footer.mensaje } data-form-field="Mensaje" className="form-control " id="Mensaje-formbuilder-br"></textarea>
                                        </div>
                                        <div className="captcha_div">
                                            <div id="captcha" className="col-xs-12 g-recaptcha g-recaptcha-response-required" data-sitekey="6Lduvh4bAAAAAMJ1A507Jv02dPbhtpNpsU8fRGxT " required=""></div>
                                            <div className="col-auto">
                                                <button type="submit" className="btn btn-primary btn-contact">{ footer.enviar } </button>
                                                <div id="errorFormulario" style={{float:'right'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <input type="hidden " value="esp " id="idioma_hidden "/> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    </section>
    
    <FooterContent/>

    </>
  )
}
