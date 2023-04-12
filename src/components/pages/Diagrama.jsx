import React from 'react'

export const Diagrama = ({ img = 'creson-arquitectura.png', text = 'Diagrama de la Arquitectura' }) => {
  return (
    <div className='mt-10'>
        <img src={`/images/${ img }`} alt="" />
        <h4 className='text-center text-gray-400 font-medium'>{ text }</h4>
    </div>
  )
}
