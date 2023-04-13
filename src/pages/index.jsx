import { PageLayout } from '@/components/layout/PageLayout'
import { Header } from '@/components/pages/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import es from '../../public/locale/es';
import en from '../../public/locale/en';
import { LanguageContext } from '@/context/LanguageContext';

const HomePage = () => {

    const { index } = useContext( LanguageContext );

    const [contractVariable, setContractVariable] = useState(null);
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

    const onExpandCard = (card) => {
        setContractVariable('contract');
        const updatedCardState = {[card]: true};
        setIsExpandedCard({...isExpandedCard, ...updatedCardState});
      };
      

    const onMouseOut = () => {
        setContractVariable(null);
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
        isHome={ true }
    >

        <Header/>

        <section>
            <div className="flex justify-center items-center mt-20 text-center">
                <h2 className='text-3xl lg:text-5xl text-white font-bold' data-aos="fade-up" data-aos-duration="1500">{ index.aboutTitle }</h2>
                <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" className="arrow_mxmart "/>
            </div>
            <div className='flex flex-row justify-center grid grid-cols-4 lg:grid-cols-7 mx-auto max-w-5xl mt-10'>
                <img className='mx-auto' src="/images/Badge_AdvancedTierServices.svg" alt="" width='150px' />
                <img className='mx-auto' src="/images/Badge_PublicSector.svg" alt="" width='150px' />
                <img className='mx-auto' src="/images/Badge_EducationServices.svg" alt="" width='150px' />
                <img className='mx-auto' src="/images/Badge_EC2forWindows.svg" alt="" width='150px' />
                <img className='mx-auto' src="/images/Badge_AmazonRDSDelivery.svg" alt="" width='150px' />
                <img className='mx-auto' src="/images/Badge_AWSLambdaDelivery.svg" alt="" width='150px' />
                <img className='mx-auto' src="/images/Badge_ImmersionDay.svg" alt="" width='150px' />
            </div>
            <p className='text-center text-white max-w-5xl mx-auto mt-8 p-4'>
            { index.aboutText }
            </p>

            <div className='flex flex-row justify-center grid grid-cols-4 lg:grid-cols-7 mx-auto max-w-5xl mt-10'>
                <img className='mx-auto' src="/images/Certification_CCP.png" alt="" width='120px' />
                <img className='mx-auto' src="/images/Certification_SAA.png" alt="" width='120px' />
                <img className='mx-auto' src="/images/Certification_SAP.png" alt="" width='120px' />
                <img className='mx-auto' src="/images/Certification_SysOps.png" alt="" width='120px' />
                <img className='mx-auto' src="/images/Certification_DEV.png" alt="" width='120px' />
                <img className='mx-auto' src="/images/Certification_DBS.png" alt="" width='120px' />
                <img className='mx-auto' src="/images/Certification_DOP.png" alt="" width='120px' />
            </div>

            <p className='text-center text-white max-w-5xl mx-auto mt-8 p-4'>
            { index.aboutText2 }
            </p>

                <Link className='flex justify-center mt-6' href="/nosotros">
                    <p className='text-white text-lg'>{ index.learnMore }</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" alt=""/>
                </Link>
        </section>

        <hr className='max-w-7xl mx-auto mt-20 bg-blue-500 h-0.5' />

<section id="main_c">
    <div className="title h1_center">
        <h1 data-aos="fade-up" data-aos-duration="1500">{ index.expertsTitle }</h1>
        <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" className="arrow_mxmart2"/>
    </div>
    <div className="content" data-aos="zoom-in" data-aos-duration="1500">
        <div className={`box-grid ${ isExpandedCard['e-learning'] ? 'expand' : contractVariable }`} onMouseOver={ () => onExpandCard('e-learning') } onMouseOut={onMouseOut}>
            <h2>{ index.eLearning }</h2>
            <p>{ index.eLearningText }</p>
            <div className="btn_more" data-aos="fade-up" data-aos-duration="1500">
                <a>
                    <p>{ index.learnMore }</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" alt=""/>
                </a>
            </div>
        </div>
        <div className={`box-grid ${ isExpandedCard['serverless'] ? 'expand' : contractVariable }`} onMouseOver={ () => onExpandCard('serverless') } onMouseOut={onMouseOut}>
            <h2>{ index.serverless }</h2>
            <p>{ index.serverlessText }</p>
            <div className="btn_more" data-aos="fade-up" data-aos-duration="1500">
                <a>
                    <p>{ index.learnMore }</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" alt=""/>
                </a>
            </div>
        </div>
        <div className={`box-grid ${ isExpandedCard['db'] ? 'expand' : contractVariable }`} onMouseOver={ () => onExpandCard('db') } onMouseOut={onMouseOut}>
            <h2>{ index.db }</h2>
            <p>{ index.dbText }</p>
            <div className="btn_more" data-aos="fade-up" data-aos-duration="1500">
                <a>
                    <p>{ index.learnMore }</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" alt=""/>
                </a>
            </div>
        </div>
    </div>
</section>

<section id="main_d">
    <div className="title title_center">
        <div className="div_title">
            <h1 data-aos="fade-up" data-aos-duration="1500">{ index.solutionsTitle }</h1>
            <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" className="arrow_mxmart2"/>
        </div>
        <p data-aos="fade-up" data-aos-duration="1500" style={{ margin: '16px 0px 0px 0px' }}>{ index.solutionsText }</p>
    </div>
            <div className="content"><div className="card"data-aos="zoom-in"data-aos-duration="3000">
                <img src="/images/migracion_nube.png " height="80px" width='80px' alt=""/>
                <h4>{ index.migracion }</h4>
                <div className="btn_more items-center">
                    <a>
                        <p>{ index.learnMore }</p>
                        <img src="/images/arrow-right-circle.svg" className='mt-2' width="22px " alt=""/>
                    </a>
                </div>
            </div>
            <div onClick={ () => router.push('/analitica-datos') } className="card " data-aos="zoom-in " data-aos-duration="3000">
                <img src="/images/ciberseguridad_icon.png " height="80px" width='80px' alt=""/>
                <h4>{ index.analitica }</h4>
                <div className="btn_more items-center">
                    <a>
                        <p>{ index.learnMore }</p>
                        <img src="/images/arrow-right-circle.svg" className='mt-2' width="22px " alt=""/>
                    </a>
                </div>
            </div>
            <div onClick={ () => router.push('/drp') } className="card " data-aos="zoom-in " data-aos-duration="3000">
                <img src="/images/DRP_icon.png " height="80px" width='80px' alt=""/>
                <h4>{ index.recuperacion }</h4>
                <div className="btn_more items-center">
                    <a>
                        <p>{ index.learnMore }</p>
                        <img src="/images/arrow-right-circle.svg" className='mt-2' width="22px " alt=""/>
                    </a>
                </div>
            </div>
            <div onClick={ () => router.push('/ambientes-hibridos') } className="card " data-aos="zoom-in " data-aos-duration="3000">
                <img src="/images/hibridos_icon.png " height="80px" width='80px' alt=""/>
                <h4>{ index.ambientes }</h4>
                <div className="btn_more items-center">
                    <a>
                        <p>{ index.learnMore }</p>
                        <img src="/images/arrow-right-circle.svg" className='mt-2' width="22px " alt=""/>
                    </a>
                </div>
            </div>
            <div onClick={ () => router.push('/escritorios-virtuales') } className="card " data-aos="zoom-in " data-aos-duration="3000">
                <img src="/images/desarrollo_icon.png " height="80px" width='80px' alt=""/>
                <h4>{ index.escritorios }</h4>
                <div className="btn_more items-center">
                    <a>
                        <p>{ index.learnMore }</p>
                        <img src="/images/arrow-right-circle.svg" className='mt-2' width="22px " alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section id="main_e">
        <div className="block">
            <div className="title title_center">
                <div className="div_title">
                    <h1 data-aos="fade-up" data-aos-duration="1500 ">{ index.services }</h1>
                    <img data-aos="fade-up" data-aos-duration="1500 " src="/images/arrow_w.png " alt="" className="arrow_mxmart2 "/>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500 " style={{ margin: '16px 0px 0px 0px' }}>
                { index.servicesText }
                </p>    
            </div>
            <div className="content" data-aos="zoom-in" data-aos-duration="3000 ">
                <div className="card">
                    <img src="/images/settings_icon.svg" alt="" width="50px "/>
                    <h4>{ index.configuracion }</h4>
                </div>
                <div className="card">
                    <img src="/images/database_icon.svg" alt="" width="50px "/>
                    <h4>{ index.consultoria }</h4>
                </div>
                <div className="card">
                    <img src="/images/code_icon.svg" alt="" width="50px "/>
                    <h4>{ index.serviciosAdministrados }</h4>
                </div>
                <div className="card">
                    <img src="/images/file_icon.svg " alt="" width="50px "/>
                    <h4>{ index.serviciosConsultoria }</h4>
                </div>
            </div>
        </div>
    </section>
    <section id="main_f">
        <div className="side_a">
            <div className="title">
                <div className="div_title">
                    <h1 data-aos="fade-up" data-aos-duration="1500 ">{ index.tecTitle }</h1>
                    <img data-aos="fade-up" data-aos-duration="1500 " src="/images/arrow.png " alt="" className="arrow_mxmart2"/>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500">
                { index.tecText }
                </p>    
            </div>
            <div className="content flex justify-center">
                <img src="/images/vector.png" alt="" width='350px'/>
            </div>
        </div>
        <div className="side_b">
            <div className="content">
                <div className={`tab ${ isExpandedCard['nube'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('nube') } onMouseOut={onMouseOut}>
                    <div className="row">
                        <h3>{ index.tNube }</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
                    </div>
                    <ul>
                        <li>
                            { index.dNube }
                        </li>
                    </ul>
                </div>
                <div className={`tab ${ isExpandedCard['lms'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('lms') } onMouseOut={onMouseOut}>
                    <div className="row">
                        <h3>{ index.tLms }</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
                    </div>
                    <ul>
                        <li>
                            { index.dLms }
                        </li>
                    </ul>
                </div>
                <div className={`tab ${ isExpandedCard['ecommerce'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('ecommerce') } onMouseOut={onMouseOut}>
                    <div className="row">
                        <h3>{ index.t3 }</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
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
                        <h3>{ index.t4 }</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
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
                        <h3>{ index.t5 }</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
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
                        <h3>{ index.t6 }</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
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
        <div className="title h1_center ">
            <h1 data-aos="fade-up " data-aos-duration="1500 ">{ index.casosDeExito }</h1>
            <img data-aos="fade-up " data-aos-duration="1500 " src="/images/arrow.png " alt="" className="arrow_mxmart2 "/>
        </div>
        <div className="content " data-aos="fade-up " data-aos-duration="1500 ">
            <div className="card_case">
                <div className="container_tags ">
                    <div className="tag ">
                        WorkDocs
                    </div>
                    <div className="tag ">
                        Lambda
                    </div>
                </div>
                <h2>Replicación y Retención de Amazon WorkDocs</h2>
                <p>Mover manualmente objetos individuales de Amazon WorkDocs a Amazon S3 puede resultar...</p>
            </div>
            <div className="card_case">
                <div className="container_tags ">
                    <div className="tag ">
                        Backup
                    </div>
                    <div className="tag ">
                        CloudFront
                    </div>
                </div>
                <h2>Arquitectura de alta disponibilidad para LMS</h2>
                <p>El constante crecimiento de alumnos, maestros y cursos han generado una alta demanda a los…</p>
            </div>
            <div className="card_case">
                <div className="container_tags ">
                    <div className="tag ">
                        EC2
                    </div>
                    <div className="tag ">
                        AWS WAF
                    </div>
                </div>
                <h2>Sistema de Control Escolar en la nube</h2>
                <p>La UNICLA buscaba migrar todo su entorno de soluciones tecnológicas a la nube para optimizar…</p>
            </div>
            <div className="card_case">
                <div className="container_tags ">
                    <div className="tag ">
                        EC2
                    </div>
                    <div className="tag ">
                        CloudFront
                    </div>
                </div>
                <h2>Moodle sobre Amazon Web Services</h2>
                <p>La UNIVA ha implementado educación en línea a través de la plataforma de gestión de…</p>
            </div>
            <div className="card_case">
                <div className="container_tags ">
                    <div className="tag ">
                        Amplify
                    </div>
                    <div className="tag ">
                        Aurora
                    </div>
                </div>
                <h2>Campus Online basado en AWS</h2>
                <p>IEU cuenta con más de 15 años de experiencia en educación en línea y con más de 60 programas…</p>
            </div>
            <div className="card_case">
                <div className="container_tags ">
                    <div className="tag ">
                        WorkSpaces
                    </div>
                    <div className="tag ">
                        WorkDocs
                    </div>
                </div>
                <h2>Escritorios virtuales en Amazon Web Services</h2>
                <p>Por su expansión en la Ciudad de México, la Asesora de inversiones necesitaba crear una…</p>
            </div>
        </div>
        </section>
        <p className="movil-d" style={{textAlign:'center', color:'white',marginTop:'10px',opacity:'0.7'}} data-aos="fade-up " data-aos-duration="1500 ">-  Deslice hacia la derecha para ver todos los casos de éxito  -</p>

    </PageLayout>
  )
}

export default HomePage