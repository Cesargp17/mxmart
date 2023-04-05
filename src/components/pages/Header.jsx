export const Header = () => {

  return (
    <>
<section>
    <div className="heroe_layer">
        <div className="principal" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1>
                    Soluciones tecnológicas <br/>
                    <span>hacia la transformación digital</span>
                </h1>
                <img data-aos="fade-right" data-aos-duration="3000" src="/images/arrow_w.png" alt="" className="arrow_mxmart flecha-inicio" style={{ width: '30px !important', height: '40px !important', marginLeft: '22px',marginTop: '28px' }}/>
            </div>
            <div className="principal-reconocimiento">
                <a href="./nosotros.html#reconocimientos">
                    <img src="/images/AWS-Public-Sector-Rising-Star.png" alt="" className="public-sector-img" style={{ marginTop: '28px', cursor: 'pointer' }}/>
                </a>
            </div>
        </div>
        <div className="div_btn">
            <a href="./nosotros.html" className="button button-5">Más información</a>
        </div>
        <div className="scroll-downs">
            <div className="mousey">
                <div className="scroller"></div>
            </div>
        </div>
    </div>
    <video className='video' autoPlay muted loop id="video_bg">
            <source src="/videos/video_bg.mp4" type="video/mp4" />
        </video>
</section>
<div className="public-sector-div">
    <a href="./nosotros.html#reconocimientos">
        <img src="/images/AWS-Public-Sector-Rising-Star.png" alt="" className="public-sector-img-movil"/>
    </a>
</div>
    </>

  )
}
