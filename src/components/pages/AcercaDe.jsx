import React from 'react'

export const AcercaDe = ({ img, title, subtitle, width = 'w-[380px]', height = 'h-[200px]' }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-5">
        <div className="flex flex-col lg:flex-row items-center">    
            <img
            src={ img }
            className={`${ width } ${ height } mt-10 mx-auto border border-gray-300 bg-gray-50 ms-20 mr-4`}
            />

        <div className="flex flex-col">
            <h3 className="font-normal text-3xl mt-10 mb-2 lg:ms-20">{ title }</h3>
                <p className="mt-4 font-light text-lg pr-2 lg:ms-20">
                { subtitle }
                </p>
            </div>
        </div>
    </div>
  )
}
