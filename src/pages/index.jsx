import { PageLayout } from '@/components/layout/PageLayout'
import { Header } from '@/components/pages/Header';
import React, { useState } from 'react'

const HomePage = () => {

    const [contractVariable, setContractVariable] = useState(null);
    const [isExpandedCard, setIsExpandedCard] = useState({
        elearning: false,
        serverless: false,
        db: false,
        nube: false,
        lms: false,
        ecommerce: false,
        cms: false,
        programacion: false
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
            programacion: false
        });
    }

  return (
    <PageLayout 
        title={'Inicio | Mxmart Solutions'}
    >

        <Header/>

        <section id="main_a">
            <div className="block">
                <div className="side_a">
                    <div className="div_title">
                        <h2 data-aos="fade-up" data-aos-duration="1500">Mxmart</h2>
                        <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" className="arrow_mxmart"/>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="1500">Somos una empresa que desarrolla soluciones y ofrece servicios en la nube, nos enfocamos en resolver las necesidades del cliente, proponiendo siempre alternativas y soluciones para cubrir las mismas.
                        </p>
                        <div className="btn_more" data-aos="fade-up" data-aos-duration="1500">
                <a href="./nosotros.html">
                    <p>Descubrir más</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" alt=""/>
                </a>
            </div>
                </div>
            </div>
        </section>
        <section id="main_b">
    <div className="block">
        <div className="side_a">
            <div className="div_title">
                <h2 data-aos="fade-up" data-aos-duration="1500">Certificaciones</h2>
                <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" className="arrow_mxmart"/>
            </div>
            <p data-aos="fade-up" data-aos-duration="1500">Estamos comprometidos con nuestros clientes, capacitándonos constantemente y obteniendo certificaciones que nos avalan para ofrecer soluciones y servicios a la vanguardia.                
                </p>
            <div className="btn_more" data-aos="fade-up" data-aos-duration="1500">
                <a href="./nosotros.html">
                    <p>Descubrir más</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" alt=""/>
                </a>
            </div>
        </div>
        <div className="side_b" data-aos="zoom-in" data-aos-duration="1500">
            <img src="/images/Badges.png" alt=""/>
        </div>
    </div>
</section>

<section id="main_c">
    <div className="title h1_center">
        <h1 data-aos="fade-up" data-aos-duration="1500">Expertos</h1>
        <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" className="arrow_mxmart2"/>
    </div>
    <div className="content" data-aos="zoom-in" data-aos-duration="1500">
        <div className={`box-grid ${ isExpandedCard['e-learning'] ? 'expand' : contractVariable }`} onMouseOver={ () => onExpandCard('e-learning') } onMouseOut={onMouseOut}>
            <h2>E-learning</h2>
            <p>Implementamos y migramos plataformas de E-Learning para instituciones, permitiendo optimizar recursos y costos en la nube.
                </p>
            <div className="btn_more" data-aos="fade-up" data-aos-duration="1500">
                <a>
                    <p>Descubrir más</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" alt=""/>
                </a>
            </div>
        </div>
        <div className={`box-grid ${ isExpandedCard['serverless'] ? 'expand' : contractVariable }`} onMouseOver={ () => onExpandCard('serverless') } onMouseOut={onMouseOut}>
            <h2>Serverless</h2>
            <p>Construimos y modernizamos aplicaciones mediante código sin la necesidad de aprovisionar ni administrar servidores.
                </p>
            <div className="btn_more" data-aos="fade-up" data-aos-duration="1500">
                <a>
                    <p>Descubrir más</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" alt=""/>
                </a>
            </div>
        </div>
        <div className={`box-grid ${ isExpandedCard['db'] ? 'expand' : contractVariable }`} onMouseOver={ () => onExpandCard('db') } onMouseOut={onMouseOut}>
            <h2>Bases de datos</h2>
            <p>Migración de bases de datos hacia servicios administrados en AWS, que permiten la gestión de diferentes motores de Bases de Datos relacionales y no relacionales.
                </p>
            <div className="btn_more" data-aos="fade-up" data-aos-duration="1500">
                <a>
                    <p>Descubrir más</p>
                    <img src="/images/arrow-right-circle.svg" width="22px" alt=""/>
                </a>
            </div>
        </div>
    </div>
</section>

<section id="main_d">
    <div className="title title_center">
        <div className="div_title">
            <h1 data-aos="fade-up" data-aos-duration="1500">Soluciones</h1>
            <img data-aos="fade-up" data-aos-duration="1500" src="/images/arrow.png" alt="" className="arrow_mxmart2"/>
        </div>
        <p data-aos="fade-up" data-aos-duration="1500" style={{ margin: '16px 0px 0px 0px' }}>Contamos con soluciones flexibles que se adaptan a las necesidades específicas en su institución. Buscando la excelencia operativa y la optimización de recursos.
            </p>
    </div>
    <div className="content"><div className="card"data-aos="zoom-in"data-aos-duration="3000">
                <img src="/images/migracion_nube.png " height="80px" width='80px' alt=""/>
                <h4>Migración a la nube</h4>
                <div className="btn_more ">
                    <a>
                        <p>Descubrir más</p>
                        <img src="/images/arrow-right-circle.svg " width="22px " alt=""/>
                    </a>
                </div>
            </div>
            <div className="card " data-aos="zoom-in " data-aos-duration="3000">
                <img src="/images/ciberseguridad_icon.png " height="80px" width='80px' alt=""/>
                <h4>Analítica de datos</h4>
                <div className="btn_more ">
                    <a>
                        <p>Descubrir más</p>
                        <img src="/images/arrow-right-circle.svg " width="22px " alt=""/>
                    </a>
                </div>
            </div>
            <div className="card " data-aos="zoom-in " data-aos-duration="3000">
                <img src="/images/DRP_icon.png " height="80px" width='80px' alt=""/>
                <h4>Recuperación ante desastres</h4>
                <div className="btn_more ">
                    <a>
                        <p>Descubrir más</p>
                        <img src="/images/arrow-right-circle.svg " width="22px " alt=""/>
                    </a>
                </div>
            </div>
            <div className="card " data-aos="zoom-in " data-aos-duration="3000">
                <img src="/images/hibridos_icon.png " height="80px" width='80px' alt=""/>
                <h4>Ambientes híbridos</h4>
                <div className="btn_more ">
                    <a>
                        <p>Descubrir más</p>
                        <img src="/images/arrow-right-circle.svg " width="22px " alt=""/>
                    </a>
                </div>
            </div>
            <div className="card " data-aos="zoom-in " data-aos-duration="3000">
                <img src="/images/desarrollo_icon.png " height="80px" width='80px' alt=""/>
                <h4>Escritorios virtuales</h4>
                <div className="btn_more ">
                    <a>
                        <p>Descubrir más</p>
                        <img src="/images/arrow-right-circle.svg " width="22px " alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section id="main_e">
        <div className="block">
            <div className="title title_center">
                <div className="div_title">
                    <h1 data-aos="fade-up" data-aos-duration="1500 ">Servicios</h1>
                    <img data-aos="fade-up" data-aos-duration="1500 " src="/images/arrow_w.png " alt="" className="arrow_mxmart2 "/>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500 " style={{ margin: '16px 0px 0px 0px' }}>
                    Ofrecemos servicios especializados en Nube, consultoría en bases de datos, servicios administrados de infraestructura, así como servicios de consultoría para la optimización de sus recursos tecnológicos.
                </p>    
            </div>
            <div className="content" data-aos="zoom-in" data-aos-duration="3000 ">
                <div className="card">
                    <img src="/images/settings_icon.svg" alt="" width="50px "/>
                    <h4>Servicios de configuración a la nube</h4>
                </div>
                <div className="card">
                    <img src="/images/database_icon.svg" alt="" width="50px "/>
                    <h4>Consultoría en bases de datos</h4>
                </div>
                <div className="card">
                    <img src="/images/code_icon.svg" alt="" width="50px "/>
                    <h4>Servicios administrados</h4>
                </div>
                <div className="card">
                    <img src="/images/file_icon.svg " alt="" width="50px "/>
                    <h4>Servicios de consultoría</h4>
                </div>
            </div>
        </div>
    </section>
    <section id="main_f">
        <div className="side_a">
            <div className="title">
                <div className="div_title">
                    <h1 data-aos="fade-up" data-aos-duration="1500 ">Tecnologías</h1>
                    <img data-aos="fade-up" data-aos-duration="1500 " src="/images/arrow.png " alt="" className="arrow_mxmart2"/>
                </div>
                <p data-aos="fade-up" data-aos-duration="1500">
                    El equipo de Mxmart cuenta con el conocimiento y la experiencia para integrar plataformas y herramientas tecnológicas que permitan generar soluciones que cumplan con sus requerimientos.
                </p>    
            </div>
            <div className="content" data-aos="zoom-in" data-aos-duration="1500 ">
                <img src="/images/vector.png" alt=""/>
            </div>
        </div>
        <div className="side_b">
            <div className="content">
                <div className={`tab ${ isExpandedCard['nube'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('nube') } onMouseOut={onMouseOut}>
                    <div className="row">
                        <h3>Nube</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
                    </div>
                    <ul>
                        <li>
                            AWS (Amazon Web Services)
                        </li>
                    </ul>
                </div>
                <div className={`tab ${ isExpandedCard['lms'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('lms') } onMouseOut={onMouseOut}>
                    <div className="row">
                        <h3>LMS</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
                    </div>
                    <ul>
                        <li>
                            Moodle
                        </li>
                    </ul>
                </div>
                <div className={`tab ${ isExpandedCard['ecommerce'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('ecommerce') } onMouseOut={onMouseOut}>
                    <div className="row">
                        <h3>Plataformas E-commerce</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
                    </div>
                    <ul>
                        <li>
                            Magento
                        </li>
                        <li>
                            Prestashop
                        </li>
                    </ul>
                </div>
                <div className={`tab ${ isExpandedCard['cms'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('cms') } onMouseOut={onMouseOut}>
                    <div className="row">
                        <h3>CMS</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
                    </div>
                    <ul>
                        <li>
                            WordPress
                        </li>
                        <li>
                            WooCommerce
                        </li>
                    </ul>
                </div>
                <div className={`tab ${ isExpandedCard['programacion'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('programacion') } onMouseOut={onMouseOut}>
                    <div className="row">
                        <h3>Lenguajes de programación</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
                    </div>
                    <ul>
                        <li>
                            PHP
                        </li>
                        <li>
                            Python
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                    </ul>
                </div>
                <div className={`tab ${ isExpandedCard['db'] && 'show_tab' } `} onMouseOver={ () => onExpandCard('db') } onMouseOut={onMouseOut}>
                    <div className="row">
                        <h3>Motores de Bases de Datos</h3>
                        {/* <img src="/images/plus.svg" width="20px" alt=""/> */}
                    </div>
                    <ul>
                        <li>
                            PostgreSQL
                        </li>
                        <li>
                            MySQL
                        </li>
                        <li>
                            MariaDB
                        </li>
                        <li>
                            SQL Server
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div id="casos_de_exito "></div>
    <section id="main_g">
        <div className="title h1_center ">
            <h1 data-aos="fade-up " data-aos-duration="1500 ">Casos de éxito</h1>
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