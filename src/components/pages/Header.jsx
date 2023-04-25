import Link from "next/link"
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

export const Header = () => {

const { index } = useContext( LanguageContext );

  return (
    <>
    <section>
        <div className="heroe_layer">
            <div className="principal flex-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/Logo.png" className="w-[200px] lg:w-[350px] mb-10 h-[73px] lg:h-[130px]" alt="Mxmart Solutions Logo"/>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <h1 className='text-3xl lg:text-5xl text-white font-bold text-center mb-8' data-aos="fade-up" data-aos-duration="1500">
                        { index.t1 } <br /> <span className="font-normal">{ index.t2 }</span>
                    </h1>
                </div>
            </div>
            <div className="div_btn mx-auto">
                <Link href="/nosotros" className="btn btn-5">{ index.button1 }</Link>
            </div>
            <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </div>
        <video className='video' autoPlay muted loop id="video_bg">
            <source src="https://res.cloudinary.com/djxmfnsct/video/upload/v1682454518/yd7ad5sq1mfev6ffyqh2.mp4" type="video/mp4" />
            {/* <source src="/videos/video.mp4" type="video/mp4" /> */}
        </video>
    </section>
{/* <section>
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
            <source src="https://mxmartsolutions.com/assets/images/video_bg.mp4" type="video/mp4" />
        </video>
</section>
<div className="public-sector-div">
    <a href="./nosotros.html#reconocimientos">
        <img src="/images/AWS-Public-Sector-Rising-Star.png" alt="" className="public-sector-img-movil"/>
    </a>
</div> */}
    </>

  )
}
