import React from 'react'

export const HeaderSections = ({ portada, titulo, descripcion, isDifferent = false, texto3 }) => {
  return (
    <>
    {
       isDifferent === false
       ? (
        <div>
            <section style={{backgroundImage: `url(${ portada })`, paddingTop: '120px', paddingBottom: '120px'}}>
                <div style={{opacity: '0', backgroundColor: 'rgb(32, 99, 138)'}}></div>
                    <div style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }} className="montserrat col-md-8 col-md-offset-2 text-xs-center">
                        <h3 className='text-white' style={{marginBottom: '20px', fontSize: '48px'}}>{ titulo }</h3>
                        <div ><p style={{ fontSize: '30px', color: 'white' }}>{ descripcion }</p></div>
                        <p className='text-white mt-6 text-lg'>{ texto3 }</p>
                    </div>
            </section>
        </div>
       ) : (
        <div className="vacantes-bkg" data-rv-view="100" style={{backgroundImage: `url(${ portada })`}}>
            <div className="vacantes-title">
                <h2>{ titulo }</h2>
                <p>{ descripcion }</p> 
            </div>
        </div>
       )
    }
    </>
  )
}
