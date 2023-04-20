import { PageLayout } from '@/components/layout/PageLayout'
import { Header } from '@/components/pages/Header';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image'
import { useRouter } from 'next/router';

    //Arreglos que funcionan para mapear los elementos de la seccion Acerca de Mxmart
    const awsBadges = [
        { id: 1, img: '/images/Badge_AdvancedTierServices.svg', alt: 'Mxmart Solutions AWS Partner Advanced Tier Services' },
        { id: 2, img: '/images/Badge_PublicSector.svg', alt: 'Mxmart Solutions AWS Partner Public Sector' },
        { id: 3, img: '/images/Badge_EducationServices.svg', alt: 'Mxmart Solutions AWS Partner Education Services Competency' },
        { id: 4, img: '/images/Badge_EC2forWindows.svg', alt: 'Mxmart Solutions AWS AmazonEC2 for Windows Server Delivery' },
        { id: 5, img: '/images/Badge_AmazonRDSDelivery.svg', alt: 'Mxmart Solutions AWS RDS Delivery' },
        { id: 6, img: '/images/Badge_AWSLambdaDelivery.svg', alt: 'Mxmart Solutions AWS Lambda Delivery' },
        { id: 7, img: '/images/Badge_ImmersionDay.svg', alt: 'Mxmart Solutions AWS Immersion Day' },
    ];

    const awsCertifications = [
        { id: 1, img: '/images/Certification_CCP.png', alt: 'Mxmart Solutions AWS Certified Cloud Practicioner Foundational' },
        { id: 2, img: '/images/Certification_SAA.png', alt: 'Mxmart Solutions AWS Certified Solutions Architect Associate' },
        { id: 3, img: '/images/Certification_SAP.png', alt: 'Mxmart Solutions AWS Certified Solutions Architect Professional' },
        { id: 4, img: '/images/Certification_SysOps.png', alt: 'Mxmart Solutions AWS Certified SysOps Associate' },
        { id: 5, img: '/images/Certification_DEV.png', alt: 'Mxmart Solutions AWS Certified Developer Associate' },
        { id: 6, img: '/images/Certification_DBS.png', alt: 'Mxmart Solutions AWS Certified Database Speciality' },
        { id: 7, img: '/images/Certification_DOP.png', alt: 'Mxmart Solutions AWS Certified DevOps Engineer Professional' },
    ];

const HomePage = () => {

    const router = useRouter();

    //Contexto que trae la logica para el sitio multidioma
    const { index } = useContext( LanguageContext );

    //Arreglo que mapea los elementos de la seccion Expertos
    const expertos  = [
        { id: 1, title: index.eLearning , subtitle: index.eLearningText , name: 'e-learning' },
        { id: 2, title: index.serverless, subtitle: index.serverlessText, name: 'serverless' },
        { id: 3, title: index.db, subtitle: index.dbText, name: 'db' },
    ];

    //Arreglo que mapea los elementos de la seccion Soluciones
    const soluciones = [
        { id: 1, title: index.migracion, img: '/images/migracion_nube.png', alt: `Mxmart Solutions ${ index.migracion }`, href: '/' },
        { id: 2, title: index.analitica, img: '/images/ciberseguridad_icon.png', alt: `Mxmart Solutions ${ index.analitica }`, href: '/analitica-datos' },
        { id: 3, title: index.recuperacion, img: '/images/DRP_icon.png', alt: `Mxmart Solutions ${ index.recuperacion }`, href: '/drp' },
        { id: 4, title: index.ambientes, img: '/images/hibridos_icon.png', alt: `Mxmart Solutions ${ index.ambientes }`, href: '/ambientes-hibridos' },
        { id: 5, title: index.escritorios, img: '/images/desarrollo_icon.png', alt: `Mxmart Solutions ${ index.escritorios }`, href: '/escritorios-virtuales' },
    ];

    //Arreglo que mapea los elementos de la seccion Servicios
    const servicios = [
        { id: 1, img: '/images/settings_icon.svg', alt: `Mxmart Solutions ${ index.configuracion }`, title: index.configuracion  },
        { id: 2, img: '/images/database_icon.svg', alt: `Mxmart Solutions ${ index.consultoria }`, title: index.consultoria },
        { id: 3, img: '/images/code_icon.svg', alt: `Mxmart Solutions ${ index.serviciosAdministrados }`, title: index.serviciosAdministrados },
        { id: 4, img: '/images/file_icon.svg', alt: `Mxmart Solutions ${ index.serviciosConsultoria }`, title: index.serviciosConsultoria },
    ];

    //Arreglo que mapea los casos de estudio
    const casosEstudio = [
        { id: 1, title: index.caso7Title, description: index.caso7Description, tags: [ index.caso7Tag1, index.caso7Tag2, index.caso7Tag3 ] },
        { id: 2, title: index.caso1Title, description: index.caso1Description, tags: [ index.caso1Tag1, index.caso1Tag2 ] },
        { id: 3, title: index.caso2Title, description: index.caso2Description, tags: [ index.caso2Tag1, index.caso2Tag2 ] },
        { id: 4, title: index.caso3Title, description: index.caso3Description, tags: [ index.caso3Tag1, index.caso3Tag2 ] },
        { id: 5, title: index.caso4Title, description: index.caso4Description, tags: [ index.caso4Tag1, index.caso4Tag2 ] },
        { id: 6, title: index.caso5Title, description: index.caso5Description, tags: [ index.caso5Tag1, index.caso5Tag2 ] },
        { id: 7, title: index.caso6Title, description: index.caso6Description, tags: [ index.caso6Tag1, index.caso6Tag2 ] },
    ];

    //Este useState guarda el valor de la variable para los elementos dinamicos
    // de Expertos y Tecnologias.
    const [contractVariable, setContractVariable] = useState(null);

    //Este useState sirve para validar si el mouse esta encima de los elementos para que se
    //aplique el efecto requerido mediante el estado contractVariable
    const [isExpandedCard, setIsExpandedCard] = useState({
        elearning: false,
        serverless: false,
        db: false,
        nube: false,
        lms: false,
        ecommerce: false,
        cms: false,
        programacion: false,
        db2: false
    });

    //Esta funcion es para actualizar los elementos dinamicos, recibe un parametro 
    // que es el elemento que tiene el onMouseOver y se aplica el efecto adecuado
    const onExpandCard = (card) => {

        //Se aplica el estado con la variable para que todos los elementos se pongan por default
        setContractVariable('contract');

        //Se define el elemento a actualizar
        const updatedCardState = {[card]: true};

        //Se actualiza el estado con el elemento modificado
        setIsExpandedCard({...isExpandedCard, ...updatedCardState});
      };
      
      //Esta funcion es para actualizar todos los elementos dinamicos, al quitar el mouse de algun
      // elemento esta funcion hara que su posicion y estado este default
    const onMouseOut = () => {

        //Modifica el estado para retirar las clases de los elementos que la estan usando
        setContractVariable(null);

        //Modifica el estado para que todos los elementos que pertenecen tengan el valor por default
        setIsExpandedCard({
            elearning: false,
            serverless: false,
            db: false,
            nube: false,
            lms: false,
            ecommerce: false,
            cms: false,
            programacion: false,
            db2: false
        });
    }

  return (
    <PageLayout 
        title={index.metaTitle}
        description={index.metaDescription}
        isHome={ true }
    >

        <Header/>

        <section>
            <div className="flex justify-center items-center mt-20 text-center">
                <h2 className='text-3xl lg:text-5xl text-white font-bold' data-aos="fade-up" data-aos-duration="1500">{ index.aboutTitle }</h2>
                <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" width={17} height={25} className="arrow_mxmart "/>
            </div>
            <div className='flex flex-row justify-center grid grid-cols-4 lg:grid-cols-7 mx-auto max-w-5xl mt-10'>
                {
                    awsBadges.map( badge =>(
                        <Image
                            key={ badge.id }
                            src={ badge.img }
                            alt={ badge.alt }
                            width={150}
                            height={150}
                        />
                    ))
                }
            </div>

            <h3 className='text-center text-white max-w-5xl mx-auto mt-8 p-4'>{ index.aboutText }</h3>
            <div className='flex flex-row justify-center grid grid-cols-4 lg:grid-cols-7 mx-auto max-w-5xl mt-10'>
                {
                    awsCertifications.map( certification =>(
                        <Image
                            key={ certification.id }
                            src={ certification.img }
                            alt={ certification.alt }
                            width={120}
                            height={120}
                        />
                    ))
                }
            </div>

            <h3 className='text-center text-white max-w-5xl mx-auto mt-8 p-4'>{ index.aboutText2 }</h3>
                <Link className='flex justify-center mt-6' href="/nosotros">
                    <p className='text-white text-lg'>{ index.learnMoreAbout }</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" height='22px' alt=""/>
                </Link>
        </section>

        <hr className='max-w-7xl mx-auto mt-20 bg-blue-500 h-0.5' />

        <section id="main_c">
            <div className="flex justify-center items-center mt-20 text-center">
                <h2 className='text-3xl lg:text-5xl text-white font-bold' data-aos="fade-up" data-aos-duration="1500">{ index.expertsTitle }</h2>
                <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" width={17} height={25} className="arrow_mxmart "/>
            </div>
            <div className="content" data-aos="zoom-in" data-aos-duration="1500">
                {
                    expertos.map( item => (
                        <div key={ item.id } className={`box-grid ${ isExpandedCard[item.name] ? 'expand' : contractVariable }`} onMouseOver={ () => onExpandCard( item.name ) } onMouseOut={onMouseOut}>
                            <h3>{ item.title }</h3>
                            <p>{ item.subtitle }</p>
                            <div className="btn_more" data-aos="fade-up" data-aos-duration="1500">
                                <a href='#' aria-label={`Información sobre ${ item.title }`} onClick={ ( e ) => e.preventDefault() }>
                                    <p>{ index.learnMore }</p>
                                    <img src="/images/arrow-right-circle.svg" width="22px" height='22px' alt=""/>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>

        <section id="main_d">
            <div className="title title_center">
                <div className="flex justify-center items-center mt-20 text-center">
                    <h2 className='text-3xl lg:text-5xl text-white font-bold' data-aos="fade-up" data-aos-duration="1500">{ index.solutionsTitle }</h2>
                    <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" width={17} height={25} className="arrow_mxmart "/>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1500" style={{ margin: '16px 0px 0px 0px' }}>{ index.solutionsText }</h3>
            </div>
            <div className="content">
                {
                soluciones.map( solucion => (
                    <div key={ solucion.id } onClick={ () => router.push( solucion.href ) } className="card " data-aos="zoom-in " data-aos-duration="3000">
                        <Image
                            src={ solucion.img }
                            alt={ solucion.alt }
                            width={80}
                            height={80}
                        />
                        <h4>{ solucion.title }</h4>
                        <div className="btn_more items-center">
                            <a href='#' onClick={ ( e ) => e.preventDefault() }>
                                <p>{ index.learnMore }</p>
                                <img src="/images/arrow-right-circle.svg" width="22px" height='22px' alt=""/>
                            </a>
                        </div>
                    </div>
                )) 
                }
            </div>
        </section>

        <section id="main_e">
            <div className="block">
                <div className="title title_center">
                    <div className="flex justify-center items-center mt-20 text-center">
                        <h2 className='text-3xl lg:text-5xl text-white font-bold' data-aos="fade-up" data-aos-duration="1500">{ index.services }</h2>
                        <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" width={17} height={25} className="arrow_mxmart "/>
                    </div>
                    <h3 data-aos="fade-up" data-aos-duration="1500 " style={{ margin: '16px 0px 0px 0px' }}>{ index.servicesText }</h3>    
                </div>
                <div className="content" data-aos="zoom-in" data-aos-duration="3000 ">
                    {
                        servicios.map( servicio => (
                        <div key={ servicio.id } className="card">
                            <Image
                                src={ servicio.img }
                                alt={ servicio.alt }
                                width={50}
                                height={50}
                            />
                            <h4>{ servicio.title }</h4>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>

        <section id="main_f">
            <div className="side_a">
                <div className="title">
                    <div className="flex items-center mt-10 text-center">
                        <h2 className='text-3xl lg:text-5xl text-white font-bold' data-aos="fade-up" data-aos-duration="1500">{ index.tecTitle }</h2>
                        <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" width={17} height={25} className="arrow_mxmart "/>
                    </div>
                    <h3 data-aos="fade-up" data-aos-duration="1500">{ index.tecText }</h3>    
                </div>
                <div className="content flex justify-center">
                    <Image
                        src="/images/vector.png"
                        alt="Mxmart Solutions Tecnologias"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
            <div className="side_b">
                <div className="content">
                    <div className={`tab ${ isExpandedCard['nube'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('nube') } onMouseOut={onMouseOut}>
                        <div className="row">
                            <h4>{ index.tNube }</h4>
                            <img src="/images/plus.svg" width="20px" height='23px' alt=""/> 
                        </div>
                        <ul>
                            <li>
                                { index.dNube }
                            </li>
                        </ul>
                    </div>
                    <div className={`tab ${ isExpandedCard['lms'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('lms') } onMouseOut={onMouseOut}>
                        <div className="row">
                            <h4>{ index.tLms }</h4>
                            <img src="/images/plus.svg" width="20px" height='23px' alt=""/> 
                        </div>
                        <ul>
                            <li>
                                { index.dLms }
                            </li>
                        </ul>
                    </div>
                    <div className={`tab ${ isExpandedCard['ecommerce'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('ecommerce') } onMouseOut={onMouseOut}>
                        <div className="row">
                            <h4>{ index.t3 }</h4>
                            <img src="/images/plus.svg" width="20px" height='23px' alt=""/> 
                        </div>
                        <ul>
                            <li>
                                { index.d3 }
                            </li>
                            <li>
                                { index.d4 }
                            </li>
                        </ul>
                    </div>
                    <div className={`tab ${ isExpandedCard['cms'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('cms') } onMouseOut={onMouseOut}>
                        <div className="row">
                            <h4>{ index.t4 }</h4>
                            <img src="/images/plus.svg" width="20px" height='23px' alt=""/> 
                        </div>
                        <ul>
                            <li>
                                { index.d5 }
                            </li>
                            <li>
                                { index.d6 }
                            </li>
                        </ul>
                    </div>
                    <div className={`tab ${ isExpandedCard['programacion'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('programacion') } onMouseOut={onMouseOut}>
                        <div className="row">
                            <h4>{ index.t5 }</h4>
                            <img src="/images/plus.svg" width="20px" height='23px' alt=""/> 
                        </div>
                        <ul>
                            <li>
                                { index.d7 }
                            </li>
                            <li>
                                { index.d8 }
                            </li>
                            <li>
                                { index.d9 }
                            </li>
                            <li>
                                { index.d10 }
                            </li>
                        </ul>
                    </div>
                    <div className={`tab ${ isExpandedCard['db2'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('db2') } onMouseOut={onMouseOut}>
                        <div className="row">
                            <h4>{ index.t6 }</h4>
                            <img src="/images/plus.svg" width="20px" height='23px' alt=""/> 
                        </div>
                        <ul>
                            <li>
                                { index.d11 }
                            </li>
                            <li>
                                { index.d12 }
                            </li>
                            <li>
                                { index.d13 }
                            </li>
                            <li>
                                { index.d14 }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    <div id="casos_de_exito"></div>

    <section id="main_g">
        <div className="flex justify-center items-center mt-20 text-center">
            <h2 className='text-3xl lg:text-5xl text-white font-bold' data-aos="fade-up" data-aos-duration="1500">{ index.casosDeExito }</h2>
            <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" width={17} height={25} className="arrow_mxmart "/>
        </div>
        <div className="content " data-aos="fade-up " data-aos-duration="1500 ">
            {
              casosEstudio.map( caso => (
                <div key={ caso.id } className="card_case">
                    <div className="container_tags ">
                        {
                            caso.tags.map( tag => (
                            <div key={ tag } className="tag ">
                                { tag }
                            </div>
                            ))
                        }
                    </div>
                    <h3>{ caso.title }</h3>
                    <p>{ caso.description }</p>
                </div>
              ))  
            }
        </div>
    </section>
    <p className="movil-d" style={{textAlign:'center', color:'white',marginTop:'10px',opacity:'0.7'}} data-aos="fade-up " data-aos-duration="1500 ">{ index.scroll }</p>

    </PageLayout>
  )
}

export default HomePage