import React, { useState } from 'react'

export const Navbar = () => {

    const [showVariable, setShowVariable] = useState(null);
    const [isDropdownExpanded, setIsDropdownExpanded] = useState({
        empresa: false,
        educacion: false,
        servicios: false,
        soluciones: false,
        migracion: false,
    });

    const onExpandDropdown = (item) => {
        setShowVariable('show');
        const updatedItemState = {[item]: true};
        setIsDropdownExpanded({...isDropdownExpanded, ...updatedItemState});
      };

      const onMouseOut = () => {
        setShowVariable(null);
        setIsDropdownExpanded({
            empresa: false,
            educacion: false,
            servicios: false,
            soluciones: false,
            migracion: false,
        });
    }

  return (
    <>
    <header id="navbar" data-aos="fade-down" data-aos-duration="1500">
        <div className="div_logo">
            <a href="/">
                <div className="header_logo"></div>
            </a>
        </div>
        <div className="div_menu">
            <ul>
                <li>
                    <a className='navbar' onMouseOver={ () => onExpandDropdown( 'empresa' ) } onMouseOut={ onMouseOut }>Empresa</a>
                    <div className={ `dropdown ${ isDropdownExpanded['empresa'] && showVariable }`} onMouseOver={ () => onExpandDropdown( 'empresa' ) } onMouseOut={ onMouseOut }>
                        <a href="/nosotros.html">Nosotros</a>
                        <a href="/framework.html">Framework</a>
                        <a href="/#casos_de_exito">Casos de éxito</a>
                        <a href="/recursos.html">Recursos</a>
                        <a href="/vacantes.html">Vacantes</a>
                    </div>
                </li>
                <li>
                        <a className="navbar" onMouseOver={ () => onExpandDropdown( 'educacion' ) } onMouseOut={ onMouseOut }>Educación</a>
                        <div className={ `dropdown ${ isDropdownExpanded['educacion'] && showVariable }`} onMouseOver={ () => onExpandDropdown( 'educacion' ) } onMouseOut={ onMouseOut }>
                            <a href="/competencia-de-educacion.html">Soluciones en la nube para la educación</a>
                            <a href="/competencia-de-educacion.html#casos-de-exito">Casos de éxito</a>
                        </div>
                    </li>
                    <li>
                    <a className="navbar" onMouseOver={ () => onExpandDropdown( 'servicios' ) } onMouseOut={ onMouseOut }>Servicios</a>
                    <div className={ `dropdown ${ isDropdownExpanded['servicios'] && showVariable }`} onMouseOver={ () => onExpandDropdown( 'servicios' ) } onMouseOut={ onMouseOut }>
                            <a href="/assessments.html">Assessment</a>
                            <a href="/modernizacion-infraestructura.html">Modernización de infraestructura para sistemas</a>
                            <a href="/desarrollo-aplicaciones.html">Desarrollo de aplicaciones modernas</a>
                            <a href="/poliza-consultoria.html">Póliza de consultoría</a>
                        </div>
                    </li>
                    <li>
                    <a className="navbar" onMouseOver={ () => onExpandDropdown( 'soluciones' ) } onMouseOut={ onMouseOut }>Soluciones</a>
                    <div className={ `dropdown ${ isDropdownExpanded['soluciones'] && showVariable }`} onMouseOver={ () => onExpandDropdown( 'soluciones' ) } onMouseOut={ onMouseOut }>
                            <a href="/e-learning.html">E-learning</a>
                            <a href="/e-commerce.html">E-commerce</a>
                            <a href="/escritorios-virtuales.html">Escritorios virtuales</a>
                            <a href="/ambientes-hibridos.html">Ambientes híbridos</a>
                            <a href="/analitica-datos.html">Analítica de datos</a>
                            <a href="/aws-lambda.html">Desarrollo Serverless</a>
                        </div>
                    </li>
                    <li>
                    <a className="navbar" onMouseOver={ () => onExpandDropdown( 'migracion' ) } onMouseOut={ onMouseOut }>Migración</a>
                    <div className={ `dropdown ${ isDropdownExpanded['migracion'] && showVariable }`} onMouseOver={ () => onExpandDropdown( 'migracion' ) } onMouseOut={ onMouseOut }>
                            <a href="/amazon-aurora.html">Base de datos</a>
                            <a href="/infraestructura-servidores.html">Infraestructura para servidores</a>
                            <a href="/drp.html">Recuperación ante desastres</a>
                        </div>
                    </li>
            </ul>
            <div className="icon_menu_mobile" id="icon_menu_mobile">
                    <button>Movil</button>
                </div>
                <div className="dropdown" id="div_menu_mobile"></div>
        </div>
    </header>
    </>
  )
}
