import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { FooterContent } from '@/components/ui/FooterContent'
import React from 'react'

const RecursosPage = () => {
  return (
    <PageLayout title={'Recursos | Mxmart Solutions'}>

    <HeaderSections
        portada={'/images/recursos.png'}
        titulo={'Recursos'}
        descripcion={'Potenciamos el éxito de su empresa'}
    />

<div className="flex justify-center bg-white">
  <div className="container max-w-6xl mt-8">
    <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
      <div className="text-center lg:text-left lg:order-2">
        <img
          src="/images/ebook.png"
          className="max-w-full lg:max-w-[498px]"
        />
      </div>
      <div className="lg:order-1">
        <p className="p-8 text-lg">
          <span className='font-medium text-3xl'>Pasos para Migración a la nube</span><br /><br />
          La migración a Amazon Web Services (AWS) permite a las organizaciones transformar la manera en la que hacen negocios al permitirles acelerar su velocidad para hacer negocios, librándolos de las restricciones de los centros de datos en sitio y ofreciendo la flexibilidad de pagar únicamente por lo que usan.
          Este libro electrónico detallará cómo la adopción de la nube puede ofrecer importantes beneficios empresariales.
        </p>
        <div className="flex ms-6">
          <button className="bg-sky-900 hover:bg-blue-900 text-white py-2 px-4 rounded-md w-48">Descargar</button>
        </div>
      </div>
    </div>

    <hr />

    <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
      <div className="text-center lg:text-left lg:order-1">
        <img
          src="/images/infografia-1.png"
          className="max-w-full lg:max-w-[498px]"
        />
      </div>
      <div className="lg:order-1">
        <p className="p-8 text-lg">
          <span className='font-medium text-3xl'>Educación en la nube</span><br /><br />
          Conoce como optimizar la eficiencia operativa en AWS
        </p>
        <div className="flex ms-6">
          <button className="bg-sky-900 hover:bg-blue-900 text-white py-2 px-4 rounded-md w-48">Descargar</button>
        </div>
      </div>
    </div>

    <hr />

    <div className="flex flex-col lg:flex-row items-center justify-between mt-14 mb-8">
      <div className="text-center lg:text-left lg:order-2">
        <img
          src="/images/infografia-2.png"
          className="max-w-full lg:w-[272px]"
        />
      </div>
      <div className="lg:order-1">
        <p className="p-8 text-lg">
          <span className='font-medium text-3xl'>LMS para tu Institución</span><br /><br />
          Conoce que es un LMS y las soluciones que te pueden ayudan a optimizarlo.
        </p>
        <div className="flex ms-6">
          <button className="bg-sky-900 hover:bg-blue-900 text-white py-2 px-4 rounded-md w-48">Descargar</button>
        </div>
      </div>
    </div>

  </div>
</div>

        <section className="form cid-sdYgCVRQX5 p-4" id="formbuilder-8e">
            <div className="container mx-auto max-w-5xl" style={{paddingBottom: '80px', paddingTop: '40px'}}>
               <div className="row">
                  <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">

                     <form action="" className="mbr-form form-with-styler" data-form-title="Formulario Ebook">
                        <input type="hidden" name="email" data-form-email="true" value="L+1m1ejUA5rwAgnm9Zz/vvfrwAUXS1cfSK+Thlzs5kXVvmzb/pV4B34PlhdFb9S+fveq34E9XRGollie4JvGiEky2sEcxiT9o9QwJS8rrB4IftJ7Q28BU/di59G1yWkJ.7bWGoB6xKfeMXAezlc0HCRilV2WfsgvWKC/m+/FqcftgUB715dIv8+x6g7U5f3p8gPCyETWXt2TsbASVSjjbUB6HbDg371Vltzjj4Fy9HNnUsBrCSsMgTSJQIcRTeAdx"/>
                        <div className="form-row">
                           <div hidden="hidden" id="succesMessageDescarga" data-form-alert="" className="alert alert-success col-12"></div>
                           <div hidden="hidden" id="errorMessageDescarga" data-form-alert-danger="" className="alert alert-danger col-12"></div>
                        </div>
                        <div className="dragArea form-row">
                           <div className="col-lg-12 col-md-12 col-sm-12">
                              <h4 className="mbr-fonts-style" style={{color: '#ffffff', fontSize: '30px', fontWeight: '300', marginBottom: '25px'}}>Descargar gratis</h4>
                           </div>
                           <div className="col-lg-12 col-md-12 col-sm-12 mb-6">
                              <p className="mbr-fonts-style" style={{marginBottom: '0',color: '#ffffff', fontSize: '17px'}}>Completa el siguiente formulario para recibir el material</p>
                           </div>
                           <div className="col-lg-12 col-md-12 col-sm-12 mb-6">
                              <hr style={{borderColor:'#3f3f3f'}}/>
                           </div>
                           <div data-for="select" className="col-lg-12 col-md-12 col-sm-12 form-group mb-4">
                              <label className="form-control-label mbr-fonts-style" style={{color: '#ffffff'}}>Seleccione el Ebook que desea descargar</label>
                              <select onChange={ () => console.log('Hola') } name="select" data-form-field="select" required="required" className="form-control text-sm" id="select-formbuilder-8e">
                                 <option value="Pasos para Migración a la nube">Pasos para Migración a la nube</option>
                                 <option value="Evolucionemos la educación en México">Educación en la nube</option>
                                 <option value="Llevemos la educación del aula a otro plano">LMS para tu  Institución</option>
                              </select>
                           </div>
                           <div data-for="nombre" className="col-lg-12 col-md-12 col-sm-12 form-group form-input mb-4">
                              <input onChange={ () => console.log('Hola') } type="text" name="nombre" placeholder="Nombre*" data-form-field="nombre" className="form-control text-sm" required="required" value="" id="nombre-formbuilder-8e"/>
                           </div>
                           <div data-for="telefono" className="col-lg-12 col-md-12 col-sm-12 form-group form-input mb-4">
                              <input onChange={ () => console.log('Hola') } type="tel" name="telefono" placeholder="Teléfono*" data-form-field="telefono" required="required" className="form-control text-sm" value="" id="telefono-formbuilder-8e"/>
                           </div>
                           <div className="col-lg-12 col-md-12 col-sm-12 form-group" data-for="email form-input mb-4">
                              <input onChange={ () => console.log('Hola') } type="email" name="email" placeholder="Email*" data-form-field="email" required="required" className="form-control text-sm" value="" id="email-formbuilder-8e"/>
                           </div>
                           <div data-for="empresa" className="col-lg-12 col-md-12 col-sm-12 form-group form-input mb-4 mt-4">
                              <input onChange={ () => console.log('Hola') } type="text" name="empresa" placeholder="Empresa*" data-form-field="empresa" required="required" className="form-control text-sm" value="" id="empresa-formbuilder-8e"/>
                           </div>
                           <div className="col-auto">
                            <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 px-10 rounded">
                                Descargar
                            </button>
                           </div>
                        </div>
                        <div className="form-row">
                            <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12" id="error_ebook">Error</div>
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