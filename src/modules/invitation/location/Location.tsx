import React from 'react'
import marco from '@/assets/images/marco-locations.png'
import { openExternalLink } from '@/common/helpers/navigation'
import nube from '@/assets/images/nube-locations.png'
import globo from '@/assets/images/globo-colores.png'

export const Location: React.FC = () => {
    return (
        <section className='locations'>
            <div className="locations__container">
                <p><span className='locations__name'>Layla Charlotte</span> quiere invitarte</p>
                <p>A festejar sus <span className='locations__age'>8 años</span></p>

                <div className="locations__content">
                    <img src={marco} alt="Marco" className='locations__content-img' />
                    <div className="locations__content-main">
                        <div className='locations__content-main-title'>
                            <p>Ubicación</p>
                        </div>

                        <div className='locations__item'>
                            <span className='locations__item-title'>Salón</span>
                            <span className='locations__item-name'>Jardín La Caballa</span>
                            <span className='locations__item-address'>Vivero de La Floresta 906, Casa Blanca, 20297 Aguascalientes, Ags.</span>
                            <div className="locations__button">
                                <button onClick={() => openExternalLink('https://maps.app.goo.gl/ggvCCCQ61RxehkXc6')} className='btn btn--green'>Ver Ubicación</button>
                            </div>
                        </div>
                    </div>
                    <img src={nube} alt="" className='locations__nube locations__nube--left' />
                    <img src={globo} alt="" className='locations__nube locations__nube--right' />
                </div>

                <p>
                    <p className='locations__text'>¡Te esperamos! </p>
                    <p className='locations__time'>en punto de las <span className='locations__name'>03:00 p. m.</span></p></p>
            </div>
        </section>
    )
}
