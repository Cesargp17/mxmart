import Link from 'next/link'
import React from 'react'

export const CasosHeader = ({ items, cols = 5 }) => {
  return (
  <div className="flex justify-center">
    <div className={`grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-${ cols } mb-5`}>
      {
        items.map( item => (
          <Link href={ item.link } target='_blank'  key={ item.id } className="flex flex-row items-center justify-center cursor-pointer hover:font-medium">
            <img src={ item.img } width='50px' height='50px' />
            <span className='text-lg'>{ item.titulo }</span>
          </Link>
        ))
      }
    </div>
  </div>

  )
}
