import Link from 'next/link'
import React from 'react'

export const FrameworkContent = ({ classNameFramework }) => {

  return (
    <div className="main-framework-side-a">
        <div className="main-title-png">
            <div className={ classNameFramework }>
                <div className="f-side-0"></div>

                <div className="f-side-a">
                    <div className="f-analitica-de-datos">
                        <Link href="/framework-seguridad">
                            <span></span>
                        </Link>
                    </div>
                    <div className="f-image-click"></div>
                </div>
                <div className="f-side-b">
                    <div className="f-drp">
                        <Link href="/framework-analitica-datos">
                            <span></span>
                        </Link>
                    </div>
                    <div className="f-origin">
                        <Link href="./framework">
                            <span></span>
                        </Link>
                    </div>
                    <div className="f-seguridad">
                        <Link href="/framework-arquitectura">
                            <span></span>
                        </Link>
                    </div>
                </div>
                <div className="f-side-c">
                    <div className="f-automatizacion">
                        <Link href="/framework-automatizacion">
                            <span></span>
                        </Link>
                    </div>
                    <div className="f-origin-b">
                        <Link href="/framework">
                            <span></span>
                        </Link>
                    </div>
                    <div className="f-desarrollo">
                        <Link href="/framework-recuperacion-ante-desastres">
                            <span></span>
                        </Link>
                    </div>
                </div>
                <div className="f-side-d">
                    <div className="f-arquitectura">
                        <Link href="/framework-desarrollo">
                            <span></span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="framework-indicación">
                <div className="framework-click"></div>
                <p><strong>Da click en cualquier sección</strong> del framework para conocer su información correspondiente</p>
            </div>
        </div>
    </div>
  )
}
