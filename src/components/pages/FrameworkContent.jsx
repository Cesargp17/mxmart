import Link from 'next/link'
import React from 'react'

export const FrameworkContent = ({ classFramework }) => {
  return (
    <div class="main-framework-side-a">
        <div class="main-title-png">
            <div className={ classFramework }>
                <div class="f-side-0"></div>

                <div class="f-side-a">
                    <div class="f-analitica-de-datos">
                        <Link href="/framework-seguridad">
                            <span></span>
                        </Link>
                    </div>
                    <div class="f-image-click"></div>
                </div>
                <div class="f-side-b">
                    <div class="f-drp">
                        <Link href="/framework-analitica-datos">
                            <span></span>
                        </Link>
                    </div>
                    <div class="f-origin">
                        <Link href="./framework">
                            <span></span>
                        </Link>
                    </div>
                    <div class="f-seguridad">
                        <Link href="/framework-arquitectura">
                            <span></span>
                        </Link>
                    </div>
                </div>
                <div class="f-side-c">
                    <div class="f-automatizacion">
                        <Link href="/framework-automatizacion">
                            <span></span>
                        </Link>
                    </div>
                    <div class="f-origin-b">
                        <Link href="/framework">
                            <span></span>
                        </Link>
                    </div>
                    <div class="f-desarrollo">
                        <Link href="/framework-recuperacion-ante-desastres">
                            <span></span>
                        </Link>
                    </div>
                </div>
                <div class="f-side-d">
                    <div class="f-arquitectura">
                        <Link href="/framework-desarrollo">
                            <span></span>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="framework-indicación">
                <div class="framework-click"></div>
                <p><strong>Da click en cualquier sección</strong> del framework para conocer su información correspondiente</p>
            </div>
        </div>
    </div>
  )
}
