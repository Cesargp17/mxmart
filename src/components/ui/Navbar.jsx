
import { LanguageContext } from '@/context/LanguageContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'

//Estado inicial de los elementos del menú, al estar en false todos
//los elementos estaran contraidos, es decir, estaran por default
const menuItems = {
    empresa: false,
    educacion: false,
    servicios: false,
    soluciones: false,
    migracion: false,
    lang: false,

    empresa_mobil: false,
    educacion_mobil: false,
    servicios_mobil: false,
    soluciones_mobil: false,
    migracion_mobil: false,
    contact_mobil: false,
    lang_mobil: false,
}

export const Navbar = ({ isHome }) => {

    //Contexto que trae la logica para el sitio multidioma
    const { navbar } = useContext( LanguageContext );

    //Estado que guarda la variable para que los elementos se puedan expandir, guarda dos valores null y show
    //cuando el valor esta en null el elemento del navbar estara contraido, pero si esta en show el elemento del navbar
    //aparecera expandido y se veran los submenus
    const [showVariable, setShowVariable] = useState(null);

    //Este estado guarda por defecto el menuItems, que tiene todos los elementos por default
    //este estado cambia dependiendo la opcion que el usuario ponga el mouse encima
    const [isDropdownExpanded, setIsDropdownExpanded] = useState( menuItems );

    //Este estado guarda el estado del menu hamburguesa, tiene 2 estados false y true,
    //cuando esta en true el menu estara sin desplegar, pero si esta en true el menu estara desplegado
    const [toggleMenu, setToggleMenu] = useState(false);

    //Este estado guarda el momento cuando el usuario hace hover sobre algun elemento del navbar
    //y hace que el bg del navbar cambie de color
    const [isHoverNavbar, setIsHoverNavbar] = useState(false);

    const { asPath } =  useRouter();

    //Funcion que sirve para cambiar el estado de los elementos del menu, recibe 2 parametros,
    //el item que es el elemento del menu que se va modificar y el evento para evitar el comportamiento por default
    const onExpandDropdown = (item, e) => {

        //evitamos el comportamiento por default
        e.preventDefault();

        //validacion que sirve para saber si el elemento que se selecciono es de contactanos
        //y poder cambiar el estado del menu hamburguesa
        if( item === 'contact_mobil' ){
            setToggleMenu( !toggleMenu );
            return;
        }

        //validacion que sirve para saber si el elemento que se selecciono es del menu mobil
        if( item.includes('mobil') ){
            //este proceso es para modificar el valor del elemento del navbar, ejemplo
            //si se hace hover por el elemento company, este modificara su estado de true a false
            //y pasará a expandir sus submenus
            const updatedItemState = {[item]: true};

            //aqui se esta modificando el estado para que el elemento seleccionado tenga true y los demas false,
            setIsDropdownExpanded({...menuItems, ...updatedItemState});
            return;
        }

        //se modifica el estado con la variable show para que se muestre el dropdown list del elemento seleccionado
        setShowVariable('show');

        //este proceso es para modificar el valor del elemento del navbar, ejemplo
        //si se hace hover por el elemento company, este modificara su estado de true a false
        //y pasará a expandir sus submenus
        const updatedItemState = {[item]: true};

        //aqui se esta modificando el estado para que el elemento seleccionado tenga true y los demas false,
        setIsDropdownExpanded({...isDropdownExpanded, ...updatedItemState});
      };

      //funcion que sirve para modificar el estado del menu hamburguesa y regresar
      //los elementos del menu a su estado por default
      const onToggleMenu = () => {
        setIsDropdownExpanded( menuItems );
        setToggleMenu( !toggleMenu );
      }

      //funcion que sirve para limpiar los estados y regresar el estado del navbar a por defecto,
      //esta funcion ocurre cuando el usuario quita el mouse de alguna de las opciones del navbar
      const onMouseOut = () => {

        //se limpia el estado para que no guarde ninguna clase
        setShowVariable(null);

        //se ponen por defecto los elementos del navbar modificando el estado
        setIsDropdownExpanded({
            empresa: false,
            educacion: false,
            servicios: false,
            soluciones: false,
            migracion: false,
            lang: false,

            empresa_mobil: false,
            educacion_mobil: false,
            servicios_mobil: false,
            soluciones_mobil: false,
            migracion_mobil: false,
            contact_mobil: false,
            lang_mobil: false,
        });
    }

  return (
    <>
    <header className={`${ isHome && 'lg:justify-center', isHoverNavbar && 'hover-navbar' }`} id="navbar">
        <div className="div_logo">
            <Link href="/" aria-label='Logo de la empresa Mxmart Solutions - Página principal'>
                <div className={`header_logo ${ isHome && 'hidden' }`}></div>
            </Link>
        </div>
        <div className="div_menu">
            <ul onMouseOver={ () => setIsHoverNavbar(true) } onMouseOut={ () => setIsHoverNavbar(false) }>
                <li>
                    <a href='#' onClick={ ( e ) => e.preventDefault() } className='navbar flex gap-1' onMouseOver={ (e) => onExpandDropdown( 'empresa', e ) } onMouseOut={ onMouseOut }>{ navbar.empresa } { isHome && <img src="/images/chevron.svg" width='10px' alt='' /> } </a>
                    <div className={ `dropdown ${ isDropdownExpanded['empresa'] && showVariable }`} onMouseOver={ (e) => onExpandDropdown( 'empresa', e ) } onMouseOut={ onMouseOut }>
                        <Link href="/nosotros">{ navbar.nosotros }</Link>
                        <Link href="/framework">{ navbar.framework }</Link>
                        <Link href="/#casos_de_exito">{ navbar.casos }</Link>
                        <Link href="/recursos">{ navbar.recursos }</Link>
                        <Link href="/vacantes">{ navbar.vacantes }</Link>
                    </div>
                </li>
                <li>
                    <a href='#' onClick={ ( e ) => e.preventDefault() } className="navbar flex gap-1" onMouseOver={ (e) => onExpandDropdown( 'educacion', e ) } onMouseOut={ onMouseOut }>{ navbar.educacion } { isHome && <img src="/images/chevron.svg" width='10px' alt='' /> }</a>
                        <div className={ `dropdown ${ isDropdownExpanded['educacion'] && showVariable }`} onMouseOver={ (e) => onExpandDropdown( 'educacion', e ) } onMouseOut={ onMouseOut }>
                            <Link href="/competencia-de-educacion">{ navbar.solucionesNube }</Link>
                            <Link href="/competencia-de-educacion#casos-de-exito">{ navbar.casosExito }</Link>
                        </div>
                    </li>
                    <li>
                    <a href='#' onClick={ ( e ) => e.preventDefault() } className="navbar flex gap-1" onMouseOver={ (e) => onExpandDropdown( 'servicios', e ) } onMouseOut={ onMouseOut }>{ navbar.servicios } { isHome && <img src="/images/chevron.svg" width='10px' alt='' /> }</a>
                    <div className={ `dropdown ${ isDropdownExpanded['servicios'] && showVariable }`} onMouseOver={ (e) => onExpandDropdown( 'servicios', e ) } onMouseOut={ onMouseOut }>
                            <Link href="/assessments">{ navbar.assesment }</Link>
                            <Link href="/modernizacion-infraestructura">{ navbar.modernizacion }</Link>
                            <Link href="/desarrollo-aplicaciones">{ navbar.desarrollo }</Link>
                            <Link href="/poliza-consultoria">{ navbar.poliza }</Link>
                        </div>
                    </li>
                    <li>
                    <a href='#' onClick={ ( e ) => e.preventDefault() } className="navbar flex gap-1" onMouseOver={ (e) => onExpandDropdown( 'soluciones', e ) } onMouseOut={ onMouseOut }>{ navbar.soluciones } { isHome && <img src="/images/chevron.svg" width='10px' alt='' /> }</a>
                    <div className={ `dropdown ${ isDropdownExpanded['soluciones'] && showVariable }`} onMouseOver={ (e) => onExpandDropdown( 'soluciones', e ) } onMouseOut={ onMouseOut }>
                            <Link href="/e-learning">{ navbar.eLearning }</Link>
                            <Link href="/e-commerce">{ navbar.eCommerce }</Link>
                            <Link href="/escritorios-virtuales">{ navbar.escritorios }</Link>
                            <Link href="/ambientes-hibridos">{ navbar.ambientes }</Link>
                            <Link href="/analitica-datos">{ navbar.analitica }</Link>
                            <Link href="/aws-lambda">{ navbar.desarrollo }</Link>
                        </div>
                    </li>
                    <li>
                    <a href='#' onClick={ ( e ) => e.preventDefault() } className="navbar flex gap-1" onMouseOver={ (e) => onExpandDropdown( 'migracion', e ) } onMouseOut={ onMouseOut }>{ navbar.migracion } { isHome && <img src="/images/chevron.svg" width='10px' alt='' /> }</a>
                    <div className={ `dropdown ${ isDropdownExpanded['migracion'] && showVariable }`} onMouseOver={ (e) => onExpandDropdown( 'migracion', e ) } onMouseOut={ onMouseOut }>
                            <Link href="/amazon-aurora">{ navbar.base }</Link>
                            <Link href="/infraestructura-servidores">{ navbar.infraestructura }</Link>
                            <Link href="/drp">{ navbar.recuperacion }</Link>
                        </div>
                    </li>
                    <li>
                        <Link href='#main_h' className="navbar flex gap-1">{ navbar.contactanos } </Link>
                    </li>
                    <li>
                    <a href='#' onClick={ ( e ) => e.preventDefault() } className="navbar flex gap-1" onMouseOver={ (e) => onExpandDropdown( 'lang', e ) } onMouseOut={ onMouseOut }><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a>
                    <div className={ `dropdown ${ isDropdownExpanded['lang'] && showVariable }`} onMouseOver={ (e) => onExpandDropdown( 'lang', e ) } onMouseOut={ onMouseOut }>
                            <Link href={ asPath } locale="es">Español</Link>
                            <Link href={ asPath } locale="en">English</Link>
                            {/* <Link href="javascript:void(0)" onClick={() => onChangeLangSite('es')}>Español</Link>
                            <Link href="javascript:void(0)" onClick={() => onChangeLangSite('en')}>English</Link> */}
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
                        <a href='#' className={`${ isDropdownExpanded['empresa_mobil'] && 'menu-border' }`} onClick={ (e) => onExpandDropdown( 'empresa_mobil', e ) }>{ navbar.empresa }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['empresa_mobil'] ? showVariable : null }`} style={{display: isDropdownExpanded['empresa_mobil'] ? 'block' : 'none' }}>
                            <Link href="/nosotros">{ navbar.nosotros }</Link>
                            <Link href="/framework">{ navbar.framework }</Link>
                            <Link href="/#casos_de_exito">{ navbar.casos }</Link>
                            <Link href="/recursos">{ navbar.recursos }</Link>
                            <Link href="/vacantes">{ navbar.vacantes }</Link>
                        </div>
                    </div>

                    <div>
                        <a href='#' className={`${ isDropdownExpanded['educacion_mobil'] && 'menu-border' }`} onClick={ (e) => onExpandDropdown( 'educacion_mobil', e ) }>{ navbar.educacion }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['educacion_mobil'] && showVariable }`} style={{display: isDropdownExpanded['educacion_mobil'] ? 'block' : 'none' }}>
                        <Link href="/competencia-de-educacion">{ navbar.solucionesNube }</Link>
                            <Link href="/competencia-de-educacion#casos-de-exito">{ navbar.casosExito }</Link>
                        </div>
                    </div>

                    <div>
                        <a href='#' className={`${ isDropdownExpanded['servicios_mobil'] && 'menu-border' }`} onClick={ (e) => onExpandDropdown( 'servicios_mobil', e ) }>{ navbar.servicios }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['servicios_mobil'] && showVariable }`} style={{display: isDropdownExpanded['servicios_mobil'] ? 'block' : 'none' }}>
                        <Link href="/assessments">{ navbar.assesment }</Link>
                            <Link href="/modernizacion-infraestructura">{ navbar.modernizacion }</Link>
                            <Link href="/desarrollo-aplicaciones">{ navbar.desarrollo }</Link>
                            <Link href="/poliza-consultoria">{ navbar.poliza }</Link>
                        </div>
                    </div>

                    <div>
                        <a href='#' className={`${ isDropdownExpanded['soluciones_mobil'] && 'menu-border' }`} onClick={ (e) => onExpandDropdown( 'soluciones_mobil', e ) }>{ navbar.soluciones }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['soluciones_mobil'] && showVariable }`} style={{display: isDropdownExpanded['soluciones_mobil'] ? 'block' : 'none' }}>
                            <Link href="/e-learning">{ navbar.eLearning }</Link>
                            <Link href="/e-commerce">{ navbar.eCommerce }</Link>
                            <Link href="/escritorios-virtuales">{ navbar.escritorios }</Link>
                            <Link href="/ambientes-hibridos">{ navbar.ambientes }</Link>
                            <Link href="/analitica-datos">{ navbar.analitica }</Link>
                            <Link href="/aws-lambda">{ navbar.desarrollo }</Link>
                        </div>
                    </div>

                    <div>
                        <a href='#' className={`${ isDropdownExpanded['migracion_mobil'] && 'menu-border' }`} onClick={ (e) => onExpandDropdown( 'migracion_mobil', e ) }>{ navbar.migracion }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['migracion_mobil'] && showVariable }`} style={{display: isDropdownExpanded['migracion_mobil'] ? 'block' : 'none' }}>
                            <Link href="/amazon-aurora">{ navbar.base }</Link>
                            <Link href="/infraestructura-servidores">{ navbar.infraestructura }</Link>
                            <Link href="/drp">{ navbar.recuperacion }</Link>
                        </div>
                    </div>

                    <div>
                        {/* <Link href='#main_h' className="navbar flex gap-1">Contáctanos </Link> */}
                        <Link href='#main_h' onClick={ () => onExpandDropdown( 'contact_mobil' ) }>{ navbar.contactanos }</Link>
                    </div>

                    <div>
                        <a href='#' className={`${ isDropdownExpanded['lang_mobil'] && 'menu-border' }`} onClick={ (e) => onExpandDropdown( 'lang_mobil', e ) }>{ navbar.language }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </a>
                        <div className={ `mobile_submenu ${ isDropdownExpanded['lang_mobil'] && showVariable }`} style={{display: isDropdownExpanded['lang_mobil'] ? 'block' : 'none' }}>
                            <Link href={ asPath } locale="es">Español</Link>
                            <Link href={ asPath } locale="en">English</Link>
                        </div>
                    </div>

                </div>
            </div>
    </header>
    </>
  )
}


