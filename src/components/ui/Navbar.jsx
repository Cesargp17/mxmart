import Link from 'next/link';
import React, { useState } from 'react'

const menuItems = {
    empresa: false,
    educacion: false,
    servicios: false,
    soluciones: false,
    migracion: false,

    empresa_mobil: false,
    educacion_mobil: false,
    servicios_mobil: false,
    soluciones_mobil: false,
    migracion_mobil: false,
}

export const Navbar = () => {

    const [showVariable, setShowVariable] = useState(null);
    const [isDropdownExpanded, setIsDropdownExpanded] = useState( menuItems );
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isHoverNavbar, setIsHoverNavbar] = useState(false);

    const onExpandDropdown = (item) => {
        if( item.includes('mobil') ){
            const updatedItemState = {[item]: true};
            setIsDropdownExpanded({...menuItems, ...updatedItemState});
            return;
        }
        setShowVariable('show');
        const updatedItemState = {[item]: true};
        setIsDropdownExpanded({...isDropdownExpanded, ...updatedItemState});
      };

      const onToggleMenu = () => {
        setIsDropdownExpanded( menuItems );
        setToggleMenu( !toggleMenu );
      }

      const onMouseOut = () => {
        setShowVariable(null);
        setIsDropdownExpanded({
            empresa: false,
            educacion: false,
            servicios: false,
            soluciones: false,
            migracion: false,

            empresa_mobil: false,
            educacion_mobil: false,
            servicios_mobil: false,
            soluciones_mobil: false,
            migracion_mobil: false,
        });
    }

  return (
    <>
    <header className={`fadeInName ${isHoverNavbar ? 'hover-navbar' : null}`} id="navbar">
        <div className="div_logo">
            <a href="/">
                <div className="header_logo"></div>
            </a>
        </div>
        <div className="div_menu">
            <ul onMouseOver={ () => setIsHoverNavbar(true) } onMouseOut={ () => setIsHoverNavbar(false) }>
                <li>
                    <a className='navbar' onMouseOver={ () => onExpandDropdown( 'empresa' ) } onMouseOut={ onMouseOut }>Empresa</a>
                    <div className={ `dropdown ${ isDropdownExpanded['empresa'] && showVariable }`} onMouseOver={ () => onExpandDropdown( 'empresa' ) } onMouseOut={ onMouseOut }>
                        <Link href="/nosotros">Nosotros</Link>
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
            <div onClick={ () => onToggleMenu() } className="icon_menu_mobile" id="icon_menu_mobile">
            <div className={`menu-icon ${ toggleMenu && 'active' }`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
                    {/* <button onClick={ () => onToggleMenu() }>Movil</button> */}
                </div>
                <div className={ `dropdown ${ toggleMenu ? 'show' : null }` } id="div_menu_mobile">

                    <div>
                        <a className={`${ isDropdownExpanded['empresa_mobil'] && 'menu-border' }`} onClick={ () => onExpandDropdown( 'empresa_mobil' ) }>Empresa
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['empresa_mobil'] ? showVariable : null }`} style={{display: isDropdownExpanded['empresa_mobil'] ? 'block' : 'none' }}>
                            <Link href="/nosotros">Nosotros</Link>
                            <a href="/framework.html">Framework</a>
                            <a href="/#casos_de_exito">Casos de éxito</a>
                            <a href="/recursos.html">Recursos</a>
                            <a href="/vacantes.html">Vacantes</a>
                        </div>
                    </div>

                    <div>
                        <a className={`${ isDropdownExpanded['educacion_mobil'] && 'menu-border' }`} onClick={ () => onExpandDropdown( 'educacion_mobil' ) }>Educación
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['educacion_mobil'] && showVariable }`} style={{display: isDropdownExpanded['educacion_mobil'] ? 'block' : 'none' }}>
                            <a href="/competencia-de-educacion.html">Soluciones en la nube para la educación</a>
                            <a href="/competencia-de-educacion.html#casos-de-exito">Casos de éxito</a>
                        </div>
                    </div>

                    <div>
                        <a className={`${ isDropdownExpanded['servicios_mobil'] && 'menu-border' }`} onClick={ () => onExpandDropdown( 'servicios_mobil' ) }>Servicios
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['servicios_mobil'] && showVariable }`} style={{display: isDropdownExpanded['servicios_mobil'] ? 'block' : 'none' }}>
                            <a href="/assessments.html">Assessment</a>
                            <a href="/modernizacion-infraestructura.html">Modernización de infraestructura para sistemas</a>
                            <a href="/desarrollo-aplicaciones.html">Desarrollo de aplicaciones modernas</a>
                            <a href="/poliza-consultoria.html">Póliza de consultoría</a>
                        </div>
                    </div>

                    <div>
                        <a className={`${ isDropdownExpanded['soluciones_mobil'] && 'menu-border' }`} onClick={ () => onExpandDropdown( 'soluciones_mobil' ) }>Soluciones
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['soluciones_mobil'] && showVariable }`} style={{display: isDropdownExpanded['soluciones_mobil'] ? 'block' : 'none' }}>
                            <a href="/e-learning.html">E-learning</a>
                            <a href="/e-commerce.html">E-commerce</a>
                            <a href="/escritorios-virtuales.html">Escritorios virtuales</a>
                            <a href="/ambientes-hibridos.html">Ambientes híbridos</a>
                            <a href="/analitica-datos.html">Analítica de datos</a>
                            <a href="/aws-lambda.html">Desarrollo Serverless</a>
                        </div>
                    </div>

                    <div>
                        <a className={`${ isDropdownExpanded['migracion_mobil'] && 'menu-border' }`} onClick={ () => onExpandDropdown( 'migracion_mobil' ) }>Migración
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['migracion_mobil'] && showVariable }`} style={{display: isDropdownExpanded['migracion_mobil'] ? 'block' : 'none' }}>
                            <a href="/amazon-aurora.html">Base de datos</a>
                            <a href="/infraestructura-servidores.html">Infraestructura para servidores</a>
                            <a href="/drp.html">Recuperación ante desastres</a>
                        </div>
                    </div>

                </div>
            </div>
    </header>
    </>
  )
}


