import { PageLayout } from '@/components/layout/PageLayout'
import { HeaderSections } from '@/components/pages/HeaderSections'
import { LanguageContext } from '@/context/LanguageContext'
import React, { useContext } from 'react'

const AssesmentsPage = () => {

    //Contexto que trae la logica para el sitio multidioma
    const { assesment } = useContext( LanguageContext );

    //Arreglo que mapea los items
    const items = [
        { id: 1, title: assesment.t1, description: assesment.d1, img: 'Assessment01.png', arrow: true },
        { id: 2, title: assesment.t2, description: assesment.d2, img: 'Assessment02.png', arrow: true },
        { id: 3, title: assesment.t3, description: assesment.d3, img: 'Assessment03.png', arrow: true },
        { id: 4, title: assesment.t4, description: assesment.d4, img: 'Assessment04.png', arrow: true },
        { id: 5, title: assesment.t5, description: assesment.d5, img: 'Assessment05.png', arrow: false },
    ]

  return (
    <PageLayout 
        title={ assesment.metaTitle }
        description={ assesment.metaDescription }
    >
 
    <HeaderSections
        portada={'/images/Assessments.png'}
        titulo={ assesment.title }
        texto3={ assesment.subtitle }
    />

    <div className="flex justify-center bg-white">
        <div className="container max-w-6xl mb-20 mt-20">

        <p className='p-4'>
            { assesment.p1 }
        </p>

        <h3 className='text-center mt-20 text-3xl'>{ assesment.title2 }</h3>

        <div className='flex flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-10 items-center gap-10 mt-10'>
            {
                items.map( item =>(
                <>
                <div key={ item.id } className='bg-gray-50 justify-center items-center flex flex-col p-3 w-[170px] mx-auto h-full'>
                    <img src={`/images/${ item.img }`}  width='110px' height='110px' alt="" />
                    <p className='text-center text-xs'>
                    <span className='font-bold'>{ item.title }</span><br /><br />
                        { item.description }
                    </p>
                </div>
                
                {
                    item.arrow && (
                    <div className="mx-auto">
                        <img className='lg:ms-10 p-6 transform rotate-90 lg:rotate-0' src="/images/Assessment%20-%20row.png" alt="" />
                    </div>
                    )
                }
                </>
                ))
            }
        </div>

    
            <h3 className='font-medium text-2xl mt-20 p-4'>{ assesment.ventajas }</h3>
            <ul className='ms-10 mt-6 list-disc p-4'>
                <li className='text-lg'>{ assesment.ventaja1 }</li>
                <li className='text-lg'>{ assesment.ventaja2 }</li>
                <li className='text-lg'>{ assesment.ventaja3 }</li>
                <li className='text-lg'>{ assesment.ventaja4 }</li>
                <li className='text-lg'>{ assesment.ventaja5 }</li>
            </ul>

        </div>
    </div>

    </PageLayout>
  )
}

export default AssesmentsPage