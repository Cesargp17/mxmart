import React from 'react'

export const HeaderSections = ({ portada, titulo, titulo2, descripcion, isDifferent = false, texto3 }) => {
  return (
    <>
    {
       isDifferent === false
       ? (
        <div>
            <section style={{backgroundImage: `url(${ portada })`, paddingTop: '120px', paddingBottom: '80px'}}>
                <div style={{opacity: '0', backgroundColor: 'rgb(32, 99, 138)'}}></div>
                    <div style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }} className="montserrat col-md-8 col-md-offset-2 text-xs-center">
                        <h1 className='text-white' style={{marginBottom: '20px', fontSize: '48px'}}>{ titulo } { titulo2 ? <br /> : null } { titulo2 ? titulo2 : null }</h1>
                        <div ><h2 style={{ fontSize: '30px', color: 'white' }}>{ descripcion }</h2></div>
                        <h2 className='text-white mt-6 text-lg'>{ texto3 }</h2>
                    </div>
            </section>
        </div>
       ) : (
        <div className="vacantes-bkg" data-rv-view="100" style={{backgroundImage: `url(${ portada })`}}>
            <div className="vacantes-title text-center">
                <h1 className='text-white font-medium' style={{fontSize: '36px'}}>{ titulo } { titulo2 ? <br /> : null } { titulo2 ? titulo2 : null }</h1>
                <h2>{ descripcion }</h2> 
            </div>
        </div>
       )
    }
    </>
  )
}
