import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { FooterContent } from '@/components/ui/FooterContent'
import { LanguageContext } from '@/context/LanguageContext'
import axios from 'axios'
import React, { useContext, useState } from 'react'

const RecursosPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { recursos } = useContext( LanguageContext );

    //Estados para manejar el formulario
    const [Libro, setLibro] = useState('Pasos para Migración a la nube');
    const [Nombre, setNombre] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Email, setEmail] = useState('');
    const [Empresa, setEmpresa] = useState('');

    //Estado para saber si el formulario es correcto
    const [hasError, setHasError] = useState({
      error: false,
      msg: ''
    });

    //Funcion para descargar el libro que el usuario seleccionó
    const onDownloadBook = async( e ) => {

      //evitamos el comportamiento por default
      e.preventDefault();

      //expresion regular que valida que el email ingresado sea válido, ejemplo que tenga @ y que termine en
      //gmail.com, outlook.mx, etc..
      const isValidEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

      //esto valida que el email coincida con la expresion regular, si no coincide modificar el estado y evita que el formulario
      //sea enviado
      if( !isValidEmail.test( Email ) ){
        setHasError({
          error: true,
          msg: recursos.emailError
        })
        return;
      };

      //esto valida que los demas campos no queden vacios, si quedan vacios el formulario no se manda
      //y le mandara un mensaje de alerta al usuario en el formulario
      if( Telefono.length <= 0 || Empresa.length <= 0 || Nombre.length <= 0 ){
        setHasError({
          error: true,
          msg: recursos.fieldsError
        })
        return;
      };

      //objeto que guarda el body de la solicitud para descargar el libro
      const params = {
        name: Nombre,
        mail: Email,
        telefono: Telefono,
        empresa: Empresa,
        captcha: 'Estás verificado.',
        ebook: Libro
      };

      try {

        //aqui hacemos la peticion fetch y adjuntamos el body para recibir el libro a descargar
        const { data } = await axios.post('https://1z8h9z2282.execute-api.us-east-1.amazonaws.com/producction/mxmart/recursos', params)
        console.log(data)

        //modificamos el estado de los campos del formulario para que queden limpios
        setNombre('');
        setEmail('');
        setTelefono('');
        setEmpresa('');

        //se limpia el mensaje y el error pasa a falso ya que todo paso correctamente
        setHasError({
          error: false,
          msg: ''
        });

      } catch (error) {
        //aqui se desarrolla la logica si algo en la peticion falla
        console.log(error)
      }
    }

  return (
    <PageLayout 
      title={ recursos.metaTitle }
      description={ recursos.metaDescription }
    >

    <HeaderSections
        portada={'/images/recursos.png'}
        titulo={ recursos.title }
        descripcion={ recursos.subtitle }
    />

<div className="flex justify-center bg-white">
  <div className="container max-w-6xl mt-8">
    <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
      <div className="text-center lg:text-left lg:order-2">
        <img
          src="/images/ebook.png"
          className="max-w-full lg:max-w-[498px]"
          alt='Mxmart Solutions Educación en la nube'
        />
      </div>
      <div className="lg:order-1">
        <h2 className='font-medium text-3xl ms-6 mt-10'>{ recursos.title1 }</h2>
        <p className="p-8 text-lg">
          { recursos.t1p1 } <br /><br />
          { recursos.t1p2 }
        </p>
        <div className="flex ms-6">
          <button className="bg-sky-900 hover:bg-blue-900 text-white py-2 px-4 rounded-md w-48">{ recursos.button }</button>
        </div>
      </div>
    </div>

    <hr />

    <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
      <div className="text-center lg:text-left lg:order-1">
        <img
          src="/images/infografia-1.png"
          className="max-w-full lg:max-w-[498px]"
          alt='Mxmart Solutions Pasos para Migración a la nube'
        />
      </div>
      <div className="lg:order-1">
        <h2 className='font-medium text-3xl ms-6'>{ recursos.title2 }</h2>
        <p className="p-8 text-lg">
          { recursos.t2p1 }
        </p>
        <div className="flex ms-6">
          <button className="bg-sky-900 hover:bg-blue-900 text-white py-2 px-4 rounded-md w-48">{ recursos.button }</button>
        </div>
      </div>
    </div>

    <hr />

    <div className="flex flex-col lg:flex-row items-center justify-between mt-14 mb-8">
      <div className="text-center lg:text-left lg:order-2">
        <img
          src="/images/infografia-2.png"
          className="max-w-full lg:w-[272px]"
          alt='Mxmart Solutions LMS para tu Institución'
        />
      </div>
      <div className="lg:order-1">
        <h2 className='font-medium text-3xl ms-6'>{ recursos.title3 }</h2>
        <p className="p-8 text-lg">
          { recursos.t3p1 }
        </p>
        <div className="flex ms-6">
          <button className="bg-sky-900 hover:bg-blue-900 text-white py-2 px-4 rounded-md w-48">{ recursos.button }</button>
        </div>
      </div>
    </div>

  </div>
</div>

        <section className="form cid-sdYgCVRQX5 p-4" id="formbuilder-8e">
            <div className="container mx-auto max-w-5xl" style={{paddingBottom: '80px', paddingTop: '40px'}}>
               <div className="row">
                  <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">

                     <form onSubmit={ onDownloadBook } className="mbr-form form-with-styler" data-form-title="Formulario Ebook">
                        <input type="hidden" name="email" data-form-email="true" value="L+1m1ejUA5rwAgnm9Zz/vvfrwAUXS1cfSK+Thlzs5kXVvmzb/pV4B34PlhdFb9S+fveq34E9XRGollie4JvGiEky2sEcxiT9o9QwJS8rrB4IftJ7Q28BU/di59G1yWkJ.7bWGoB6xKfeMXAezlc0HCRilV2WfsgvWKC/m+/FqcftgUB715dIv8+x6g7U5f3p8gPCyETWXt2TsbASVSjjbUB6HbDg371Vltzjj4Fy9HNnUsBrCSsMgTSJQIcRTeAdx"/>
                        <div className="form-row">
                           <div hidden="hidden" id="succesMessageDescarga" data-form-alert="" className="alert alert-success col-12"></div>
                           <div hidden="hidden" id="errorMessageDescarga" data-form-alert-danger="" className="alert alert-danger col-12"></div>
                        </div>
                        <div className="dragArea form-row">
                           <div className="col-lg-12 col-md-12 col-sm-12">
                              <h3 className="mbr-fonts-style" style={{color: '#ffffff', fontSize: '30px', fontWeight: '300', marginBottom: '25px'}}>{ recursos.footerTitle }</h3>
                           </div>
                           <div className="col-lg-12 col-md-12 col-sm-12 mb-6">
                              <p className="mbr-fonts-style" style={{marginBottom: '0',color: '#ffffff', fontSize: '17px'}}>{ recursos.footerDescription }</p>
                           </div>
                           <div className="col-lg-12 col-md-12 col-sm-12 mb-6">
                              <hr style={{borderColor:'#3f3f3f'}}/>
                           </div>
                           <div data-for="select" className="col-lg-12 col-md-12 col-sm-12 form-group mb-4">
                              <label className="form-control-label mbr-fonts-style" style={{color: '#ffffff'}}>{ recursos.eBookTitle }</label>
                              <select value={ Libro } onChange={ ( e ) => setLibro( e.target.value ) } name="select" data-form-field="select" required="required" className="form-control text-sm" id="select-formbuilder-8e">
                                 <option value="Pasos para Migración a la nube">{ recursos.book1 }</option>
                                 <option value="Evolucionemos la educación en México">{ recursos.book2 }</option>
                                 <option value="Llevemos la educación del aula a otro plano">{ recursos.book3 }</option>
                              </select>
                           </div>
                           <div data-for="nombre" className="col-lg-12 col-md-12 col-sm-12 form-group form-input mb-4">
                              <input value={ Nombre } onChange={ ( e ) => setNombre( e.target.value ) } type="text" name="nombre" placeholder={ recursos.nombre } data-form-field="nombre" className="form-control text-sm" id="nombre-formbuilder-8e"/>
                           </div>
                           <div data-for="telefono" className="col-lg-12 col-md-12 col-sm-12 form-group form-input mb-4">
                              <input value={ Telefono } onChange={ ( e ) => setTelefono( e.target.value ) } type="tel" name="telefono" placeholder={ recursos.telefono } data-form-field="telefono"  className="form-control text-sm" id="telefono-formbuilder-8e"/>
                           </div>
                           <div className="col-lg-12 col-md-12 col-sm-12 form-group" data-for="email form-input mb-4">
                              <input value={ Email } onChange={ ( e ) => setEmail( e.target.value ) } name="email" placeholder={ recursos.email } data-form-field="email"  className="form-control text-sm" id="email-formbuilder-8e"/>
                           </div>
                           <div data-for="empresa" className="col-lg-12 col-md-12 col-sm-12 form-group form-input mb-4 mt-4">
                              <input value={ Empresa } onChange={ ( e ) => setEmpresa( e.target.value ) } type="text" name="empresa" placeholder={ recursos.empresa } data-form-field="empresa"  className="form-control text-sm" id="empresa-formbuilder-8e"/>
                           </div>
                           <div className="col-auto">
                            <button type='submit' className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 px-10 rounded">
                                { recursos.button }
                            </button>
                           </div>
                           {
                            hasError.error === true && (
                              <div className='bg-red-400 rounded-xl p-4 mt-6'>
                                <h4 className='text-white font-medium text-sm'>{ hasError.msg }</h4>
                              </div>
                            )
                           }
                        </div>
                     </form>
                  </div>
               </div>
            </div>
        </section>

        <FooterContent/>

    </PageLayout>
  )
}

export default RecursosPage