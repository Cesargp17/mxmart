import React from 'react'

export const FrameworkSeguridadImages = ({ title, p1, p2, p3, p4, p5, p6, img1, img2, img3 }) => {
  return (
    <>
        <div class="fs-space">
            <div class="framework-servicios">
                <h6>{ title }</h6>
                <div class="f-servicio">
                    <img src={ img1 }alt="" height="48px" width='48px'/>
                    <p>{ p1 } <br/> { p2 }</p>
                </div>
                <div class="f-servicio">
                    {
                        img2 ? <img src={ img2 } alt="" height="48px" width='48px'/> : null
                    }
                    <p>{ p3 } <br/> { p4 }</p>
                </div>
                <div class="f-servicio">
                    {
                        img3 ? <img src={ img3 } alt="" height="48px" width='48px'/> : null
                    }
                    <p>{ p5 } <br/> { p6 }</p>
                </div>
            </div>
        </div>

        <hr />
    </>
  )
}
