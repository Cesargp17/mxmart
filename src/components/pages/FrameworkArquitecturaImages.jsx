import React from 'react'

export const FrameworkArquitecturaImages = ({ img, title }) => {
  return (
    <div className="f-servicio">
        <img src={`${ img }`}alt="" height="48px" width='48px'/>
        <p>{ title }</p>
    </div>
  )
}
