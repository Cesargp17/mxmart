import React from 'react'

export const PorqueAWS = ({ text }) => {
  return (
    <div className='p-5'>
        <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">¿Por qué Amazon Web Services?</h3>
        <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
            { text }
        </p>
    </div>
  )
}
